import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi step form",
  description: "Frontend challenge solution by Dominik Rubröder, Challenge by frontendmentor.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white lg:bg-sky-100 ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
