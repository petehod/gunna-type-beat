import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AppProviders from "@/context/AppProviders";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gunna Type Beat - Premium Hip Hop Beats & Instrumentals",
  description:
    "Discover high-quality Gunna type beats, trap instrumentals, and hip hop beats for sale. Professional music production with exclusive licensing options.",
  keywords:
    "gunna type beat, trap beats, hip hop instrumentals, rap beats, music production",
  openGraph: {
    title: "Gunna Type Beat - Premium Hip Hop Beats & Instrumentals",
    description:
      "Discover high-quality Gunna type beats, trap instrumentals, and hip hop beats for sale. Professional music production with exclusive licensing options.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunna Type Beat - Premium Hip Hop Beats & Instrumentals",
    description:
      "Discover high-quality Gunna type beats, trap instrumentals, and hip hop beats for sale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable}`} suppressHydrationWarning>
        <AppProviders>
          <div className="px-6 xl:px-0 pb-24">
            <Header />
            {children}
          </div>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
