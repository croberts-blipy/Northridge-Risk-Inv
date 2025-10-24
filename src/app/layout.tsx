import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Northridge Risk",
  description: "A modern platform experience for Northridge Risk Investments.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-background-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
