"use client";

import { useState, useEffect } from "react";
import AppImage from "@/components/ui/AppImage";

interface BettaVariety {
  id: string;
  name: string;
  variety: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  glowColor: string;
}

const bettaVarieties: BettaVariety[] = [
  {
    id: "veiltail",
    name: "Veiltail Betta",
    variety: "The Classic Grace",
    description: "The most iconic Betta. Known for its long, drooping tail that flows like a silk veil in the current. A symbol of effortless elegance.",
    imageUrl: "https://images.unsplash.com/photo-1699425155230-fb6588e1ad5b",
    imageAlt: "Veiltail betta fish with long graceful flowing fins",
    accentColor: "#4C7CE8",
    glowColor: "rgba(76,124,232,0.2)"
  },
  {
    id: "crowntail",
    name: "Crowntail Betta",
    variety: "The Spiky King",
    description: "Defined by excessive reduction in fin webbing, creating a crown-like appearance. Fierce, aggressive, and undeniably royal.",
    imageUrl: "https://img.freepik.com/free-photo/fancy-crowntail-betta-fish_1150-7807.jpg?semt=ais_hybrid&w=740&q=80",
    imageAlt: "Crowntail betta fish with regal spiky fins",
    accentColor: "#E8B84C",
    glowColor: "rgba(232,184,76,0.2)"
  },
  {
    id: "halfmoon",
    name: "Halfmoon Betta",
    variety: "The Perfect 180°",
    description: "The pinnacle of breeding. When flared, the tail forms a perfect 180-degree semi-circle. Pure, symmetrical perfection.",
    imageUrl: "https://images.unsplash.com/photo-1635068130943-f05acd7460c9",
    imageAlt: "Halfmoon betta fish with perfect semi-circle tail",
    accentColor: "#84C9A8",
    glowColor: "rgba(132,201,168,0.2)"
  },
  {
    id: "doubletail",
    name: "Double Tail Betta",
    variety: "The Dual Force",
    description: "A unique genetic trait resulting in two distinct tail lobes and an extra-wide dorsal fin. Double the power, double the presence.",
    imageUrl: "https://images.unsplash.com/photo-1645479955886-990f50c846c1",
    imageAlt: "Double tail betta fish with two distinct tail lobes",
    accentColor: "#C9A84C",
    glowColor: "rgba(201,168,76,0.2)"
  },
  {
    id: "plakat",
    name: "Plakat Betta",
    variety: "The Pure Warrior",
    description: "Short-finned and sturdy, Plakats are the closest to their wild ancestors. Built for speed, strength, and relentless spirit.",
    imageUrl: "https://images.unsplash.com/photo-1645692397179-7c08bdae2ada",
    imageAlt: "Plakat betta fish showing powerful warrior build",
    accentColor: "#E84C4C",
    glowColor: "rgba(232,76,76,0.2)"
  },
  {
    id: "elephantear",
    name: "Elephant Ear Betta",
    variety: "The Dumbo Giant",
    description: "Named for its massive pectoral fins that look like elephant ears. A majestic and rare sight in any high-end collection.",
    imageUrl: "https://images.unsplash.com/photo-1635068130943-f05acd7460c9",
    imageAlt: "Elephant ear betta fish with large pectoral fins",
    accentColor: "#A84CA8",
    glowColor: "rgba(168,76,168,0.2)"
  }
];

interface ModalData {
  fishName: string;
  variety: string;
  price: number;
}

function PurchaseModal({ data, onClose }: { data: ModalData; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-white opacity-50 hover:opacity-100">✕</button>
        <p className="text-xs uppercase tracking-[0.25em] mb-2 font-semibold text-[#C9A84C]">Confirm Selection</p>
        <h3 className="font-fraunces text-2xl font-bold text-white mb-1">{data.fishName}</h3>
        <p className="text-sm opacity-50 mb-6">{data.variety}</p>
        
        <div className="mb-8 inline-block px-10 py-3 rounded-full font-fraunces text-3xl font-bold bg-white/5 border border-[#C9A84C]/30 text-[#C9A84C]">
          ₹{data.price.toLocaleString("en-IN")}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-xs uppercase tracking-wider mb-4 opacity-40">Scan QR to Complete Purchase</p>
          <div className="w-32 h-32 bg-white/10 mx-auto rounded-lg flex items-center justify-center border border-white/5">
             <div className="text-[10px] uppercase font-bold opacity-30">QR Code</div>
          </div>
          <p className="text-[10px] mt-4 opacity-40 uppercase tracking-widest">Available at Boss Shop Only</p>
        </div>

        <p className="text-xs opacity-50 leading-relaxed italic">
          Payments are non-refundable. Take a screenshot and visit our gallery within 24 hours to collect your Boss.
        </p>
      </div>
    </div>
  );
}

export default function BettaFishGrid() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bettaVarieties.map((fish) => (
            <div 
              key={fish.id}
              className="group relative bg-[#0d0d1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-500"
              style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)" }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <AppImage 
                  src={fish.imageUrl} 
                  alt={fish.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: fish.accentColor }}>
                    {fish.variety}
                  </p>
                  <h3 className="font-fraunces text-2xl font-bold text-white mb-2">{fish.name}</h3>
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <p className="text-sm leading-relaxed mb-6 opacity-50 min-h-[60px]">
                  {fish.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="font-fraunces text-xl font-bold text-[#C9A84C]">₹499</span>
                  <button 
                    onClick={() => setModalData({ fishName: fish.name, variety: fish.variety, price: 499 })}
                    className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9A84C] text-[#0a0a0a] hover:bg-white transition-colors"
                  >
                    Purchase
                  </button>
                </div>
              </div>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 100%, ${fish.glowColor}, transparent 70%)` }}
              />
            </div>
          ))}
        </div>
      </div>

      {modalData && <PurchaseModal data={modalData} onClose={() => setModalData(null)} />}
    </section>
  );
}
