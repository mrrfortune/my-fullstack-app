"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("Connecting to Python...");

  // 1. Fetch logic (Directly in the component for now)
 useEffect(() => {
  fetch("http://localhost:8000/api/hello")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data received:", data); // Check if this shows in F12 console
      setMessage(data.message);            // This triggers the UI update
    })
    .catch((err) => console.error("Fetch error:", err));
}, []);


  // 2. GSAP Animation Logic
  useGSAP(() => {
    // Initial Load Animation
    gsap.from(".reveal", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Scroll-Triggered Animation
    gsap.from(".scroll-text", {
      scrollTrigger: {
        trigger: ".scroll-section", 
        start: "top 80%",           // When top of section hits 80% of screen height
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, { scope: container });

  return (
    <main ref={container} style={{ backgroundColor: '#fff', color: '#000' }}>
      {/* SECTION 1: Intro (Hero) */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5vw' }}>
        <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', margin: 0 }}>
          {message}
        </h1>
        <p className="reveal" style={{ fontSize: '1.2rem', opacity: 0.7 }}>
          Next.js + Python + GSAP is Live.
        </p>
      </section>

      {/* SECTION 2: Scroll Trigger Test */}
      <section className="scroll-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4' }}>
        <h2 className="scroll-text" style={{ fontSize: '3rem' }}>
          This reveals on scroll.
        </h2>
      </section>
    </main>
  );
}
