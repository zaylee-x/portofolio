"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"

const sections = [
  {
    title: "Focus",
    items: ["UI/UX Design", "Mobile & Website Platform", "User Research & Flow Design"],
  },
  {
    title: "How I Work",
    items: ["Research before designing", "Iterate through feedback", "Collaborate closely with developers"],
  },
  {
    title: "What I Bring",
    items: ["Clear design-to-code communication", "Structured documentation & handoff", "User-centered decision making"],
  },
]

const tools = [
  { name: "Figma", desc: "Design System, Auto Layout, Prototype", icon: "/Figma-tools.svg" },
  { name: "FigJam", desc: "User Flow, Brainstorming", icon: "/Figma-tools.svg" },
  { name: "Canva", desc: "Quick visual & presentation", icon: "/Canva.svg" },
  { name: "Notion", desc: "Documentation & design system notes", icon: "/Notion.svg" },
  { name: "HTML", desc: "Frontend Development", icon: "/HTML.svg" },
  { name: "CSS", desc: "Frontend Development", icon: "/CSS.svg" },
  { name: "Next.js", desc: "Frontend Development", icon: "/JavaScript.svg" },
  { name: "GitHub", desc: "Collaboration", icon: "/GitHub-tools.svg" },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export function AboutMe() {
  const { scrollYProgress } = useScroll()
  const patternY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-32 font-nunito text-[#E2F1FF]"
    >
      {/* === GREEN FIGJAM PATTERN (PARALLAX) === */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(3,218,198,0.32) 2.5px, transparent 2.5px)",
            backgroundSize: "72px 72px",
          }}
        />
      </motion.div>

      {/* === CONTENT WRAPPER === */}
      <div className="relative z-10 mx-auto w-[92%] max-w-7xl space-y-28">

        {/* === ROW 1: PHOTO + ABOUT === */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* PHOTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Image.svg"
                alt="Sylva Zilyasri"
                fill
                className="object-cover"
              />
            </div>

            {/* NAME CARD (WIDTH = PHOTO) */}
            <div className="w-[220px] px-4 py-3 rounded-xl border border-[#08A092]/40 bg-[#171717]/90 shadow-md text-center">
              <p className="text-lg font-bold">Sylva Zilyasri</p>
              <p className="text-sm text-[#E2F1FF]/80">
                UI/UX & Frontend Designer
              </p>
            </div>
          </motion.div>

          {/* ABOUT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-lg leading-relaxed text-[#E2F1FF]/90 max-w-xl">
              I’m a UI/UX designer with a frontend background, focused on building clear and user-centered digital products.
              My experience spans user research, interface design, and frontend implementation, allowing me to translate ideas into functional and meaningful experiences.
              I value clarity, usability, and collaboration throughout the design process.
            </p>
          </motion.div>
        </div>

        {/* === ROW 2: INFO CARDS === */}
        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.1 }}
              className="
                rounded-2xl
                border border-[#08A092]/30
                bg-[#171717]/90
                p-8
                shadow-[0_8px_24px_rgba(3,218,198,0.15)]
                hover:shadow-[0_12px_36px_rgba(3,218,198,0.25)]
                transition
              "
            >
              <h3 className="text-xl font-extrabold text-center mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4 text-sm text-[#E2F1FF]/85">
                {section.items.map(item => (
                  <li key={item} className="flex gap-3">
                    <Image
                      src="/Check Mark.svg"
                      alt="Check"
                      width={16}
                      height={16}
                      className="mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* === ROW 3: TOOLS === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h3 className="text-xl font-extrabold text-center">Tools I Use</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {[tools.slice(0, 4), tools.slice(4, 8)].map((group, idx) => (
              <div key={idx} className="space-y-6">
                {group.map(tool => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ x: 6 }}
                    className="
                      flex items-start gap-5
                      rounded-xl
                      border border-[#BB86FC]/50
                      bg-[#171717]/90
                      p-5
                      shadow-md
                      transition
                    "
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={36}
                      height={36}
                    />
                    <div>
                      <p className="font-semibold">{tool.name}</p>
                      <p className="text-xs text-[#E2F1FF]/70">{tool.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
