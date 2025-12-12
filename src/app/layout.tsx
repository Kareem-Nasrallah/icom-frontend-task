import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";
import MenuWithTheme from "@/components/layout/MenuWithTheme";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ICOM Real Estate",
  description:
    "A modern real estate website, featuring property listings and user management.",
  icons: {
    icon: "/agreement.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.className} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <MenuWithTheme />
            {children}
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
