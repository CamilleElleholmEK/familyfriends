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
      <body className="flex min-h-full flex-col px-4.5">
        <header className="flex justify-between">
          <Logo />
          <FiBell />
        </header>
        <main className="">{children}</main>
        <footer className="flex justify-around">
          <FiHome />
          <FiStar />
          <FiMessageCircle />
          <FiUser />
        </footer>
      </body>
    </html>
  );
}
