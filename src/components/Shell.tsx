"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ Hide the sidebar on login, register, and forgot-password pages
  const hideSidebar =
    pathname === "/login" ||
    pathname?.startsWith("/login") ||
    pathname === "/register" ||
    pathname === "/forgot-password";

  // ✅ If sidebar should be hidden, render only page content
  if (hideSidebar) {
    return <>{children}</>;
  }

  // ✅ Otherwise render the app with sidebar layout
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen">{children}</div>
    </div>
  );
}
