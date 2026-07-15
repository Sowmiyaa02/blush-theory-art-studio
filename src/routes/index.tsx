import { createFileRoute } from "@tanstack/react-router";
import { BlushSite } from "@/components/blush/BlushSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLUSH THEORY ART — Custom Handmade Portraits & Paintings" },
      { name: "description", content: "Handcrafted custom portraits, couple, family, pet paintings and personalized art. Turning your memories into timeless masterpieces." },
    ],
  }),
  component: BlushSite,
});