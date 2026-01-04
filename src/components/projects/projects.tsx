"use client"

import { useState } from "react"
import Image from "next/image"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/projects/ProjectCard"

type Tab = "uiux" | "frontend"

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("uiux")

  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  )

  return (
    <section
      id="projects"
      className="relative w-full bg-[#121212] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= FILTER BUTTONS ================= */}
        <div className="mb-20 flex justify-center gap-6 flex-wrap">

          {/* UI/UX BUTTON */}
          <button
            onClick={() => setActiveTab("uiux")}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-[12px]
              font-baloo text-[24px] leading-[1.58] tracking-[1.2px]
              transition-all duration-300
              ${
                activeTab === "uiux"
                  ? "bg-[#BB86FC] text-[#E2F1FF] border border-[#BB86FC]"
                  : "bg-[#171717] text-purple-300 border border-[#BB86FC]"
              }`}
          >
            <Image
              src={activeTab === "uiux" ? "/figma-hover.svg" : "/figma.svg"}
              alt="Figma Icon"
              width={24}
              height={24}
            />
            UI/UX Designer
          </button>

          {/* FRONTEND BUTTON */}
          <button
            onClick={() => setActiveTab("frontend")}
            className={`flex items-center justify-center gap-2 px-4 py-2 w-[228px]
              rounded-[12px] font-baloo text-[24px] leading-[1.58] tracking-[1.2px]
              transition-all duration-300
              ${
                activeTab === "frontend"
                  ? "bg-[#03DAC6] text-[#E2F1FF] border border-[#03DAC6]"
                  : "bg-[#171717] text-[#03DAC6] border border-[#03DAC6]"
              }`}
          >
            <Image
              src={activeTab === "frontend" ? "/code-hover.svg" : "/code.svg"}
              alt="Code Icon"
              width={24}
              height={24}
            />
            Frontend
          </button>

        </div>

        {/* ================= PROJECT CARDS ================= */}
        <div className="flex flex-col gap-24">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
