import { slides } from "@/data/slides";
import { readDeckIndex, writeDeckIndex } from "@/lib/deck-session";

function clampIndex(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(Math.trunc(value), 0), slides.length - 1);
}

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(
    { index: await readDeckIndex() },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { index?: number } | null;
  const index = clampIndex(body?.index ?? Number.NaN);
  await writeDeckIndex(index);
  return Response.json(
    { index: await readDeckIndex() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
