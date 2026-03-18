import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptKit Pro — 200+ Battle-Tested AI Prompts",
  description:
    "The ultimate collection of copy-paste AI prompts for business, marketing, coding, and productivity. Stop wasting time writing prompts from scratch.",
  openGraph: {
    title: "PromptKit Pro — 200+ Battle-Tested AI Prompts",
    description:
      "Copy-paste prompts that actually work. Business, marketing, coding, writing, productivity.",
    type: "website",
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
