"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
// Removed unused imports for clarity, keep them if you need them for DevLink
import * as _Builtin from "../devlink/_Builtin"; 


const testAgencyAI = async () => {
    console.log("Button clicked! Talking to backend...");
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: "How can EchoShift help my business?" })
      });
      const data = await res.json();
      console.log("EchoShift AI says:", data.reply);
      alert("AI Replied! Check the console for the full message.");
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };
export default function Home() {
  const [message, setMessage] = useState("Connecting...");
  const containerRef = useRef<HTMLDivElement>(null); // 1. Create the container ref
  const textRef = useRef<HTMLHeadingElement>(null);

  // Fetch data
  useEffect(() => {
    fetch("localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to connect"));
  }, []);

  // 2. Proper GSAP hook (Scoped to the container)
  useGSAP(() => {
    if (message !== "Connecting...") {
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 20, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }
  }, { dependencies: [message], scope: containerRef }); // 3. Runs when 'message' changes

  return (
    // 4. Attach the containerRef here
    <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 ref={textRef} style={{ fontSize: '3rem' }}>{message}</h1>
      <main className="main">
      <section className="hero-heading-left section">
        <div className="hero-wrapper">
          <div className="hero-split">
            <h1 className="h1display text-5xl font-bold">
              Shift your reach,<br />
              amplify your impact
            </h1>
       {/* THIS IS THE BUTTON */}
      <button 
        onClick={testAgencyAI}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Test EchoShift AI
      </button>
            <p className="subheadpara text-lg mt-4">
              Cut through the noise with campaigns designed to reach, engage, and convert. 
              We work alongside you to craft digital strategies that move audiences and grow your business.
            </p>
            <Link href="/contact" className="btnprimary inline-flex items-center mt-6">
              {"let's Get Started!"}
              <svg className="svg-icon ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z" 
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          
          <div className="hero-split">
            <img 
              className="shadow-two rounded-lg" 
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6903fa27114c827e6e8f67e6_hero_main.png" 
              alt="Hero Illustration" 
              width={960}
            />
          </div>
        </div>

        {/* Clients Section */}
        <div className="container-13 py-12">
          <h2 className="clients-title text-center text-xl mb-8">Clients</h2>
          <div className="clients-wrapper flex flex-wrap justify-center gap-8 grayscale opacity-70">
            <img src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e76f0ded26b2388eaf9936_jj.svg" alt="JJ Logo" className="h-10" />
            <img src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e76f6c6d151044c26e3ece_kpmg.svg" alt="KPMG Logo" className="h-10" />
            <img src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e25f01c0dfd162420b53b8_omnicom-media-group-1.svg" alt="Omnicom Logo" className="h-10" />
            <img src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e25fb5fc9ee3be3c10e900_the-wall-street-journal-1.svg" alt="WSJ Logo" className="h-10" />
          </div>
        </div>
      </section>
    </main>
    </div>
    
  );
}