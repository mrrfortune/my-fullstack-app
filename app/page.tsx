"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [message, setMessage] = useState("Connecting...");
  const textRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        
        // GSAP Animation: Pop the text in when the data arrives
        gsap.fromTo(textRef.current, 
          { opacity: 0, y: 20, scale: 0.8 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
        );
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 ref={textRef} style={{ fontSize: '3rem' }}>{message}</h1>
    </div>
  );
}