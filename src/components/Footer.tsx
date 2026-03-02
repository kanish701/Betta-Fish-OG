"use client";

import Link from "next/link";
import Image from "next/image";
import headerlogo from "../../public/img/logo-removebg-preview.png";

const footerLinks = [
  { href: "/homepage", label: "Heritage" },
  { href: "/betta-fish", label: "The Vault" },
  { href: "/zodiac-fish", label: "Zodiac Oracle" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#05070a] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* 1. AMBIENT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#BF953F]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-[#BF953F]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* 2. BRAND LEGACY SECTION (4 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 border border-[#BF953F]/20 p-2 rounded-full">
                <Image
                  src={headerlogo}
                  alt="Betta Boss"
                  fill
                  className="object-contain p-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <h4 className="text-xl font-black tracking-widest text-white uppercase">
                  BETTA<span className="text-[#BF953F]">BOSS</span>
                </h4>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#BF953F]/60">
                  Premium Selection
                </p>
              </div>
            </div>
            
            <p className="text-white/40 font-serif italic text-lg leading-relaxed max-w-sm">
              "Providing more than just aquatic life; we curate spiritual guardians aligned with your cosmic energy."
            </p>

            <div className="flex gap-4">
               {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                 <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-[#BF953F] transition-colors border border-white/5 px-4 py-2 rounded-sm bg-white/[0.02]">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          {/* 3. NAVIGATION (3 Columns) */}
          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.5em] text-[#BF953F] font-bold">The Directory</h5>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors group flex items-center gap-3">
                    <span className="w-0 h-px bg-[#BF953F] group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT & ORIGIN (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.5em] text-[#BF953F] font-bold">The Sanctuary</h5>
            <div className="space-y-4 font-sans">
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-[#BF953F] transition-colors">Location</p>
                <p className="text-sm text-white/60">Tidel Park, Coimbatore, TN</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-[#BF953F] transition-colors">Inquiries</p>
                <p className="text-sm text-white/60">+91 96291 91523</p>
              </div>
            </div>

            <a
              href="https://wa.me/919629191523"
              className="group relative inline-flex items-center justify-center gap-3 w-full py-4 border border-[#BF953F]/30 hover:border-[#BF953F] overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-[#BF953F] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-[#BF953F] group-hover:text-black transition-colors">
                Initiate Consultation
              </span>
            </a>
          </div>
        </div>

        {/* 5. THE AUTHENTICITY BAR */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">© 2026 BETTA BOSS COLLECTIVE</p>
            <span className="hidden md:block w-px h-3 bg-white/10" />
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">Hand-curated in India</p>
          </div>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Terms of Sale</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}