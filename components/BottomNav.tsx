"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/guest/", label: "Welcome", icon: "🌴" },
  { href: "/guest/house/", label: "House", icon: "🏡" },
  { href: "/guest/local/", label: "Local", icon: "📍" },
  { href: "/guest/faq/", label: "FAQ", icon: "❓" },
  { href: "/guest/checkout/", label: "Checkout", icon: "✅" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bottom-nav fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-2xl mx-auto flex items-stretch">
        {navItems.map((item) => {
          const isActive =
            item.href === "/guest/"
              ? pathname === "/guest/" || pathname === "/guest"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 transition-all"
              style={{
                color: isActive ? "var(--sage)" : "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span
                className="text-xs font-medium"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: "10px",
                  letterSpacing: "0.02em",
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <span
                  className="absolute bottom-0 h-0.5 w-8 rounded-t"
                  style={{ background: "var(--sage)" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
