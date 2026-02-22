import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZodiacReveal from "./components/ZodiacReveal";

export const metadata: Metadata = {
  title: "Zodiac Fish — Discover Your Rasi Boss | Betta Boss",
  description:
    "Enter your date of birth and let the cosmos reveal your destined Betta fish. A premium zodiac-powered fish selection experience at ₹1499.",
  keywords: [
    "zodiac fish",
    "rasi fish",
    "zodiac betta",
    "astrology fish",
    "rasi palangal fish",
    "premium betta Chennai",
  ],
};

export default function ZodiacFishPage() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* Premium Page Header */}
      <section
        className="relative pt-40 pb-24 px-6 text-center overflow-hidden constellation-bg"
        style={{
          background: "linear-gradient(180deg, #0d0d2b 0%, #0a0a0a 100%)",
        }}
      >
        {/* Multiple ambient glows */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(232,119,34,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,143,232,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Zodiac wheel decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border pointer-events-none opacity-[0.04]"
          style={{ borderColor: "#C9A84C" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border pointer-events-none opacity-[0.04]"
          style={{ borderColor: "#E87722" }}
        />

        {/* Zodiac symbols floating */}
        {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((sym, i) => {
          const angle = (i / 12) * 360;
          const rad = (angle * Math.PI) / 180;
          const r = 220;
          const x = 50 + (r / 5) * Math.cos(rad);
          const y = 50 + (r / 5) * Math.sin(rad);
          return (
            <div
              key={sym}
              className="absolute text-sm pointer-events-none shimmer-anim hidden lg:block"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                color: "rgba(201,168,76,0.25)",
                animationDelay: `${i * 0.25}s`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {sym}
            </div>
          );
        })}

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              background: "rgba(232,119,34,0.1)",
              border: "1px solid rgba(232,119,34,0.3)",
              color: "#E87722",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] shimmer-anim" />
            Premium Zodiac Selection — ₹1499
          </div>

          <h1
            className="font-fraunces font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#FFFFFF" }}
          >
            The Stars Have
            <br />
            <span className="gradient-text-gold italic">Chosen Your Boss</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Your birth date is a cosmic signature. It reveals your Rasi — your zodiac sign — 
            and through it, the fish that carries your energy, your power, and your destiny.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["All 12 Zodiac Signs", "Instant Cosmic Match", "Premium Selection", "₹1499 Fixed"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  color: "rgba(201,168,76,0.75)",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ZodiacReveal />
      <Footer />
    </main>
  );
}