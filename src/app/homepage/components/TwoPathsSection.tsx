"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

export default function TwoPathsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#0a0a0a" }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-4 mb-6">
            <div className="gold-divider w-10" />
            <span
              className="text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ color: "rgba(201,168,76,0.7)" }}>
              
              Choose Your Path
            </span>
            <div className="gold-divider w-10" />
          </div>
          <h2
            className="font-fraunces font-bold leading-tight reveal reveal-delay-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#FFFFFF" }}>
            
            Two Ways to Find Your Boss
          </h2>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Betta Fish card */}
          <div
            className="relative overflow-hidden rounded-2xl group reveal reveal-delay-2 cursor-pointer"
            style={{
              background: "linear-gradient(145deg, #0f1535 0%, #0a0d22 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
              transition: "all 0.4s ease"
            }}>
            
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <AppImage
                src="https://images.unsplash.com/photo-1589640545728-e06516bc07cb"
                alt="Beautiful golden betta fish with flowing fins in dark water"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "saturate(1.2) brightness(0.75)" }} />
              
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 30%, #0f1535 100%)"
                }} />
              
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}>
                
                ₹499 Fixed
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <h3 className="font-fraunces text-2xl font-semibold text-white mb-3">
                Betta Fish Collection
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,245,245,0.55)" }}>
                Six legendary varieties. Each with a zodiac personality. Browse the gallery, 
                find your match, and claim your Boss at a fixed price of ₹499.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Veiltail", "Crowntail", "Halfmoon", "Double Tail", "Plakat", "Elephant Ear"]?.map((v) =>
                <span
                  key={v}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "rgba(201,168,76,0.8)"
                  }}>
                  
                    {v}
                  </span>
                )}
              </div>
              <Link href="/betta-fish">
                <button className="btn-purchase w-full">
                  Explore Betta Fish — ₹499
                </button>
              </Link>
            </div>
          </div>

          {/* Zodiac Fish card */}
          <div
            className="relative overflow-hidden rounded-2xl group reveal reveal-delay-3 cursor-pointer"
            style={{
              background: "linear-gradient(145deg, #110d1a 0%, #0a0a14 100%)",
              border: "1px solid rgba(232,119,34,0.25)",
              transition: "all 0.4s ease"
            }}>
            
            {/* Premium badge */}
            <div
              className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E87722)",
                color: "#0a0a0a"
              }}>
              
              Premium
            </div>
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ec5d6869-1764916296070.png"
                alt="Mystical constellation zodiac wheel with golden stars on dark background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "saturate(0.8) brightness(0.6)" }} />
              
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 30%, #110d1a 100%)"
                }} />
              
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "rgba(232,119,34,0.2)", border: "1px solid rgba(232,119,34,0.4)", color: "#E87722" }}>
                
                ₹1499 Fixed
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <h3 className="font-fraunces text-2xl font-semibold text-white mb-3">
                Zodiac Fish — Your Rasi Speaks
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,245,245,0.55)" }}>
                Enter your date of birth. Let the cosmos reveal your power fish. 
                A personalized zodiac match, premium selection, reserved just for you.
              </p>
              <div
                className="flex items-center gap-3 p-4 rounded-xl mb-6"
                style={{ background: "rgba(232,119,34,0.08)", border: "1px solid rgba(232,119,34,0.15)" }}>
                
                <span className="text-2xl">☿</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#E87722" }}>
                    Cosmic Personalisation
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(245,245,245,0.5)" }}>
                    Your birth date reveals your destined fish variety
                  </p>
                </div>
              </div>
              <Link href="/zodiac-fish">
                <button
                  className="w-full py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #E87722 0%, #C9A84C 100%)",
                    color: "#0a0a0a"
                  }}>
                  
                  Discover My Zodiac Fish — ₹1499
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}