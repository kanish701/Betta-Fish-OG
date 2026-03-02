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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        // Changed to 100% opacity bg-[#05070a] to prevent text ghosting
        scrolled || menuOpen
          ? "py-4 bg-[#05070a] border-b border-[#BF953F]/20 shadow-2xl"
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <Link href="/homepage" className="group flex items-center gap-3 relative z-[210]">
          <div className="relative w-9 h-9 md:w-11 md:h-11 border border-[#BF953F]/30 p-1 rounded-full group-hover:border-[#BF953F] transition-all">
            <Image src={headerlogo} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-base md:text-lg font-black tracking-[0.1em] text-white uppercase leading-none">
              BETTA<span className="font-light text-white/60">BOSS</span>
            </span>
          </div>
        </Link>

        {/* ACTIONS & TRIGGER */}
        <div className="flex items-center gap-4 relative z-[210]">
          <Link href="/contact" className="hidden sm:block text-[9px] uppercase tracking-[0.3em] font-bold text-[#BF953F]">
            Inquire
          </Link>

          {/* Refined Trigger for better touch response */}
          <button
            className="flex flex-col items-end gap-[6px] p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`h-[1.5px] bg-[#BF953F] transition-all duration-300 ${
              menuOpen ? "w-7 rotate-45 translate-y-[4px]" : "w-7"
            }`} />
            <div className={`h-[1.5px] bg-[#BF953F] transition-all duration-300 ${
              menuOpen ? "w-7 -rotate-45 -translate-y-[4px]" : "w-4"
            }`} />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#05070a] z-[150] transition-transform duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center p-8">
           {/* Navigation Links with consistent styling */}
           <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-4xl font-black italic tracking-tighter uppercase ${
                  pathname === link.href ? "text-[#BF953F]" : "text-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}