import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  year: string;
  layout: "c1" | "c2" | "c3" | "c4" | "c5";
};

export const projects: Project[] = [
  {
    id: "halo",
    title: "Halo Analytics",
    description: "A realtime fintech dashboard rebuilt for clarity — surfacing what matters in a single glance.",
    image: project1,
    stack: ["Next.js", "D3", "WebSockets"],
    link: "#",
    year: "2025",
    layout: "c1",
  },
  {
    id: "monolith",
    title: "Monolith Studio",
    description: "Identity & site for an architecture practice grounded in brutalist material honesty.",
    image: project2,
    stack: ["Astro", "GSAP", "CMS"],
    link: "#",
    year: "2024",
    layout: "c2",
  },
  {
    id: "nocturne",
    title: "Nocturne",
    description: "Direct-to-consumer commerce for a moody, after-dark sneaker label.",
    image: project3,
    stack: ["Shopify", "React", "Three.js"],
    link: "#",
    year: "2024",
    layout: "c3",
  },
  {
    id: "fluid",
    title: "Fluid OS",
    description: "Brand system & marketing site for a generative design tool with a metallic soul.",
    image: project4,
    stack: ["WebGL", "GLSL", "Motion"],
    link: "#",
    year: "2023",
    layout: "c4",
  },
  {
    id: "echo",
    title: "Echo Player",
    description: "An iOS music app redesign focused on the ritual of listening.",
    image: project5,
    stack: ["Swift", "Figma", "Sound"],
    link: "#",
    year: "2023",
    layout: "c5",
  },
];