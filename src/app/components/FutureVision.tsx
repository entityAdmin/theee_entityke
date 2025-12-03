"use client"

import React from 'react'

const FutureVision: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              {/* Subtitle */}
              <div>
                <p className="text-blue-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
                  Your Business Evolution
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Your Future, Our Entity
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                Your business success future will be shaped by the aid of our technology. We are not just providing solutions—we are enabling your organization to reach unprecedented heights through intelligent automation and AI-driven insights.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  {
                    title: "Accelerate Growth",
                    description: "Scale your operations without proportional cost increases"
                  },
                  {
                    title: "Drive Innovation",
                    description: "Stay ahead of competition with cutting-edge AI solutions"
                  },
                  {
                    title: "Maximize Efficiency",
                    description: "Automate workflows and reclaim valuable time for strategy"
                  }
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                      <p className="text-white/70 text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105">
                  <span>Explore Your Future</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="order-1 lg:order-2 relative h-64 md:h-80 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            
            {/* Animated Cards Stack */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Back Card */}
              <div className="absolute w-72 h-40 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transform -rotate-6 -translate-y-4 shadow-xl">
                <div className="h-3 w-20 bg-purple-500/30 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                </div>
              </div>

              {/* Middle Card */}
              <div className="absolute w-72 h-40 bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-xl p-6 transform rotate-3 translate-y-2 shadow-xl">
                <div className="h-3 w-20 bg-blue-400 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Front Card - Highlighted */}
              <div className="absolute w-72 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/20 backdrop-blur-lg border border-blue-400/50 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-3 w-20 bg-blue-400 rounded"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    AI
                  </div>
                </div>
                <p className="text-white text-sm font-semibold mb-3">Future-Ready Technology</p>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/30 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-3 gap-4 md:gap-6">
          {[
            { number: "500%", label: "Avg. ROI Increase" },
            { number: "50+", label: "Success Stories" },
            { number: "99.9%", label: "System Uptime" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FutureVision
