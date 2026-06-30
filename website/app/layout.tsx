import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SODO Bungalow — Orlando Vacation Rental",
  description: "A private pool home in the heart of Orlando. Minutes from Disney, Universal, MCO airport, and top hospitals. Book on Airbnb or VRBO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
