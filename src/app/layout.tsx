import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers"; // default export from providers.tsx
import Shell from "@/components/Shell"; // this controls when to show the sidebar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northridge Command",
  description: "Secure Command Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0A0C10] text-white">
      <body className={inter.className}>
        <Providers>
          {/* Shell controls visibility of sidebar */}
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
