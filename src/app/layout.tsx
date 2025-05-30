import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to Our Landing Page",
  description: "Discover amazing things here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
