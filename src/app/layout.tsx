import "~/styles/globals.css";

import { Rubik } from "next/font/google";
import { type Metadata } from "next";

// Initialize the Rubik font with various weights for flexibility
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camila Cardi",
  description: "Professional portfolio showcasing Camila Cardi's expertise in mechanical engineering",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
