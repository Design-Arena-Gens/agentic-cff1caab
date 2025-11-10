import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planora | AI Travel Planner",
  description: "Design your perfect journey with Planora, the AI-driven travel planner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-planora-cloud text-sky-950`}>{children}</body>
    </html>
  );
}
