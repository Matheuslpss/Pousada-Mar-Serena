import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pousada Mar Serena | Refugio boutique a beira-mar",
  description:
    "Landing page premium da Pousada Mar Serena, uma pousada boutique ficticia a beira-mar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
