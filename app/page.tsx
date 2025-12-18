"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
import "../styles/home.css";
// Removed unused imports for clarity, keep them if you need them for DevLink
import * as _Builtin from "../devlink/_Builtin"; 

   
export default function Home() {
  const [status, setStatus] = useState("Ready");
  const [aiResponse, setAiResponse] = useState(""); // 1. New variable for the answer

  const testAgencyAI = async () => {
    setStatus("Thinking...");
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: "How can EchoShift help my business?" })
      });

      const data = await res.json();
      
      if (res.ok) {
        setAiResponse(data.reply); // 2. Store the reply in state
        setStatus("AI Replied!");
      } else {
        setStatus("Error: " + data.error);
      }
    } catch (err) {
      setStatus("Connection failed.");
    }
  };

  
  const [message, setMessage] = useState("Connecting...");
  const containerRef = useRef<HTMLDivElement>(null); // 1. Create the container ref
  const textRef = useRef<HTMLHeadingElement>(null);

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
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
    <div>
     

      <section className="hero-heading-left section">
        <div className="hero-wrapper">
          <div className="hero-split">
            <h1 className="h1display text-5xl font-bold">
              Shift your reach,<br />
              amplify your impact
            </h1> 
            <h2 ref={textRef} style={{ fontSize: '3rem' }}>{message}</h2>
       {/* THIS IS THE BUTTON */}
     <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ color: '#0070f3' }}>EchoShift Agency</h1>
      <p>Status: <strong>{status}</strong></p>
      
      <button 
        onClick={testAgencyAI}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Test EchoShift AI
      </button>
      {/* 3. This box will show the AI's message on the screen */}
      {aiResponse && (
        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          maxWidth: '600px',
          margin: '30px auto',
          textAlign: 'left',
          lineHeight: '1.6'
        }}>
          <strong>EchoShift AI says:</strong>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
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
            <img src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e260562154bcc02648c828_bmw-logo.svg" alt="BMW" className="h-10" />
          </div>
        </div>
      </section>
      {/* <section className="features-list">
        <div className="container-12">
          <h2 className="h2headings innerpage">What We Do</h2>
          <div className="features-wrapper-two">
            <div className="features-left">
              <h3 className="h3desktop1">Top Solutions</h3>
              <p className="features-paragraph">
                We help brands cut through the noise with precision-driven campaigns 
                across every channel. From programmatic display and video to search, 
                geofencing, and email marketing.
              </p>
              <a href="#" className="text-link-arrow">
                <div className="learnmorelink">Learn more</div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M11.13 8.5L6.87296 4.24291L5.87067 5.24379L9.129 8.5L5.87067 11.7555L6.87225 12.7571L11.13 8.5Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div> 
        </div>
      </section> */}

    </div>
    
  );
}