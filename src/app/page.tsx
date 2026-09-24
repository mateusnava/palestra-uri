import { Deck } from "@/components/deck";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ n?: string; sync?: string }>;
}) {
  const { n, sync } = await searchParams;
  const parsed = n ? Number.parseInt(n, 10) : Number.NaN;
  const startIndex = Number.isFinite(parsed) ? parsed - 1 : undefined;
  const syncEnabled = sync === "true";

  return <Deck startIndex={startIndex} syncEnabled={syncEnabled} />;
}
