import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi step form",
  description:
    "Frontend challenge solution by Dominik Rubröder, Challenge by frontendmentor.io",
  viewport: "width=device-width, initial-scale=1.0",
  other: { "http-equiv": "content-type", content: "text/html" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white lg:bg-[#EFF5FF] ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
