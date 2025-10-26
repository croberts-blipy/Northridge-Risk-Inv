"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Shield,
  Users,
  Settings,
} from "lucide-react";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const NAV_ITEMS: Item[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/guard", label: "Guard", icon: Shield },
  { href: "/client", label: "Client", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0B0E13] border-r border-[#23272e] text-white flex flex-col">
      {/* Brand (text only, no logo) */}
      <div className="px-5 pt-6 pb-4 border-b border-[#23272e]">
        <div className="text-sm tracking-[0.3em] text-gray-400 uppercase">
          Northridge
        </div>
        <div className="text-xs tracking-[0.35em] text-gray-500 uppercase">
          Command
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-white/5 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 text-[11px] text-gray-500 border-t border-[#23272e]">
        © {new Date().getFullYear()} Northridge Risk & Investigations
      </div>
    </aside>
  );
}
