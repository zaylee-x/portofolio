"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-3xl border border-purple-500 bg-[#171717] shadow-md transition-all duration-300 font-baloo",
                isScrolled && "backdrop-blur-md"
            )}
        >
            <div className="px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-purple-500">
                    Sylva
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-purple-400 hover:text-cyan-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="https://drive.google.com/drive/folders/1BINxgeH6_gj-gC-y7eaJVkv9LngrncMy?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 font-bold rounded-full px-4 py-2 text-cyan-400 hover:text-purple-400"
                        >
                            Resume
                            <Image src="/Vector.svg" alt="Download Icon" width={16} height={16} />
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6 text-purple-400" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] font-baloo">
                        <div className="flex flex-col gap-8 mt-10">
                            {navItems.map((item) => (
                                <SheetClose asChild key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-lg font-medium text-purple-400 hover:text-cyan-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </SheetClose>
                            ))}
                            <Link
                                href="https://drive.google.com/drive/folders/1BINxgeH6_gj-gC-y7eaJVkv9LngrncMy?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 font-bold rounded-full px-4 py-2 text-cyan-400 hover:text-purple-400"
                                >
                                    Resume
                                    <Image src="/Vector.svg" alt="Download Icon" width={16} height={16} />
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
