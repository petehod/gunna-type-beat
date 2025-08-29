import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AppProviders from "@/context/AppProviders";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gunna Type Beat - Target Your Favorite Artist's Sounds",
  description:
    "Analyze song data from top artists to uncover trends, chord progressions, and musical elements. Empowering music producers to create beats and instrumentals that match the signature sound of your favorite artists.",
  keywords:
    "song analysis, artist data, music production, chord progressions, producer tools, beat making, music analytics, target artist sound, melody analysis, hip hop production, trap beats, songwriting tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId={process.env.GTM_ID!} />

      <body className={`${poppins.variable}`} suppressHydrationWarning>
        <AppProviders>
          <div className="px-6 xl:px-0 pb-24 min-h-screen">
            <Header />
            {children}
          </div>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
