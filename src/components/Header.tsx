"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image"; // Ensure you use Next.js Image for optimization
import headerlogo from "../../public/img/logo-removebg-preview.png";

const navLinks = [
  { href: "/homepage", label: "Heritage" }, // Renamed labels for premium feel
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "py-3 bg-[#020408]/80 backdrop-blur-xl border-b border-gold/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        
        {/* 1. BRAND LOGO SECTION */}
        <Link href="/homepage" className="relative z-[110] flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
            {/* LOGO IMAGE SLOT */}
            <Image 
              src={headerlogo} 
              alt="Betta Boss Logo"
              fill
              className="object-contain"
              priority
            />
            {/* Subtle Glow behind logo */}
            <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white">
              BETTA<span className="text-gold">BOSS</span>
            </span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-gold/60 -mt-1">
              Royal Selection
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP NAVIGATION (Minimalist) */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 group ${
                pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
              {/* Active / Hover Indicator Line */}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-gold transition-all duration-500 ${
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
              <span className={`absolute bottom-0 left-0 h-[1px] bg-gold/50 blur-sm transition-all duration-500 ${
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        {/* 3. CTA BUTTON (Framed Style) */}
        <div className="hidden md:block">
          <Link href="/zodiac-fish">
            <button className="relative px-8 py-3 overflow-hidden group border border-gold/30 hover:border-gold transition-colors duration-500">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gold group-hover:text-black transition-colors duration-500">
                Reveal Your Rasi
              </span>
              {/* Slide-in Gold background on hover */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] transition-transform duration-500" />
            </button>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER (Refined) */}
        <button
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-[1px] bg-gold transition-all duration-500 ${menuOpen ? "rotate-[45deg] translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[1px] bg-gold transition-all duration-500 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-6 h-[1px] bg-gold transition-all duration-500 ${menuOpen ? "rotate-[-45deg] -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* 5. MOBILE OVERLAY (Full Screen Cinematic) */}
      <div className={`fixed inset-0 bg-[#020408] z-[100] flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group"
            >
              <span className={`block text-4xl font-serif italic transition-all duration-500 ${
                pathname === link.href ? "text-gold translate-x-4" : "text-white/20 hover:text-white"
              }`}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link 
            href="/zodiac-fish" 
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs"
          >
            Find My Rasi Fish
          </Link>
        </div>
      </div>

      <style jsx>{`
        .text-gold { color: #BF953F; }
        .bg-gold { background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728); }
        .border-gold { border-color: #BF953F; }
      `}</style>
    </header>
  );
}