import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterContent from "@/components/Footer/FooterContent";
import NavbarContent from "@/components/Navbar/NavbarContent";

export const metadata: Metadata = {
  title: "Lilynn02",
  description: "Pagina personal de Lilynn02, streamer de Twitch, caster y host de eventos de Esports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarContent/>
        {children}
        <FooterContent/>
      </body>
    </html>
  );
}
