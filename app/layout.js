// app/layout.js
import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  // ... your font config
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: "Prixair | Smarter Exploration",
  description: "Prixair Exploration website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <CustomCursor />
        <Suspense fallback={null}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}