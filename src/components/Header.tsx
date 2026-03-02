"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import headerlogo from "../../public/img/logo-removebg-preview.png";


const navLinks = [
  { href: "/homepage", label: "Home" },
  { href: "/betta-fish", label: "The Gallery" },
  { href: "/zodiac-fish", label: "Zodiac Match" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
          ? "py-3 bg-[#020408]/90 backdrop-blur-xl border-b border-[#BF953F]/10"
          : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">

        {/* 1. BRAND LOGO */}
        <Link href="/homepage" className="relative z-[110] flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={headerlogo}
              alt="Betta Boss Logo"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-[#BF953F]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white">
              BETTA<span className="text-[#BF953F]">BOSS</span>
            </span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-[#BF953F]/60 -mt-1">
              Royal Selection
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 group ${pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
                }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-[#BF953F] transition-all duration-500 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
            </Link>
          ))}
        </nav>

        {/* 3. CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/zodiac-fish">
            <button className="relative px-8 py-3 overflow-hidden group border border-[#BF953F]/30 hover:border-[#BF953F] transition-colors duration-500">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-[#BF953F] group-hover:text-black transition-colors duration-500">
                Reveal Your Rasi
              </span>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] transition-transform duration-500" />
            </button>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER */}
        <button
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-[1px] bg-[#BF953F] transition-all duration-500 ${menuOpen ? "rotate-[45deg] translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[1px] bg-[#BF953F] transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[1px] bg-[#BF953F] transition-all duration-500 ${menuOpen ? "rotate-[-45deg] -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* 5. MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#020408] z-[100] flex flex-col items-center justify-center transition-all duration-700 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}>
        <div className="flex flex-col gap-10 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl font-serif italic transition-all duration-500 ${pathname === link.href ? "text-[#BF953F]" : "text-white/20 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/zodiac-fish"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-10 py-4 bg-[#BF953F] text-black font-bold uppercase tracking-widest text-xs"
          >
            Find My Rasi Fish
          </Link>
        </div>
      </div>
    </header>
  );
}