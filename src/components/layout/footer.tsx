"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#171717] h-[152px] px-[195px] flex flex-col justify-center items-center border-t border-[#BB86FC]/30 text-[#E2F1FF] font-nunito">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name + Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">
            Sylva Zilyasri<span className="text-[#BB86FC]">.</span>
          </h3>
          <p className="text-sm text-[#E2F1FF]/70 mt-1">
            Designing Future Experiences
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
          <Link
            href="mailto:zilyasriva@gmail.com"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <Image src="/Email.png" alt="Email" width={24} height={24} />
          </Link>
          <Link
            href="https://github.com/zaylee-x"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <Image src="/Github.png" alt="GitHub" width={24} height={24} />
          </Link>
          <Link
            href="www.linkedin.com/in/sylva-zilyasri"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <Image src="/LinkedIn.png" alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-[#E2F1FF]/50 mt-4">
        © {new Date().getFullYear()} Sylva Zilyasri. All rights reserved.
      </div>
    </footer>
  );
}
