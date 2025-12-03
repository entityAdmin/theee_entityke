"use client"

import React from 'react'

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

      <div className="max-w-5xl mx-auto text-center relative z-10 py-20 md:py-32">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white block">Empowering Business</span>
            <span className="text-white block">with Intelligent Automation</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
          Transform your business with cutting-edge AI solutions. We empower SMEs, educational institutions, and organizations to achieve unprecedented growth.
        </p>

        {/* Quote Box */}
        <div className="max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="bg-blue-500/20 backdrop-blur-lg border border-blue-400/30 rounded-lg p-6 md:p-8">
            <p className="text-white/90 text-base md:text-lg italic font-light leading-relaxed">
              &quot;Stop wasting time on manual tasks. Let our AI agents handle the work while you focus on growing your business.&quot;
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
          <button 
            onClick={handleContactClick}
            className="group relative bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 inline-flex items-center gap-2 overflow-hidden text-base w-full sm:w-auto justify-center"
          >
            <span>✈ Get Free Consultation</span>
          </button>
          
          <button 
            onClick={handleContactClick}
            className="group relative bg-transparent border-2 border-blue-400 text-blue-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-400/10 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-400/20 inline-flex items-center gap-2 overflow-hidden text-base w-full sm:w-auto justify-center"
          >
            <span>⚙ Inquire About AI</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 md:mb-16">
          {[
            { number: "10+", label: "AI SOLUTIONS" },
            { number: "100+", label: "HAPPY CLIENTS" },
            { number: "99.9%", label: "SATISFACTION" },
            { number: "24/7", label: "SUPPORT" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-5 md:p-6 rounded-lg bg-blue-500/15 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-blue-200 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-10 text-white/70">
            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">Fast Deployment</div>
              <div className="text-xs text-white/60">2-4 Weeks</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">Proven Results</div>
              <div className="text-xs text-white/60">ROI Focused</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">Data Secure</div>
              <div className="text-xs text-white/60">Enterprise Grade</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative mt-12 md:mt-16">
          <div className="flex flex-col items-center gap-2">
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