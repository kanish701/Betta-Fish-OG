"use client";

import { useEffect, useRef } from "react";

export default function PhilosophySection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden constellation-bg"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 50%, #0a0a0a 100%)" }}
    >
      {/* Ambient glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />
      {/* Ambient glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,119,34,0.04) 0%, transparent 70%)" }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-4 mb-8">
          <div className="gold-divider w-12" />
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ color: "rgba(201,168,76,0.7)" }}
          >
            The Betta Boss Philosophy
          </span>
          <div className="gold-divider w-12" />
        </div>

        {/* Main quote */}
        <h2
          className="font-fraunces font-light italic leading-tight mb-8 reveal reveal-delay-1"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", color: "#FFFFFF" }}
        >
          "Some Bosses are not bought.
          <br />
          <span className="gradient-text-gold">They are written in your Rasi."</span>
        </h2>

        {/* Divider */}
        <div className="gold-divider mb-8 reveal reveal-delay-2" />

        {/* Body copy */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16 reveal reveal-delay-3"
          style={{ color: "rgba(245,245,245,0.55)" }}
        >
          The ancient science of Jyotish — the cosmic map of your birth — reveals not just your destiny, 
          but your power animal. At Betta Boss, we bridge the mystical and the aquatic. 
          Each fish variety carries the energy of a zodiac sign. When you bring home your Rasi fish, 
          you invite its cosmic force into your space.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "✦",
              title: "Cosmic Match",
              desc: "Each fish is aligned to a zodiac sign through centuries of Vedic tradition.",
              delay: "reveal-delay-2",
            },
            {
              icon: "♔",
              title: "Royal Selection",
              desc: "Not a store. A gallery. Every Boss is hand-selected for its quality and energy.",
              delay: "reveal-delay-3",
            },
            {
              icon: "◈",
              title: "Reserved for You",
              desc: "Once you pay, your Boss is held for 24 hours. It waits only for its rightful owner.",
              delay: "reveal-delay-4",
            },
          ]?.map((pillar) => (
            <div
              key={pillar?.title}
              className={`step-card p-8 text-center reveal ${pillar?.delay}`}
            >
              <div
                className="text-3xl mb-4"
                style={{ color: "#C9A84C" }}
              >
                {pillar?.icon}
              </div>
              <h3
                className="font-fraunces font-semibold text-lg mb-3"
                style={{ color: "#FFFFFF" }}
              >
                {pillar?.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.5)" }}>
                {pillar?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}