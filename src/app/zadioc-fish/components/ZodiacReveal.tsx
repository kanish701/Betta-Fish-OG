"use client";

import { useState, useEffect } from "react";
import AppImage from "@/components/ui/AppImage";

// ─── Zodiac Data ───
interface ZodiacFish {
  sign: string;
  symbol: string;
  dateRange: string;
  fishName: string;
  fishVariety: string;
  element: string;
  personality: string;
  matchDesc: string;
  powerPhrase: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  glowColor: string;
}

const zodiacFishData: Record<string, ZodiacFish> = {
  Aries: {
    sign: "Aries",
    symbol: "♈",
    dateRange: "Mar 21 – Apr 19",
    fishName: "Plakat Betta",
    fishVariety: "The Warrior",
    element: "Fire",
    personality: "Warrior · Fierce · Unstoppable · Pioneer",
    matchDesc:
    "Born to fight, impossible to cage. The Plakat Betta's short, powerful fins and fighting heritage make it the ultimate Aries Boss. Like you, it dominates without hesitation.",
    powerPhrase: "Born to Lead. Built to Dominate.",
    imageUrl: "https://images.unsplash.com/photo-1645692397179-7c08bdae2ada",
    imageAlt: "Plakat betta fish showing powerful warrior fins in dark water",
    accentColor: "#E84C4C",
    glowColor: "rgba(232,76,76,0.25)"
  },
  Taurus: {
    sign: "Taurus",
    symbol: "♉",
    dateRange: "Apr 20 – May 20",
    fishName: "Elephant Ear Dumbo Betta",
    fishVariety: "The Sovereign",
    element: "Earth",
    personality: "Powerful · Steadfast · Majestic · Tenacious",
    matchDesc:
    "Massive pectoral fins like wings of power. The Elephant Ear Betta's commanding presence and unwavering steadiness mirror your bull energy — immovable, magnificent, and sovereign.",
    powerPhrase: "Unmovable. Unshakeable. Unstoppable.",
    imageUrl: "https://images.unsplash.com/photo-1635068130943-f05acd7460c9",
    imageAlt: "Elephant ear dumbo betta fish with large magnificent pectoral fins",
    accentColor: "#A84CA8",
    glowColor: "rgba(168,76,168,0.25)"
  },
  Gemini: {
    sign: "Gemini",
    symbol: "♊",
    dateRange: "May 21 – Jun 20",
    fishName: "Double Tail Betta",
    fishVariety: "The Twin",
    element: "Air",
    personality: "Dual · Dynamic · Witty · Unpredictable",
    matchDesc:
    "Two tails. Two energies. One legendary Boss. The Double Tail Betta embodies Gemini's duality — two distinct forces living in one extraordinary form, just like you.",
    powerPhrase: "Two Souls. One Unstoppable Force.",
    imageUrl: "https://images.unsplash.com/photo-1645479955886-990f50c846c1",
    imageAlt: "Double tail betta fish showing dual tail lobes in aquarium",
    accentColor: "#C9A84C",
    glowColor: "rgba(201,168,76,0.25)"
  },
  Cancer: {
    sign: "Cancer",
    symbol: "♋",
    dateRange: "Jun 21 – Jul 22",
    fishName: "Veiltail Betta",
    fishVariety: "The Protector",
    element: "Water",
    personality: "Nurturing · Intuitive · Protective · Deep",
    matchDesc:
    "The Veiltail's flowing, gentle fins carry the depth of the ocean — just like the Cancer soul. Compassionate, protective, and deeply feeling, this Boss guards its space with quiet power.",
    powerPhrase: "Deep Roots. Quiet Power. Fierce Protection.",
    imageUrl: "https://images.unsplash.com/photo-1699425155230-fb6588e1ad5b",
    imageAlt: "Veiltail betta fish with long graceful flowing fins in blue water",
    accentColor: "#4C7CE8",
    glowColor: "rgba(76,124,232,0.25)"
  },
  Leo: {
    sign: "Leo",
    symbol: "♌",
    dateRange: "Jul 23 – Aug 22",
    fishName: "Crowntail Betta",
    fishVariety: "The King",
    element: "Fire",
    personality: "Royal · Dominant · Charismatic · Regal",
    matchDesc:
    "A crown-shaped tail for a crown-wearing soul. The Crowntail Betta's spiky, regal fins scream dominance. Like Leo, it commands every room it enters — effortlessly, magnificently.",
    powerPhrase: "Every Room Is Your Kingdom.",
    imageUrl: "https://images.unsplash.com/photo-1729452120369-caa8450901fc",
    imageAlt: "Crowntail betta fish with regal crown-like spiky tail fins",
    accentColor: "#E8B84C",
    glowColor: "rgba(232,184,76,0.3)"
  },
  Virgo: {
    sign: "Virgo",
    symbol: "♍",
    dateRange: "Aug 23 – Sep 22",
    fishName: "Halfmoon Betta",
    fishVariety: "The Perfectionist",
    element: "Earth",
    personality: "Precise · Analytical · Graceful · Refined",
    matchDesc:
    "Perfect 180-degree symmetry — not a millimeter off. The Halfmoon Betta's flawless form mirrors Virgo's relentless pursuit of perfection. Precise, refined, and absolutely stunning.",
    powerPhrase: "Perfection Is Not a Goal. It Is a Standard.",
    imageUrl: "https://images.unsplash.com/photo-1635068130943-f05acd7460c9",
    imageAlt: "Halfmoon betta fish with perfectly symmetrical spread tail fins",
    accentColor: "#84C9A8",
    glowColor: "rgba(132,201,168,0.25)"
  },
  Libra: {
    sign: "Libra",
    symbol: "♎",
    dateRange: "Sep 23 – Oct 22",
    fishName: "Halfmoon Betta",
    fishVariety: "The Harmonist",
    element: "Air",
    personality: "Balanced · Elegant · Diplomatic · Beautiful",
    matchDesc:
    "The Halfmoon's perfect symmetry is a living testament to Libra's love of balance and beauty. Spreading to a full 180 degrees, it is harmony made visible.",
    powerPhrase: "Beauty Is Your Weapon. Balance Is Your Power.",
    imageUrl: "https://images.unsplash.com/photo-1676709143128-6f87f1a58b02",
    imageAlt: "Halfmoon betta fish with perfectly balanced symmetrical tail",
    accentColor: "#84C9A8",
    glowColor: "rgba(132,201,168,0.25)"
  },
  Scorpio: {
    sign: "Scorpio",
    symbol: "♏",
    dateRange: "Oct 23 – Nov 21",
    fishName: "Crowntail Betta",
    fishVariety: "The Shadow King",
    element: "Water",
    personality: "Intense · Mysterious · Powerful · Transformative",
    matchDesc:
    "Dark, intense, and impossible to ignore. The Crowntail Betta's dramatic crown fins carry Scorpio's magnetic mystery and raw power. You don't just enter a room — you possess it.",
    powerPhrase: "In the Depths, You Reign Supreme.",
    imageUrl: "https://images.unsplash.com/photo-1694459932792-731c116da5ab",
    imageAlt: "Crowntail betta fish with dramatic dark fins and intense presence",
    accentColor: "#8B1A1A",
    glowColor: "rgba(139,26,26,0.3)"
  },
  Sagittarius: {
    sign: "Sagittarius",
    symbol: "♐",
    dateRange: "Nov 22 – Dec 21",
    fishName: "Plakat Betta",
    fishVariety: "The Adventurer",
    element: "Fire",
    personality: "Free · Bold · Adventurous · Fearless",
    matchDesc:
    "Short, powerful fins built for speed and freedom. The Plakat Betta races through water like Sagittarius races through life — bold, fearless, and always seeking the next horizon.",
    powerPhrase: "No Borders. No Limits. No Fear.",
    imageUrl: "https://images.unsplash.com/photo-1675886059096-0c56dbfa3cd1",
    imageAlt: "Plakat betta fish swimming freely with powerful short fins",
    accentColor: "#E87722",
    glowColor: "rgba(232,119,34,0.25)"
  },
  Capricorn: {
    sign: "Capricorn",
    symbol: "♑",
    dateRange: "Dec 22 – Jan 19",
    fishName: "Elephant Ear Dumbo Betta",
    fishVariety: "The Titan",
    element: "Earth",
    personality: "Disciplined · Ambitious · Enduring · Strategic",
    matchDesc:
    "Built for the long game. The Elephant Ear Betta's massive, deliberate fins mirror Capricorn's patient, strategic climb to the summit. Slow to rise, impossible to stop.",
    powerPhrase: "The Summit Was Always Yours.",
    imageUrl: "https://images.unsplash.com/photo-1735573770675-d60cb982ddd6",
    imageAlt: "Elephant ear dumbo betta fish showing strength and majesty",
    accentColor: "#6A8A4C",
    glowColor: "rgba(106,138,76,0.25)"
  },
  Aquarius: {
    sign: "Aquarius",
    symbol: "♒",
    dateRange: "Jan 20 – Feb 18",
    fishName: "Double Tail Betta",
    fishVariety: "The Visionary",
    element: "Air",
    personality: "Original · Visionary · Rebellious · Unique",
    matchDesc:
    "Two tails defy the very concept of normal. The Double Tail Betta is the rebel of the aquarium — unique, unconventional, and refusing to be defined. Exactly like Aquarius.",
    powerPhrase: "The Future Belongs to the Unconventional.",
    imageUrl: "https://images.unsplash.com/photo-1635068130943-f05acd7460c9",
    imageAlt: "Double tail betta fish with unique dual tail structure",
    accentColor: "#4CC9E8",
    glowColor: "rgba(76,201,232,0.25)"
  },
  Pisces: {
    sign: "Pisces",
    symbol: "♓",
    dateRange: "Feb 19 – Mar 20",
    fishName: "Veiltail Betta",
    fishVariety: "The Mystic",
    element: "Water",
    personality: "Mystical · Compassionate · Dreamy · Intuitive",
    matchDesc:
    "The Veiltail flows like the Pisces soul — fluid, graceful, and deeply intuitive. Its long, sweeping fins move like currents of emotion, mirroring your compassionate and mystical nature.",
    powerPhrase: "You Don't Chase the Current. You Become It.",
    imageUrl: "https://images.unsplash.com/photo-1589640545728-e06516bc07cb",
    imageAlt: "Veiltail betta fish with long flowing mystical fins in dark water",
    accentColor: "#7B8FE8",
    glowColor: "rgba(123,143,232,0.25)"
  }
};

