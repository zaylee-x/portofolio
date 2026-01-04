"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  // Scroll progress untuk hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hero menghilang saat scroll
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);
  const blur = useTransform(scrollYProgress, [0, 0.6], ["0px", "8px"]);

  // Pattern parallax
  const patternY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, filter: blur }}
      className="
        relative
        h-[100svh]
        w-full
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#121212]
        font-baloo
        will-change-transform
      "
    >
      {/* === GREEN FIGJAM PATTERN (PARALLAX) === */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(3,218,198,0.32) 2.5px, transparent 2.5px)",
            backgroundSize: "72px 72px",
          }}
        />
      </motion.div>

      {/* === CONTENT === */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Floating Heading */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-10"
        >
          <Image
            src="/heading.svg"
            alt="UI/UX Design Portfolio"
            width={600}
            height={220}
            priority
            className="mx-auto select-none"
          />
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={handleScroll}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex
            items-center
            justify-center
            gap-[10px]
            px-[12px]
            py-[6px]
            rounded-[24px]
            border
            border-[#03DAC6]
            text-[#E2F1FF]
            text-base
            font-medium
            transition-all
            duration-300
            hover:bg-[#03DAC6]/10
          "
        >
          View Work

          {/* Scroll Hint */}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/down.svg"
              alt="Scroll Down"
              width={16}
              height={16}
            />
          </motion.span>
        </motion.button>
      </div>
    </motion.section>
  );
}
