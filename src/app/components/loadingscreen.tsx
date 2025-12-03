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
    <div className="fixed inset-0 z-50 bg-slate-900">
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Animated Spinner - Matching Your Design */}
        <div className="relative w-24 h-24">
          {/* Outer circle - white stroke */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Inner rotating circle - blue gradient stroke with animation */}
          <svg className="absolute inset-0 w-full h-full animate-spin" viewBox="0 0 100 100" style={{ animationDuration: '2s' }}>
            <defs>
              <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 1)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#spinnerGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="70 200"
              strokeDashoffset="0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;