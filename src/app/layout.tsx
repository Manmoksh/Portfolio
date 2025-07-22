import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata = {
  title: "Manmoksh Portfolio",
  description: "Portfolio of Manmoksh — passionate B.Tech graduate and modern web developer.",
  keywords: "Manmoksh, Man moksh, Web Developer, Portfolio, Next.js, India",
icons:{icons:{"/favicon.ico"}},
  openGraph: {
    title: "Manmoksh — Portfolio",
    description: "Explore my web development projects and skills.",
    url: "https://manmoksh.tech",
    siteName: "Manmoksh Portfolio",
    
    type: "website",
  },
  other: {
    "google-site-verification": "UB_Q99jIfHLqIuduuXdKUCmTNT-ibhNB8uv2hnFxWGI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
