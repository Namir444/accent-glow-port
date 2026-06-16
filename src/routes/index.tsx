import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sol Kai — Designer & Developer Portfolio" },
      { name: "description", content: "Independent designer-engineer crafting expressive interfaces, brand systems, and motion-led product experiences." },
      { property: "og:title", content: "Sol Kai — Designer & Developer Portfolio" },
      { property: "og:description", content: "Independent designer-engineer crafting expressive interfaces, brand systems, and motion-led product experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
