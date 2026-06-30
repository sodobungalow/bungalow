import type { Metadata } from "next";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "SODO Bungalow — Guest Guide",
  description: "Your digital house guide for the SODO Bungalow. Wi-Fi, pool info, local picks, and everything you need for your stay.",
  robots: "noindex, nofollow",
};

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <main className="max-w-2xl mx-auto">{children}</main>
      <BottomNav />
    </div>
  );
}
