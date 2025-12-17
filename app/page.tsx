"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function testConnection() {
      try {
        const response = await fetch("http://0.0.0.0:8000/api/hello");
        const data = await response.json();
        console.log("Python Backend says:", data.message);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    }
    testConnection();
  }, []);

  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Frontend & Backend Connected</h1>
      <p>Check your browser console (F12) to see the message from Python.</p>
    </main>
  );
}
