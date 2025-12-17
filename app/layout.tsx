import "@/devlink/global.css"; // Ensure your Webflow styles are loaded
import { HeaderNav2, Footer } from "@/devlink"; // Use your exact Webflow component names

export const metadata = {
  title: "My Fullstack Webflow App",
  description: "Next.js + Flask + GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The Navbar stays at the top of every page */}
        <HeaderNav2 />
        
        {/* This "children" represents your page.tsx content */}
        <main>{children}</main>
        
        {/* The Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}