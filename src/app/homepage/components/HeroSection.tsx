"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * PREMIUM UI UPGRADE: 
 * Added subtle animation keyframes for the "Life-like" fish movement
 * and the "Aura" glow around the text.
 */

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = (clientX / innerWidth - 0.5) * 20;
      const yRatio = (clientY / innerHeight - 0.5) * 15;

      const elements = heroRef.current.querySelectorAll<HTMLElement>(".parallax-layer");
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "1");
        el.style.transform = `translate(${xRatio * speed}px, ${yRatio * speed}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020408]"
    >
      {/* 1. LAYERED BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0">
        {/* Deepest Layer: Constellation Pattern */}
        <div className="absolute inset-0 opacity-30 bg-[url('/constellation-pattern.svg')] bg-repeat" />

        {/* Middle Layer: Radial Ambient Blue/Gold */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />

        {/* Top Layer: Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_90%)]" />
      </div>

      {/* 2. ANIMATED FISH ENTRANCE */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        <div data-speed="1.2" className="parallax-layer absolute top-[15%] left-[10%] opacity-40 blur-[1px] animate-float-slow">
          <FishSVG1 />
        </div>
        <div data-speed="2.5" className="parallax-layer absolute bottom-[20%] right-[15%] opacity-60 animate-float-medium">
          <FishSVG2 />
        </div>
        <div data-speed="0.8" className="parallax-layer absolute top-[40%] right-[5%] opacity-30 blur-[2px] animate-float-fast">
          <FishSVG3 />
        </div>
      </div> */}

      {/* 3. HERO CONTENT CARRIER */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">

        {/* Premium Badge */}
        {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-10 border border-gold/20 bg-gold/5 backdrop-blur-md animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-[10px] text-gold tracking-[0.4em] font-medium uppercase">
            The World's First Zodiac Gallery
          </span>
        </div> */}

        {/* Main Title with Typography Upgrade */}
        <div className="mb-8 space-y-2">
          <h2 className="text-gold/60 text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
            Define Your Destiny
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
            Discover The <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FCF6BA] via-[#BF953F] to-[#8B5E1A]">Boss</span>
            <br />
            <span className="italic font-light">Within Your Rasi</span>
          </h1>
        </div>

        {/* Slogan with Refined Spacing */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-gold italic text-xl md:text-2xl font-serif tracking-wide opacity-90">
            “Your Fish. Your Rasi. Your Boss.”
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* 4. CALL TO ACTION: THE "GALLERY" BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link href="/betta-fish" className="w-full md:w-auto">
            <button className="group relative w-full md:min-w-[260px] h-16 bg-gold hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition-all duration-500 rounded-sm">
              <span className="relative z-10 flex flex-col items-center">
                Explore Betta Fish
                <span className="text-[9px] font-normal opacity-70">Starting ₹499</span>
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </Link>

          <Link href="/zodiac-fish" className="w-full md:w-auto">
            <button className="group relative w-full md:min-w-[260px] h-16 border border-gold/50 text-gold font-bold uppercase tracking-widest text-xs transition-all duration-500 rounded-sm hover:border-gold">
              <span className="relative z-10 flex flex-col items-center">
                The Zodiac Experience
                <span className="text-[9px] font-normal opacity-70">Fixed ₹1499</span>
              </span>
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </Link>
        </div>
      </div>

      {/* 5. SIDE DECOR: VERTICAL TEXT */}
      <div className="absolute left-10 bottom-20 hidden xl:block">
        <p className="rotate-[-90deg] origin-left text-[10px] tracking-[0.5em] text-gold/30 uppercase">
          Est. 2024 &copy; Betta Boss Collective
        </p>
      </div>

      <style jsx>{`
        .text-gold { color: #C9A84C; }
        .bg-gold { background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728); }
        .border-gold { border-color: #BF953F; }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(10px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        
        .animate-float-medium { animation: float-slow 8s ease-in-out infinite reverse; }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}


// SVG Fish components
function FishSVG1({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="70"
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="55" cy="35" rx="40" ry="20" fill="url(#fishGrad1)" opacity="0.85" />
      <path d="M95 35 L115 15 L118 35 L115 55 Z" fill="url(#fishGrad1)" opacity="0.7" />
      <path d="M40 15 Q55 5 70 15" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="none" />
      <path d="M40 55 Q55 65 70 55" stroke="rgba(232,119,34,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="25" cy="32" r="4" fill="#C9A84C" />
      <circle cx="24" cy="31" r="1.5" fill="#0a0a0a" />
      <ellipse cx="45" cy="30" rx="8" ry="5" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
      <ellipse cx="60" cy="33" rx="8" ry="5" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
      <defs>
        <linearGradient id="fishGrad1" x1="0" y1="0" x2="120" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E87722" />
          <stop offset="100%" stopColor="#8B5E1A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FishSVG2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="60"
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="45" cy="30" rx="33" ry="17" fill="url(#fishGrad2)" opacity="0.8" />
      <path d="M78 30 L95 10 L90 30 L95 50 Z" fill="url(#fishGrad2)" opacity="0.65" />
      <path d="M78 30 L98 18 L93 30 L98 42 Z" fill="url(#fishGrad2)" opacity="0.45" />
      <path d="M78 30 L100 22 L96 30 L100 38 Z" fill="url(#fishGrad2)" opacity="0.3" />
      <circle cx="18" cy="28" r="3.5" fill="#FFD700" />
      <circle cx="17" cy="27" r="1.5" fill="#0a0a0a" />
      <defs>
        <linearGradient id="fishGrad2" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FishSVG3({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="90"
      height="80"
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="40" cy="40" rx="28" ry="15" fill="url(#fishGrad3)" opacity="0.75" />
      <path d="M68 40 Q90 10 88 40 Q90 70 68 40 Z" fill="url(#fishGrad3)" opacity="0.6" />
      <path d="M20 25 Q40 5 60 25" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
      <circle cx="17" cy="38" r="3" fill="#E87722" />
      <circle cx="16" cy="37" r="1.2" fill="#0a0a0a" />
      <defs>
        <linearGradient id="fishGrad3" x1="0" y1="0" x2="90" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E87722" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
