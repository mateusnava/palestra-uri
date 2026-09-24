import { Presenter } from "@/components/presenter";

export default async function NotasPage({
  searchParams,
}: {
  searchParams: Promise<{ sync?: string }>;
}) {
  const { sync } = await searchParams;
  const syncEnabled = sync === "true";

  return <Presenter syncEnabled={syncEnabled} />;
}
