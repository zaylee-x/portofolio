export type ProjectType = "uiux" | "frontend"
export type ProjectAccent = "purple" | "cyan"

export type Project = {
  id: string
  type: ProjectType
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  accent: ProjectAccent
  link?: string
  live?: string
  repo?: string
}

export const projects: Project[] = [
  // UI/UX
  {
  id: "bing",
  type: "uiux",
  title: "Redesign Bing Mobile",
  subtitle: "Assignment MSIB • UI/UX Design",
  description:
    "Improving mobile search experience through simplified navigation and clearer content hierarchy.",
  tags: ["UI/UX", "Research", "Prototype"],
  image: "/bing.svg",
  accent: "purple",
  link: "https://www.figma.com/design/qrkyMfmPnqjz3TMxlJQqZH/UI-UX-Bootcamp-SC?node-id=0-1&t=1mjc46DxCRDEGmYh-1",
},
  {
    id: "maritimate",
    type: "uiux",
    title: "Maritimate",
    subtitle: "Team Project MSIB • UI/UX Design",
    description:
      "Enhancing fish market transparency throughuser research and an interactive prototype.",
    tags: ["UI/UX", "Research", "Prototype"],
    image: "/maritimate.svg",
    accent: "purple",
    link: "https://www.figma.com/design/qrkyMfmPnqjz3TMxlJQqZH/UI-UX-Bootcamp-SC?node-id=0-1&t=1mjc46DxCRDEGmYh-1",
  },

  // FRONTEND
  {
    id: "bmical",
    type: "frontend",
    title: "BMI Calculator Web App",
    subtitle: "Perempuan Inovasi 2025 • FE Assignment",
    description:
      "A simple web-based BMI calculator built to practice JavaScript logic, DOM manipulation, and basic user interaction.",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    image: "/IBMCal.svg",
    accent: "cyan",
    live: "https://ibmcal.vercel.app/",
    repo: "https://github.com/zaylee-x/ibmcal",
  },
  {
    id: "cart",
    type: "frontend",
    title: "Cart App – Shopping Cart",
    subtitle: "Perempuan Inovasi 2025 • FE Assignment • Next.js Project",
    description:
      "A modern and responsive shopping cart built with Next.js to explore state management patterns and reusable UI components.",
    tags: ["Next.js", "Zustand", "Tailwind"],
    image: "/Cart.png",
    accent: "cyan",
    live: "https://cart-app-xi-three.vercel.app/",
    repo: "https://github.com/zaylee-x/cart-app",
  },
  {
    id: "roadnika",
    type: "frontend",
    title: "RoadNika – Career Roadmap Platform",
    subtitle: "Perempuan Inovasi 2025 • Frontend Webapp",
    description:
      "A web platform that helps women map their skills and build personalized career roadmaps in tech.",
    tags: ["Next.js", "Zustand", "Tailwind"],
    image: "/Roadnika.svg",
    accent: "cyan",
    live: "https://road-nika.vercel.app/",
    repo: "https://github.com/zaylee-x/RoadNika",
  },
  {
    id: "arunika",
    type: "frontend",
    title: "Arunika – Career Exploration Platform",
    subtitle: "Perempuan Inovasi 2025 • Fullstack webdev • Team Project",
    description:
      "An early-stage web platform designed to help women explore career paths in technology through accessible information and guided exploration.",
    tags: ["User Research", "Wireframe", "User Flow", "Frontend"],
    image: "/aru.svg",
    accent: "cyan",
    live: "https://arunika-six.vercel.app/",
    repo: "https://github.com/Dewi-Sartika-PI/Arunika",
  },
  {
    id: "arunika2",
    type: "frontend",
    title: "Arunika – Career Fit & Skill Matching Platform",
subtitle: "Perempuan Inovasi 2025 • Fullstack webdev • Team Project",
    description:
      "An AI-powered career platform that analyzes user skills to match suitable roles, identify skill gaps, and recommend relevant job opportunities and learning resources.",
    tags: ["User Research", "Wireframe", "User Flow", "AI Features Collaboration"],
    image: "/arunika.svg",
    accent: "cyan",
    live: "https://arunikaplatform.vercel.app/",
    repo: "https://github.com/dewi-sartika-pi-arunika25",
  },
]
