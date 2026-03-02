"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import headerlogo from "../../public/img/logo-removebg-preview.png";

const navLinks = [
  { href: "/homepage", label: "Heritage" },
  { href: "/betta-fish", label: "The Vault" },
  { href: "/zodiac-fish", label: "Zodiac Oracle" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open to prevent UI clashing
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
        // Fixed background: Using solid #05070a on scroll/open to hide overlapping page text
        scrolled || menuOpen
          ? "py-4 bg-[#05070a] border-b border-[#BF953F]/20 shadow-2xl"
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. BRAND IDENTITY */}
        <Link href="/homepage" className="group flex items-center gap-4 relative z-[510]">
          <div className="relative w-9 h-9 md:w-11 md:h-11 border border-[#BF953F]/30 p-1 rounded-full group-hover:border-[#BF953F] transition-all duration-700">
            <Image
              src={headerlogo}
              alt="Betta Boss Logo"
              fill
              className="object-contain p-1.5 grayscale group-hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="text-base md:text-xl font-black tracking-[0.2em] text-white uppercase leading-none">
              BETTA<span className="font-light text-white/70">BOSS</span>
            </span>
            <span className="text-[7px] tracking-[0.8em] uppercase text-[#BF953F] font-bold opacity-60 mt-1">
              Est. 2026
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center bg-white/[0.03] border border-white/5 rounded-full px-8 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-6 py-2 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 group ${
                pathname === link.href ? "text-[#BF953F]" : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#BF953F] rotate-45 shadow-[0_0_10px_#BF953F]" />
              )}
            </Link>
          ))}
        </nav>

        {/* 3. MOBILE TRIGGER & ACTIONS */}
        <div className="flex items-center gap-6 relative z-[510]">
          <Link 
            href="/contact" 
            className="hidden sm:block text-[9px] uppercase tracking-[0.4em] font-black text-[#BF953F] border-b border-[#BF953F]/20 hover:border-[#BF953F] transition-all pb-0.5"
          >
            Inquire
          </Link>

          {/* ASYMMETRICAL LUXURY TRIGGER */}
          <button
            className="lg:hidden flex flex-col items-end gap-[6px] group p-2 outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`h-[1.5px] bg-[#BF953F] transition-all duration-500 ${
              menuOpen ? "w-7 rotate-45 translate-y-[4px]" : "w-7"
            }`} />
            <div className={`h-[1.5px] bg-[#BF953F] transition-all duration-500 ${
              menuOpen ? "w-7 -rotate-45 -translate-y-[3.5px]" : "w-4"
            }`} />
          </button>
        </div>
      </div>

      {/* 4. MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[400] transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Layered Backdrop */}
        <div className="absolute inset-0 bg-[#05070a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(191,149,63,0.06)_0%,_transparent_70%)]" />
          {/* Architectural Lines */}
          <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none">
            <div className="w-px h-full bg-white" />
            <div className="w-px h-full bg-white" />
            <div className="w-px h-full bg-white" />
          </div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-8">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group flex flex-col items-center transition-all duration-700 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                <span className={`text-4xl font-black italic tracking-tighter uppercase transition-colors duration-500 ${
                  pathname === link.href ? "text-[#BF953F]" : "text-white/10 group-hover:text-white"
                }`}>
                  {link.label}
                </span>
                <div className={`h-px bg-[#BF953F] transition-all duration-700 ${
                  pathname === link.href ? "w-16 mt-2" : "w-0 group-hover:w-8 mt-1"
                }`} />
              </Link>
            ))}
          </nav>

          <div className={`mt-16 transition-all duration-1000 delay-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}>
            <Link 
              href="/zodiac-fish"
              onClick={() => setMenuOpen(false)}
              className="px-10 py-4 bg-[#BF953F] text-black text-[10px] font-black uppercase tracking-[0.4em]"
            >
              Invoke Oracle
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}