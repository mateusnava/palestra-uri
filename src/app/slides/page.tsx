import type { Metadata } from "next";
import { SlideIndex } from "@/components/slide-index";

export const metadata: Metadata = {
  title: "Slides",
};

export default function SlidesPage() {
  return <SlideIndex />;
}
