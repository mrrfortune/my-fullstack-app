"use client";
import React, { useState } from 'react';
import { useRef } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiProblemSolver } from './components/AiProblemSolver';
import { Footer } from './components/Footer';



export default function Home() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("System Ready");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);
    setStatus("Processing Query...");
    
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      if (res.ok) {
        setAiResponse(data.reply);
        setStatus("Intelligence Received");
      } else {
        setStatus("System Error");
      }
    } catch (err) {
      setStatus("Connection Offline");
    } finally {
      setLoading(false);
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aiSolverRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
  home: heroRef,
  services: servicesRef,
  'ai-solver': aiSolverRef,
};
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAiSolver = () => {
    if (aiSolverRef.current) {
      aiSolverRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   
    <div>
<Hero onGetStarted={scrollToAiSolver}/>
       


      
      </div>

  );
}