import { readDeckIndex, subscribeDeck } from "@/lib/deck-session";

export const dynamic = "force-dynamic";

export function GET() {
  const encoder = new TextEncoder();
  let unsubscribe = () => {};
  let ping: ReturnType<typeof setInterval> | undefined;

  const stream = new ReadableStream({
    start(controller) {
      const send = (index: number) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ index })}\n\n`),
        );
      };

      void readDeckIndex().then(send);
      unsubscribe = subscribeDeck(send);
      ping = setInterval(() => {
        controller.enqueue(encoder.encode(`: ping\n\n`));
      }, 15000);
    },
    cancel() {
      unsubscribe();
      if (ping) clearInterval(ping);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
