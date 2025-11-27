"use client"

import React from 'react'
import { FaRocket, FaHeadset } from 'react-icons/fa'

const Hero: React.FC = () => {
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('Contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 py-32">
        {/* Centered Main Heading - Moved Lower */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
            <span className="text-white block">
              Empowering Business
            </span>
            <span className="text-white block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 sm:mt-3">
              with Intelligent Automation
            </span>
          </h1>
        </div>

        {/* Compact Description - Mobile Optimized */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Transform your business with cutting-edge AI solutions. We empower SMEs, educational institutions, and organizations to achieve unprecedented growth.
        </p>

        {/* Compelling Value Proposition - Made 50% Smaller */}
        <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-3 sm:p-4">
            <p className="text-white/80 text-xs sm:text-sm font-medium italic">
              &ldquo;Stop wasting time on manual tasks. Let our AI agents handle the work while you focus on growing your business.&rdquo;
            </p>
          </div>
        </div>

        {/* Compact Animated Divider - Mobile Optimized */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-blue-400 animate-pulse" />
          <div className="mx-2 sm:mx-3 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent via-blue-400 to-purple-400 animate-pulse" />
        </div>

        {/* Primary CTA Button - Made 80% Smaller */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mb-6 sm:mb-8">
          <button 
            onClick={handleContactClick}
            className="group relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 inline-flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center text-sm"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaRocket className="text-white group-hover:scale-110 transition-transform text-sm" />
            <span>Get Your Free AI Consultation</span>
          </button>
          
          <button 
            onClick={handleContactClick}
            className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 hover:border-white/50 text-white font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/15 inline-flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center text-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
            <FaHeadset className="text-blue-300 group-hover:scale-110 transition-transform text-sm" />
            <span>Inquire About Artificial Intelligence</span>
          </button>
        </div>

        {/* Compact Stats Grid - Made 50% Smaller */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto mb-8 sm:mb-12">
          {[
            { number: "10+", label: "AI Agents", color: "purple" },
            { number: "Many", label: "Happy Clients", color: "blue" },
            { number: "100.1%", label: "Satisfaction", color: "purple" },
            { number: "24/7", label: "Software Support", color: "blue" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center p-2 sm:p-3 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Color accent bar */}
              <div 
                className={`absolute top-0 left-0 w-full h-0.5 ${
                  stat.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
              />
              
              <div 
                className={`text-sm sm:text-lg font-bold text-white mb-0.5 group-hover:scale-105 transition-transform ${
                  stat.color === 'purple' ? 'group-hover:text-purple-200' : 'group-hover:text-blue-200'
                }`}
              >
                {stat.number}
              </div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Made Smaller */}
        <div className="max-w-md mx-auto mb-4 sm:mb-6">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-white/60">
            <div className="text-center">
              <div className="text-xs font-semibold">🚀 Fast Deployment</div>
              <div className="text-xs">2-4 Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold">💼 Proven Results</div>
              <div className="text-xs">ROI Focused</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold">🛡️ Data Secure</div>
              <div className="text-xs">Enterprise Grade</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Moved below stats */}
        <div className="relative mt-6 sm:mt-8">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/50 text-xs font-light tracking-widest uppercase animate-pulse">
              Scroll to Explore
            </span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center relative group hover:border-purple-400 transition-colors duration-300">
              <div className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles - Mobile Optimized */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero