"use client";

import { useEffect, useState } from "react";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/NavBar";
import ScrollBar from "./components/ScrollBar";
import LoadingScreen from "./components/loadingscreen";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="relative text-black overflow-x-hidden">
        {/* Loading Screen */}
        {isLoading && <LoadingScreen />}

        {/* Background */}
        <DynamicBackground />

        {/* Navbar - Hidden during loading using CSS */}
        <div className={`transition-opacity duration-600 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
        </div>

        {/* Scroll Progress Indicator */}
        <div className={`transition-opacity duration-600 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <ScrollBar />
        </div>

        {/* Main Content */}
        <main className={`relative z-10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </main>
      </body>
    </html>
  );
}