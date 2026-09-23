import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { Redis } from "@upstash/redis";

type Listener = (index: number) => void;

type DeckSession = {
  index: number;
  listeners: Set<Listener>;
};

const filePath = path.join(process.cwd(), "data", "deck-live.json");
const redisKey = "deck:index";

const globalStore = globalThis as typeof globalThis & {
  __palestraDeck?: DeckSession;
};

function store(): DeckSession {
  if (!globalStore.__palestraDeck) {
    globalStore.__palestraDeck = { index: 0, listeners: new Set() };
  }
  return globalStore.__palestraDeck;
}

function redisClient() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function asIndex(value: unknown) {
  const index = typeof value === "number" ? value : Number(value);
  return Number.isFinite(index) ? index : null;
}

async function readFileIndex() {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as { index?: number };
    return asIndex(parsed.index);
  } catch {
    return null;
  }
}

async function writeFileIndex(index: number) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify({ index }, null, 2)}\n`);
}

export async function readDeckIndex() {
  const redis = redisClient();
  const index = redis ? asIndex(await redis.get(redisKey)) : await readFileIndex();
  if (index != null) {
    store().index = index;
    return index;
  }
  return store().index;
}

export async function writeDeckIndex(index: number) {
  const session = store();
  const changed = session.index !== index;
  session.index = index;

  const redis = redisClient();
  if (redis) {
    await redis.set(redisKey, index);
  } else {
    await writeFileIndex(index);
  }

  if (!changed) return;
  for (const listener of session.listeners) listener(index);
}

export function subscribeDeck(listener: Listener) {
  const session = store();
  session.listeners.add(listener);
  return () => {
    session.listeners.delete(listener);
  };
}