function getZodiacFromDOB(dateStr: string): string | null {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 3 && day >= 21 || month === 4 && day <= 19) return "Aries";
  if (month === 4 && day >= 20 || month === 5 && day <= 20) return "Taurus";
  if (month === 5 && day >= 21 || month === 6 && day <= 20) return "Gemini";
  if (month === 6 && day >= 21 || month === 7 && day <= 22) return "Cancer";
  if (month === 7 && day >= 23 || month === 8 && day <= 22) return "Leo";
  if (month === 8 && day >= 23 || month === 9 && day <= 22) return "Virgo";
  if (month === 9 && day >= 23 || month === 10 && day <= 22) return "Libra";
  if (month === 10 && day >= 23 || month === 11 && day <= 21) return "Scorpio";
  if (month === 11 && day >= 22 || month === 12 && day <= 21) return "Sagittarius";
  if (month === 12 && day >= 22 || month === 1 && day <= 19) return "Capricorn";
  if (month === 1 && day >= 20 || month === 2 && day <= 18) return "Aquarius";
  if (month === 2 && day >= 19 || month === 3 && day <= 20) return "Pisces";
  return null;
}

interface ModalData {
  fishName: string;
  zodiac: string;
  price: number;
}

function PurchaseModal({
  data,
  onClose



}: {data: ModalData;onClose: () => void;}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(245,245,245,0.5)" }}
          aria-label="Close">
          
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: "rgba(232,119,34,0.8)" }}>
            Your Zodiac Boss
          </p>
          <h3 className="font-fraunces text-2xl font-bold text-white mb-1">
            {data.fishName}
          </h3>
          <p className="text-sm" style={{ color: "rgba(245,245,245,0.5)" }}>
            Matched for {data.zodiac}
          </p>
          <div
            className="mt-3 inline-block px-6 py-2 rounded-full font-fraunces text-2xl font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(232,119,34,0.15), rgba(201,168,76,0.15))",
              border: "1px solid rgba(232,119,34,0.45)",
              color: "#E87722"
            }}>
            
            ₹{data.price.toLocaleString("en-IN")}
          </div>
        </div>

        {/* QR Code */}
        <div className="mb-6">
          <p className="text-xs text-center uppercase tracking-wider mb-4 font-semibold" style={{ color: "rgba(245,245,245,0.4)" }}>
            Scan QR Code to Pay
          </p>
          <div className="qr-placeholder mx-auto shadow-lg" style={{ boxShadow: "0 0 30px rgba(232,119,34,0.15)" }}>
            <div className="p-3 w-full h-full">
              <div
                className="w-full h-full rounded-sm"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 7px, #0a0a0a 7px, #0a0a0a 8px),
                    repeating-linear-gradient(90deg, transparent, transparent 7px, #0a0a0a 7px, #0a0a0a 8px)
                  `,
                  backgroundColor: "#f0f0f0",
                  position: "relative"
                }}>
                
                <div className="absolute top-2 left-2 w-8 h-8 rounded-sm" style={{ border: "3px solid #0a0a0a" }}>
                  <div className="absolute inset-1.5 bg-[#0a0a0a] rounded-sm" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-sm" style={{ border: "3px solid #0a0a0a" }}>
                  <div className="absolute inset-1.5 bg-[#0a0a0a] rounded-sm" />
                </div>
                <div className="absolute bottom-2 left-2 w-8 h-8 rounded-sm" style={{ border: "3px solid #0a0a0a" }}>
                  <div className="absolute inset-1.5 bg-[#0a0a0a] rounded-sm" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[8px] font-bold text-center leading-tight" style={{ color: "#0a0a0a" }}>
                    QR CODE<br />PLACEHOLDER
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs mt-2" style={{ color: "rgba(245,245,245,0.35)" }}>
            UPI · Google Pay · PhonePe · Paytm
          </p>
        </div>

        {/* Instructions */}
        <div
          className="p-4 rounded-xl mb-4 text-sm leading-relaxed"
          style={{
            background: "rgba(232,119,34,0.06)",
            border: "1px solid rgba(232,119,34,0.15)",
            color: "rgba(245,245,245,0.65)"
          }}>
          
          Scan & Pay ₹{data.price.toLocaleString("en-IN")}. After payment, take a screenshot of your transaction.{" "}
          <strong className="text-white">Visit our shop with the payment proof</strong> to collect your Zodiac Boss.
        </div>

        {/* Reservation */}
        <div
          className="flex items-center gap-3 p-3 rounded-xl text-xs"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.2)",
            color: "rgba(245,245,245,0.6)"
          }}>
          
          <span style={{ color: "#C9A84C" }}>⏱</span>
          <span>
            <strong style={{ color: "#C9A84C" }}>Fish reserved for 24 hours</strong> after payment confirmation.
          </span>
        </div>
      </div>
    </div>);

}

export default function ZodiacReveal() {
  const [dobValue, setDobValue] = useState("");
  const [zodiacResult, setZodiacResult] = useState<ZodiacFish | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [error, setError] = useState("");

  const handleReveal = () => {
    if (!dobValue) {
      setError("Please enter your date of birth to proceed.");
      return;
    }
    setError("");
    setIsRevealing(true);
    setHasRevealed(false);
    setZodiacResult(null);

    setTimeout(() => {
      const sign = getZodiacFromDOB(dobValue);
      if (sign && zodiacFishData[sign]) {
        setZodiacResult(zodiacFishData[sign]);
        setHasRevealed(true);
      } else {
        setError("Could not determine zodiac. Please check your date of birth.");
      }
      setIsRevealing(false);
    }, 1800);
  };

  const handleReset = () => {
    setDobValue("");
    setZodiacResult(null);
    setHasRevealed(false);
    setError("");
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* DOB Input Card */}
        {!hasRevealed &&
        <div
          className="relative p-8 md:p-12 rounded-2xl text-center"
          style={{
            background: "linear-gradient(160deg, #0f1535 0%, #0a0d22 60%, #110d1a 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 0 60px rgba(201,168,76,0.06)"
          }}>
          
            {/* Decorative top glow */}
            <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
          

            {/* Icon */}
            <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto"
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)"
            }}>
            
              <span className="text-3xl">☿</span>
            </div>

            {/* Heading */}
            <h2
            className="font-fraunces font-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#FFFFFF" }}>
            
              Your Rasi Reveals…
            </h2>
            <p
            className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: "rgba(245,245,245,0.5)" }}>
            
              Enter your date of birth. The cosmos will calculate your Rasi and reveal 
              the Boss fish that carries your energy.
            </p>

            {/* DOB Input */}
            <div className="max-w-sm mx-auto mb-6">
              <label
              htmlFor="dob"
              className="block text-xs uppercase tracking-[0.2em] font-semibold mb-3 text-left"
              style={{ color: "rgba(201,168,76,0.7)" }}>
              
                Date of Birth
              </label>
              <input
              id="dob"
              type="date"
              value={dobValue}
              onChange={(e) => {
                setDobValue(e.target.value);
                setError("");
              }}
              max={new Date().toISOString().split("T")[0]}
              className="dob-input"
              aria-label="Enter your date of birth" />
            
              {error &&
            <p className="mt-2 text-xs text-left" style={{ color: "#E84C4C" }}>
                  {error}
                </p>
            }
            </div>

            {/* Reveal Button */}
            <button
            onClick={handleReveal}
            disabled={isRevealing}
            className="relative w-full max-w-sm mx-auto block py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden"
            style={{
              background: isRevealing ?
              "rgba(201,168,76,0.3)" :
              "linear-gradient(135deg, #C9A84C 0%, #E87722 100%)",
              color: "#0a0a0a",
              cursor: isRevealing ? "not-allowed" : "pointer"
            }}>
            
              {isRevealing ?
            <span className="flex items-center justify-center gap-3">
                  <span
                className="inline-block w-4 h-4 rounded-full border-2 border-t-transparent"
                style={{
                  borderColor: "rgba(10,10,10,0.4)",
                  borderTopColor: "transparent",
                  animation: "spin 0.8s linear infinite"
                }} />
              
                  Reading the Stars…
                </span> :

            "Reveal My Zodiac Boss"
            }
            </button>

            {/* Spinning animation for loader */}
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        }

        {/* Zodiac Reveal Result */}
        {hasRevealed && zodiacResult &&
        <div className="zodiac-reveal-card overflow-hidden">
            {/* Top accent */}
            <div
            className="h-1 w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${zodiacResult.accentColor}, transparent)`
            }} />
          

            <div className="p-8 md:p-10">
              {/* Reveal label */}
              <div className="text-center mb-8">
                <p
                className="text-xs uppercase tracking-[0.35em] font-semibold mb-3"
                style={{ color: "rgba(201,168,76,0.6)" }}>
                
                  Your Rasi Has Spoken
                </p>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span
                  className="font-fraunces text-6xl"
                  style={{ color: zodiacResult.accentColor }}>
                  
                    {zodiacResult.symbol}
                  </span>
                  <div className="text-left">
                    <h2
                    className="font-fraunces font-bold text-3xl text-white">
                    
                      {zodiacResult.sign}
                    </h2>
                    <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "rgba(245,245,245,0.45)" }}>
                    
                      {zodiacResult.dateRange} · {zodiacResult.element} Sign
                    </p>
                  </div>
                </div>
                <div className="gold-divider mt-4" />
              </div>

              {/* Fish reveal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Image */}
                <div
                className="relative rounded-xl overflow-hidden h-64"
                style={{
                  boxShadow: `0 0 40px ${zodiacResult.glowColor}`,
                  border: `1px solid ${zodiacResult.accentColor}30`
                }}>
                
                  <AppImage
                  src={zodiacResult.imageUrl}
                  alt={zodiacResult.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.15) brightness(0.85)" }} />
                
                  <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(10,13,34,0.9) 100%)`
                  }} />
                
                  <div className="absolute bottom-4 left-4">
                    <p
                    className="text-xs uppercase tracking-wider font-semibold"
                    style={{ color: zodiacResult.accentColor }}>
                    
                      {zodiacResult.fishVariety}
                    </p>
                    <h3 className="font-fraunces text-xl font-bold text-white">
                      {zodiacResult.fishName}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p
                    className="text-xs uppercase tracking-wider font-semibold mb-2"
                    style={{ color: zodiacResult.accentColor }}>
                    
                      {zodiacResult.personality}
                    </p>
                    <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(245,245,245,0.65)" }}>
                    
                      {zodiacResult.matchDesc}
                    </p>
                    <div
                    className="p-4 rounded-xl mb-4"
                    style={{
                      background: `${zodiacResult.accentColor}12`,
                      border: `1px solid ${zodiacResult.accentColor}25`
                    }}>
                    
                      <p
                      className="font-fraunces italic text-base font-semibold"
                      style={{ color: zodiacResult.accentColor }}>
                      
                        "{zodiacResult.powerPhrase}"
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "rgba(245,245,245,0.35)" }}>
                    
                      Fixed Price — Premium Selection
                    </p>
                    <p
                    className="font-fraunces text-3xl font-bold mb-4"
                    style={{ color: "#C9A84C" }}>
                    
                      ₹1,499
                    </p>
                    <button
                    className="w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${zodiacResult.accentColor} 0%, #C9A84C 100%)`,
                      color: "#0a0a0a"
                    }}
                    onClick={() =>
                    setModalData({
                      fishName: zodiacResult.fishName,
                      zodiac: zodiacResult.sign,
                      price: 1499
                    })
                    }>
                    
                      Purchase Your Zodiac Boss
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset */}
              <div className="text-center">
                <button
                onClick={handleReset}
                className="text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "rgba(245,245,245,0.35)" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A84C"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(245,245,245,0.35)"}>
                
                  ← Try a Different Date
                </button>
              </div>
            </div>
          </div>
        }
      </div>

      {/* Modal */}
      {modalData &&
      <PurchaseModal data={modalData} onClose={() => setModalData(null)} />
      }
    </section>);

}