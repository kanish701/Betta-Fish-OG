"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "I",
    icon: "Selection",
    title: "Choose Your Path",
    desc: "Venture through our Royal Gallery or reveal the fish destined by your Rasi.",
  },
  {
    number: "II",
    icon: "Offering",
    title: "Secure Your Boss",
    desc: "Scan the sacred QR. A direct exchange of power. No intermediaries, no friction.",
  },
  {
    number: "III",
    icon: "Ascension",
    title: "Claim Your Destiny",
    desc: "Present your digital proof at our sanctuary within 24 hours to take your Boss home.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".step-card").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-[#020408]"
    >
      {/* Background Decorative Element: Subtle Large Roman Numeral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif font-bold text-gold opacity-[0.02] pointer-events-none select-none">
        BOSS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">
              The Process
            </span>
            <div className="h-[1px] w-8 bg-gold/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            How to Claim Your <span className="italic text-gold">Boss</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="step-card group relative opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              {/* Card Decoration */}
              <div className="absolute -top-4 -left-4 text-6xl font-serif italic text-gold/10 group-hover:text-gold/20 transition-colors">
                {step.number}
              </div>

              <div className="relative p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-gold/30 transition-all duration-500">
                {/* Icon/Label */}
                <div className="mb-8 inline-block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60 border-b border-gold/30 pb-2">
                    {step.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                <p className="text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {step.desc}
                </p>

                {/* Bottom Line Accent */}
                <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Note: The "24-Hour Seal" */}
        <div className="mt-24 flex justify-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-8 h-8 rounded-full border border-[#020408] bg-gold flex items-center justify-center text-[10px] font-bold text-black">
                  ✓
                </div>
              ))}
            </div>
            <p className="text-xs tracking-widest text-gold uppercase font-medium">
              <span className="text-white">Priority Status:</span> 24-Hour Exclusive Reservation Guaranteed
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}