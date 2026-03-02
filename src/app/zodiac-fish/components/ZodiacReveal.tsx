"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Ensure these paths match your project structure
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// (Your static imports remain the same)
import mesham from "../../../../public/img/mesham.png";
import rishabam from "../../../../public/img/rishabam.png";
import mithunam from "../../../../public/img/mithunam.png";
import kadagam from "../../../../public/img/kadagam.png";
import simmam from "../../../../public/img/simmam.png";
import kanni from "../../../../public/img/kanni.png";
import thulam from "../../../../public/img/thulam.png";
import viruchigam from "../../../../public/img/viruchigam.png";
import dhanusu from "../../../../public/img/dhanusu.png";
import magaram from "../../../../public/img/magaram.png";
import kumbam from "../../../../public/img/kumbam.png";
import meenam from "../../../../public/img/meenam.png";
import qrCode from "../../../../public/img/qr-code.jpeg"; // Ensure your QR code is here


const zodiacData = [
  // ... (Your data stays the same)
  { rasi: "Mesham (Aries)", nakshatras: ["Ashwini", "Bharani", "Krittika (1)"], fish: "Red Betta", flora: "Red Ludwigia, Red Root Floater", color: "#FF0000", img: mesham },
  { rasi: "Rishabam (Taurus)", nakshatras: ["Krittika (2-4)", "Rohini", "Mrigashirsha (1-2)"], fish: "Green Betta", flora: "Anubias, Java Fern", color: "#228B22", img: rishabam },
  { rasi: "Mithunam (Gemini)", nakshatras: ["Mrigashirsha (3-4)", "Thiruvathirai", "Punarpoosam (1-3)"], fish: "Blue Betta", flora: "Water Wisteria", color: "#0000FF", img: mithunam },
  { rasi: "Kadagam (Cancer)", nakshatras: ["Punarpoosam (4)", "Poosam", "Ayilyam"], fish: "White Betta", flora: "Amazon Sword", color: "#FFFFFF", img: kadagam },
  { rasi: "Simmam (Leo)", nakshatras: ["Magham", "Pooram", "Uthiram (1)"], fish: "Golden Betta", flora: "Golden Pothos (aquatic roots)", color: "#FFD700", img: simmam },
  { rasi: "Kanni (Virgo)", nakshatras: ["Uthiram (2-4)", "Hastham", "Chithirai (1-2)"], fish: "Purple Betta", flora: "Cryptocoryne", color: "#800080", img: kanni },
  { rasi: "Thulam (Libra)", nakshatras: ["Chithirai (3-4)", "Swathi", "Visakam (1-3)"], fish: "Pink Betta", flora: "Rotala Rotundifolia", color: "#FFC0CB", img: thulam },
  { rasi: "Viruchigam (Scorpio)", nakshatras: ["Visakam (4)", "Anusham", "Kettai"], fish: "Black Betta", flora: "Blackwater plants, Java Moss", color: "#0a0a0a", img: viruchigam },
  { rasi: "Dhanusu (Sagittarius)", nakshatras: ["Moolam", "Pooradam", "Uthiradam (1)"], fish: "Orange Betta", flora: "Hornwort", color: "#FFA500", img: dhanusu },
  { rasi: "Magaram (Capricorn)", nakshatras: ["Uthiradam (2-4)", "Thiruvonam", "Avittam (1-2)"], fish: "Brown Betta", flora: "Marimo Moss Ball", color: "#8B4513", img: magaram },
  { rasi: "Kumbam (Aquarius)", nakshatras: ["Avittam (3-4)", "Sathayam", "Poorattathi (1-3)"], fish: "Turquoise Betta", flora: "Cabomba", color: "#40E0D0", img: kumbam },
  { rasi: "Meenam (Pisces)", nakshatras: ["Poorattathi (4)", "Uthirattathi", "Revathi"], fish: "Multicolor Betta", flora: "Floating plants mix", color: "linear-gradient(to right, #ff0000, #00ff00, #0000ff)", img: meenam },

];

