"use client"
import FooterContent from "@/components/Footer/FooterContent";
import SidebarContent from "@/components/SibeBar/SidebarContent";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex gap-1">
                    <SidebarContent />
                    <div className="flex flex-col gap-1">
                    {children}
                    <FooterContent />
                    </div>
                </div>
            </body>
        </html>
    );
}

