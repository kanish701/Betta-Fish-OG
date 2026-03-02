import { Metadata } from "next";
import ZodiacReveal from "./components/ZodiacReveal";

export const metadata: Metadata = {
    title: "Zodiac Match | Betta Boss Oracle",
    description: "Discover the perfect Betta fish and aquatic flora matched to your Rasi and Nakshatra.",
};

export default function ZodiacPage() {
    return <ZodiacReveal />;
}
