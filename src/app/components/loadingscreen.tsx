"use client";

import { useEffect, useState } from 'react';
import DynamicBackground from './DynamicBackground';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50">
      <DynamicBackground />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* SVG Gradient Spinner */}
        <div className="flex justify-center items-center">
          <svg className="w-20 h-20 animate-spin" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="blueWhiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0962f1ff" />
                <stop offset="50%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#blueWhiteGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100 200"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;