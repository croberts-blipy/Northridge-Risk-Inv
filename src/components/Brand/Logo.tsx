"use client";
import Link from "next/link";
import { useState } from "react";

/**
 * Robust logo: tries an image at /brand/logo-nri.png (or your path),
 * falls back to an inline SVG if the image 404s.
 */
export default function Logo({
  src = "/brand/logo-nri.png",   // <-- change this to your new file path if needed
  size = 72,                      // control logo size here
}: { src?: string; size?: number }) {
  const [showImg, setShowImg] = useState(true);

  return (
    <Link href="/" className="flex items-center gap-4 select-none">
      {showImg ? (
        // Use plain <img> so a missing file doesn't break the build
        <img
          src={src}
          alt="Northridge Risk & Investigations Logo"
          width={size}
          height={size}
          className="rounded-sm"
          onError={() => setShowImg(false)}
        />
      ) : (
        // Fallback inline SVG (Northridge diamond style)
        <svg
          width={size} height={size} viewBox="0 0 128 128" aria-hidden="true"
          className="shrink-0"
        >
          <defs>
            <linearGradient id="nri-g" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F67FF"/>
              <stop offset="1" stopColor="#6A8BFF"/>
            </linearGradient>
          </defs>
          <rect x="28" y="28" width="72" height="72" rx="12" transform="rotate(45 64 64)" fill="url(#nri-g)"/>
        </svg>
      )}

      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-semibold text-white tracking-wider">
          NORTHRIDGE
        </span>
        <span className="text-sm uppercase text-gray-400 tracking-[0.35em]">
          Command
        </span>
      </div>
    </Link>
  );
}
