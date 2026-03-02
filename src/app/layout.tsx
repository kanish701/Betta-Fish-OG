import type { Metadata } from "next";
import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: 'Betta Boss | Zodiac Oracle',
  description: 'Discover the Boss fish written in your Rasi and Nakshatra.',
  icons: {
    icon: [
      { url: '/img/logo_removebg-preview.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