export default function ZodiacReveal() {
  const [dob, setDob] = useState("");
  const [selectedRasi, setSelectedRasi] = useState("");
  const [selectedNakshatra, setSelectedNakshatra] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [result, setResult] = useState<any>(null);

  const availableNakshatras = useMemo(() => {
    return zodiacData.find(z => z.rasi === selectedRasi)?.nakshatras || [];
  }, [selectedRasi]);

  const handleInvoke = () => {
    setIsCalculating(true);
    // Scroll to top to ensure the reveal is seen perfectly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      const found = zodiacData.find(z => z.rasi === selectedRasi);
      if (found) setResult({ ...found, dob });
      setIsCalculating(false);
    }, 2000); // Slightly longer for "suspense"
  };

  return (
    <main className="min-h-screen bg-[#05070a] text-white font-serif selection:bg-[#BF953F]/30 overflow-x-hidden">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#BF953F]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto py-24 px-6 relative z-10">

        {/* Step 1: Input Phase (Only show if no result) */}
        {!result && !isCalculating && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center mb-16">
              <span className="text-[#BF953F] text-[10px] uppercase tracking-[0.8em] font-bold block mb-4">Celestial Alignment</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                DISCOVER YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FBF5E9] to-[#BF953F]">SACRED GUARDIAN</span>
              </h1>
              <p className="max-w-xl mx-auto text-white/40 font-sans text-sm leading-relaxed uppercase tracking-widest">
                Enter your birth details to reveal the aquatic predator aligned with your cosmic signature.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-2xl backdrop-blur-md">
                <LuxuryInput label="Date of Origin" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                <LuxurySelect label="Zodiac (Rasi)" value={selectedRasi} onChange={(e) => setSelectedRasi(e.target.value)} options={zodiacData.map(z => z.rasi)} />
                <LuxurySelect label="Star (Nakshatra)" value={selectedNakshatra} onChange={(e) => setSelectedNakshatra(e.target.value)} options={availableNakshatras} disabled={!selectedRasi} />
              </div>

              <button
                onClick={handleInvoke}
                disabled={!dob || !selectedRasi || !selectedNakshatra}
                className="mt-8 w-full py-8 group relative overflow-hidden rounded-xl border border-[#BF953F]/30 transition-all active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-[#BF953F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-[10px] tracking-[0.5em] font-bold uppercase group-hover:text-black transition-colors">
                  Invoke the Oracle
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Loading Phase */}
        {isCalculating && (
          <div className="flex flex-col items-center justify-center py-40 animate-pulse">
            <div className="w-24 h-24 border-t-2 border-[#BF953F] rounded-full animate-spin mb-8" />
            <p className="text-[#BF953F] tracking-[1em] text-[10px] uppercase font-bold">Reading the Stars</p>
          </div>
        )}

        {/* Step 3: Reveal Phase */}
        {result && !isCalculating && (
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            <button
              onClick={() => setResult(null)}
              className="mb-12 text-[10px] uppercase tracking-widest text-white/40 hover:text-[#BF953F] flex items-center gap-2"
            >
              <span>←</span> Reset Alignment
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Image Column - The "Statue" Look */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-[#BF953F] to-transparent opacity-20 blur-2xl" />
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(191,149,63,0.3)]">
                  <Image src={result.img} alt={result.fish} fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                </div>
              </div>

              {/* Data Column */}
              <div className="lg:col-span-5 space-y-8 pt-6">
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#BF953F] font-bold mb-2">The Guardian Revealed</h2>
                  <h3 className="text-6xl font-black italic tracking-tighter">{result.fish}</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-white/[0.02] border-l-2 border-[#BF953F] backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">Sacred Flora</p>
                    <p className="text-2xl text-[#FBF5E9] font-bold">{result.flora}</p>
                  </div>

                  <p className="text-white/50 font-sans text-sm leading-relaxed italic">
                    "Crafted for the energy of {selectedNakshatra}, this pairing demands authority. The {result.fish}
                    does not merely inhabit a space—it commands it. Match with {result.flora.split(',')[0]} to
                    ground your aura."
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="px-8 py-6 bg-[#BF953F] text-black cursor-pointer hover:bg-white transition-all flex-1 text-center" onClick={() => setShowPayment(true)}>
                    <span className="text-[10px] uppercase font-black tracking-[0.3em]">Claim Boss Essence — ₹1,499</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer (Your component) */}
      <Footer />

      {/* Payment Modal (Keep your existing modal logic, just update colors to match #05070a) */}
    </main>
  );
}

// Custom Styled Components for the "Luxury" look
function LuxuryInput({ label, type, value, onChange }: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="bg-transparent p-6 flex flex-col hover:bg-white/[0.02] transition-colors rounded-xl">
      <label className="text-[9px] uppercase tracking-widest text-[#BF953F] font-bold mb-3">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none text-white font-sans text-sm border-none focus:ring-0"
      />
    </div>
  );
}

function LuxurySelect({ label, value, onChange, options, disabled }: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <div className={`bg-transparent p-6 flex flex-col hover:bg-white/[0.02] transition-colors rounded-xl ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`}>
      <label className="text-[9px] uppercase tracking-widest text-[#BF953F] font-bold mb-3">{label}</label>
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="bg-transparent outline-none text-white font-sans text-sm border-none cursor-pointer"
      >
        <option value="" className="bg-[#05070a]">Select...</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt} className="bg-[#05070a]">{opt}</option>
        ))}
      </select>
    </div>
  );
}