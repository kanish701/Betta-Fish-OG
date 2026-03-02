"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Static Image Imports
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
    setResult(null);
    setTimeout(() => {
      const found = zodiacData.find(z => z.rasi === selectedRasi);
      if (found) setResult({ ...found, dob });
      setIsCalculating(false);
    }, 1200);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showPayment) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [showPayment]);

  return (
    <main className="min-h-screen bg-[#020408] text-white font-serif selection:bg-[#BF953F]/30">
      <Header />

      <div className="max-w-6xl mx-auto py-32 px-6">
        {/* Back Button */}
        <div className="mb-12">
          <Link href="/homepage" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-[#BF953F] transition-all group">
            <span className="text-sm group-hover:-translate-x-1 transition-transform">←</span>
            Back to Heritage
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 italic tracking-tighter">
            The <span className="text-[#BF953F] drop-shadow-[0_0_15px_rgba(191,149,63,0.3)]">Rasi</span> Oracle
          </h1>
          <p className="text-[#BF953F]/60 uppercase tracking-[0.6em] text-[10px] font-bold">"Your Fish. Your Rasi. Your Boss."</p>
        </div>

        {/* Interactive Input Panel */}
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-[#BF953F]/20 p-12 backdrop-blur-3xl rounded-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <InputWrapper label="Birth Date">
              <input type="date" className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-[#BF953F] focus:border-[#BF953F] transition-all cursor-text font-sans" value={dob} onChange={(e) => setDob(e.target.value)} />
            </InputWrapper>
            <InputWrapper label="Rasi">
              <select className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white cursor-pointer focus:border-[#BF953F] transition-all appearance-none" value={selectedRasi} onChange={(e) => { setSelectedRasi(e.target.value); setSelectedNakshatra(""); setResult(null); }}>
                <option value="" className="bg-[#0a0a0a]">Choose Rasi...</option>
                {zodiacData.map(z => <option key={z.rasi} value={z.rasi} className="bg-[#0a0a0a]">{z.rasi}</option>)}
              </select>
            </InputWrapper>
            <InputWrapper label="Nakshatra">
              <select className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white cursor-pointer disabled:opacity-20 focus:border-[#BF953F] transition-all appearance-none" value={selectedNakshatra} onChange={(e) => { setSelectedNakshatra(e.target.value); setResult(null); }} disabled={!selectedRasi}>
                <option value="" className="bg-[#0a0a0a]">Choose Nakshatra...</option>
                {availableNakshatras.map(n => <option key={n} value={n} className="bg-[#0a0a0a]">{n}</option>)}
              </select>
            </InputWrapper>
          </div>
          <button onClick={handleInvoke} disabled={!dob || !selectedRasi || !selectedNakshatra || isCalculating} className="group relative w-full py-5 bg-transparent border border-[#BF953F]/50 text-[#BF953F] font-bold uppercase tracking-[0.4em] text-[10px] overflow-hidden transition-all hover:text-black disabled:opacity-20">
            <span className="relative z-10">{isCalculating ? "Consulting Stars..." : "Invoke The Boss"}</span>
            <div className="absolute inset-0 bg-[#BF953F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>

        {/* Result Revelation */}
        {result && !isCalculating && (
          <div className="mt-32 animate-in fade-in zoom-in duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#BF953F]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image src={result.img} alt={result.fish} fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-[#BF953F] text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Sacred Guardian</p>
                    <h3 className="text-4xl font-bold text-white tracking-tighter">{result.fish}</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <header className="space-y-2">
                  <span className="text-[#BF953F]/40 text-[10px] uppercase tracking-widest font-bold">The Destiny for {selectedNakshatra}</span>
                  <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">Matched <br />Flora Equilibrium</h2>
                </header>
                <div className="bg-white/[0.03] border border-white/10 p-8 rounded-xl">
                  <p className="text-3xl font-bold mb-4 text-[#BF953F]">{result.flora}</p>
                  <p className="text-sm text-white/50 leading-relaxed font-sans italic">"This botanical arrangement serves as the essential companion to the {result.fish}, neutralizing negative energies and amplifying the dominance of your Rasi within your aquatic sanctuary."</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-10">
                  <div>
                    <p className="text-[10px] uppercase text-white/30 tracking-[0.3em] mb-1">Ownership Value</p>
                    <p className="text-3xl font-bold font-sans">₹1,499</p>
                  </div>
                  <button
                    onClick={() => setShowPayment(true)}
                    className="px-12 py-5 bg-[#BF953F] text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors shadow-[0_0_30px_rgba(191,149,63,0.3)]">
                    Claim Your Boss
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPayment && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-[#BF953F]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(191,149,63,0.15)]">

              {/* Close Button */}
              <button
                onClick={() => setShowPayment(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <span className="text-2xl">✕</span>
              </button>

              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#BF953F] font-bold mb-6">Secure Your Destiny</p>
                <h3 className="text-2xl text-white mb-2">{result?.fish}</h3>
                <p className="text-white/40 text-xs mb-8 italic">Matched for {selectedNakshatra} · {selectedRasi}</p>

                {/* QR Code Frame */}
                <div className="relative w-56 h-56 mx-auto mb-8 p-3 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Image
                    src={qrCode}
                    alt="Payment QR Code"
                    width={208}
                    height={208}
                    className="w-full h-full object-contain"
                  />
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#BF953F]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#BF953F]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#BF953F]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#BF953F]" />
                </div>

                <div className="space-y-4">
                  <p className="text-2xl font-bold text-white">₹1,499</p>
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-lg">
                    <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
                      Scan to Pay & Share Screenshot on <br />
                      <span className="text-[#BF953F] font-bold text-xs">+91 96291 91523</span>
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-[9px] text-white/20 uppercase tracking-[0.2em]">
                  Boss Reserved for 24 Hours Post Payment
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

function InputWrapper({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <label className="text-[9px] uppercase tracking-[0.4em] text-[#BF953F] font-black border-l border-[#BF953F]/50 pl-3">
        {label}
      </label>
      {children}
    </div>
  );
}