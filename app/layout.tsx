"use client";
import dynamic from "next/dynamic";
import { DevLinkProvider } from "@/devlink";
import "@/devlink/global.css";
import { Header } from "./components/Header"; // Import external component
import { Footer } from "./components/Footer"; // Import external component
import "./globals.css";

// 1. Load your Webflow Navbar dynamically and disable Server-Side Rendering (SSR)
const Navbar = dynamic(() => import("@/devlink").then((mod) => mod.HeaderNav2), {
  ssr: false,
});

// 2. Do the same for Footer if you have one
// const Footer = dynamic(() => import("@/devlink").then((mod) => mod.Footer), {
//   ssr: false,
//   loading: () => <div style={{ height: '100px' }} />, // Optional placeholder
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          {/* This component now only exists on the client side */}
          <Header/>
          <main className="main grid-cols-12">{children}</main>
          
          <Footer />
        </DevLinkProvider>
      </body>
    </html>
  );
}