"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Project } from "@/lib/projects"

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const accent =
    project.accent === "purple"
      ? "border-[#BB86FC] shadow-[0_30px_60px_-30px_rgba(187,134,252,0.5)]"
      : "border-[#03DAC6] shadow-[0_30px_60px_-30px_rgba(3,218,198,0.5)]"

  return (
    <motion.div
      initial={{ y: 40, scale: 0.97 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{ zIndex: 20 - index }}
      className="relative mb-16"
    >
      <div
        className={`flex items-center gap-12 h-[360px] px-12 rounded-2xl bg-[#171717] border ${accent}`}
      >
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-4 font-baloo">
          <p className="text-sm text-[#E2F1FF]/60">
            {project.subtitle}
          </p>

          <h3 className="text-[32px] font-bold text-[#E2F1FF] leading-tight">
            {project.title}
          </h3>

          <p className="text-[17px] text-[#E2F1FF]/80 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs border border-white/20 text-[#E2F1FF]/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ACTION */}
          <div className="flex gap-4 mt-4">
            {project.type === "uiux" && project.link && (
              <a
                href={project.link}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-[#E2F1FF] hover:bg-white/10 transition"
              >
                <Image src="/Figma-case.svg" alt="" width={18} height={18} />
                Case Study
              </a>
            )}

            {project.type === "frontend" && project.live && (
              <a
                href={project.live}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0F423D] to-[#03DAC6] text-black font-medium"
              >
                Live Demo
              </a>
            )}

            {project.type === "frontend" && project.repo && (
              <a href={project.repo}>
                <Image src="/Github.svg" alt="GitHub" width={36} height={36} />
              </a>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="relative w-[260px] h-[320px]"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
