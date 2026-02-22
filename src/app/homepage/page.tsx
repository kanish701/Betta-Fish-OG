import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import TwoPathsSection from "./components/TwoPathsSection";
import HowItWorksSection from "./components/HowItWorksSection";

export const metadata: Metadata = {
  title: "Betta Boss — Your Fish. Your Rasi. Your Boss.",
  description:
    "Discover your zodiac-matched Boss fish. Betta Boss is a premium zodiac-powered fish selection experience. Find the Betta that mirrors your cosmic energy.",
  keywords: ["betta fish", "zodiac fish", "rasi fish", "premium betta", "aquarium", "India"],
};

export default function Homepage() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <TwoPathsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}