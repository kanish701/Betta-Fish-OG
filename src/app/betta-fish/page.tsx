import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BettaFishGrid from "./components/BettaFishGrid";

export const metadata: Metadata = {
  title: "Betta Fish Collection — ₹499 Fixed Price | Betta Boss",
  description:
    "Explore six legendary Betta fish varieties, each matched to a zodiac personality. Veiltail, Crowntail, Halfmoon, Double Tail, Plakat, Elephant Ear — all at ₹499.",
  keywords: [
    "betta fish",
    "veiltail betta",
    "crowntail betta",
    "halfmoon betta",
    "zodiac fish India",
    "buy betta fish Chennai",
  ],
};

export default function BettaFishPage() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* Page Header */}
      <section
        className="relative pt-40 pb-20 px-6 text-center constellation-bg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0d0d1a 0%, #0a0a0a 100%)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shimmer-anim" />
            Fixed Price — ₹499
          </div>
          <h1
            className="font-fraunces font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF" }}
          >
            The Betta{" "}
            <span className="gradient-text-gold italic">Boss Collection</span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Six varieties. Six zodiac energies. Each one a statement of power, 
            grace, and cosmic alignment. Find the Boss that was written for you.
          </p>
        </div>
      </section>

      <BettaFishGrid />
      <Footer />
    </main>
  );
}