import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import { FiBell } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from "./components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Family Friends",
  description:
    "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="py-4">
          <div className="flex items-center justify-between px-4.5">
            <Logo />
            <div className="grid py-0.5 [grid-template-areas:'stack']">
              <FiBell className="size-6 [grid-area:stack]" />
              <svg
                className="[grid-area:stack]"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle r="5" cx="19" cy="5" fill="var(--background)" />
                <circle r="3" cx="19" cy="5" fill="var(--primary)" />
              </svg>
            </div>
          </div>
        </header>
        <main className="px-4.5">{children}</main>
        <footer className="bg-glass text-text-muted sticky bottom-0 mt-8 flex justify-around rounded-t-4xl py-6.75 backdrop-blur-lg">
          <FiHome className="text-primary h-6 w-6" />
          <FiStar className="h-6 w-6" />
          <FiMessageCircle className="h-6 w-6" />
          <FiUser className="h-6 w-6" />
        </footer>
      </body>
    </html>
  );
}
