"use client";
import { useState } from "react";
import Image from "next/image";

interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: string;
  problem: string;
  solution: string;
  image?: string;
}

interface Industry {
  name: string;
  description: string;
  tagline: string;
  solution: string;
  problem: string;
  ourSolution: string;
  image: string;
  comingSoon?: boolean;
}

const solutions: Solution[] = [
  {
    title: "Software Development",
    description: "Custom applications tailored to your business needs, scalable and secure",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    icon: "💻",
    problem: "Businesses struggle with inefficient manual processes and lack of integrated systems that hinder growth and productivity.",
    solution: "We build custom software solutions that automate workflows, integrate systems, and provide real-time insights for informed decision-making."
  },
  {
    title: "AI Solutions",
    description: "From chatbots to predictive analytics – intelligent solutions that give you a competitive edge",
    features: ["AI Chatbots", "Predictive Analytics", "Machine Learning", "Intelligent Automation"],
    icon: "🤖",
    problem: "Organizations miss opportunities by not leveraging data and AI to optimize operations and customer experiences.",
    solution: "Our AI solutions transform raw data into actionable intelligence, automating complex tasks and providing predictive insights."
  },
  {
    title: "Business Automation",
    description: "Automating repetitive workflows to save time and reduce operational costs",
    features: ["Workflow Automation", "Process Optimization", "Cost Reduction", "Efficiency Boost"],
    icon: "⚡",
    problem: "Manual, repetitive tasks consume valuable time and resources while increasing error rates.",
    solution: "We identify automation opportunities and implement solutions that free up your team to focus on strategic initiatives."
  }
];

const industries: Industry[] = [
  {
    name: "Agriculture",
    description: "Empowering farmers with data-driven insights for better yields",
    tagline: "Grow what counts. Harvest prosperity.",
    solution: "Mavuno Insights",
    problem: "Farmers lack access to real-time data for optimal planting, harvesting, and resource allocation decisions.",
    ourSolution: "Mavuno Insights uses satellite data, weather patterns, and soil analysis to provide actionable agricultural intelligence.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/maize.jpg"
  },
  {
    name: "Retail",
    description: "Transform your retail operations with intelligent solutions",
    tagline: "Sell smarter. Grow faster.",
    solution: "Mavuno Retail",
    problem: "Retailers struggle with inventory management, customer insights, and personalized marketing at scale.",
    ourSolution: "Mavuno Retail provides real-time inventory tracking, customer behavior analytics, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    comingSoon: true
  },
  {
    name: "Education",
    description: "Revolutionize learning institutions with cutting-edge technology",
    tagline: "Educate efficiently. Inspire innovation.",
    solution: "Mavuno Edu",
    problem: "Educational institutions face challenges in student engagement, administrative efficiency, and personalized learning.",
    ourSolution: "Mavuno Edu creates digital learning environments that enhance student engagement and streamline administrative processes.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
    comingSoon: true
  },
  {
    name: "Healthcare",
    description: "Enhance patient care and optimize medical operations",
    tagline: "Care better. Heal faster.",
    solution: "Mavuno Health",
    problem: "Healthcare providers need better tools for patient management, data security, and operational efficiency.",
    ourSolution: "Mavuno Health improves patient care coordination while ensuring data security and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    comingSoon: true
  }
];

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <section className="min-h-screen w-full py-20 px-4 relative overflow-hidden" id="solutions">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our Solutions
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-blue-400"></div>
            <div className="mx-4 flex gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-blue-400"></div>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We believe in identifying real problems and creating practical solutions that drive meaningful impact for your business.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="border border-blue-400/30 rounded-3xl p-8 mb-16 backdrop-blur-lg bg-white/5">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p className="text-white text-lg leading-relaxed mb-6">
              Thee Entity is a Kenyan-born tech startup dedicated to building unique AI-powered solutions and software that help businesses grow.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Our mission is to bridge the automation gap for SMEs and institutions by offering tools that boost efficiency, cut costs, and open new opportunities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "AI-Powered Innovation",
                "Customer-Centric Approach", 
                "Scalable Solutions",
                "Continuous Support",
                "Cost-Effective Technology",
                "Local Expertise, Global Standards"
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-white text-sm font-medium leading-tight">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="border border-blue-400/30 rounded-2xl p-6 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {solution.title}
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>
              <div className="space-y-2 mb-4">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80 text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="text-blue-300 text-sm font-semibold hover:text-blue-200 transition-colors inline-flex items-center gap-1">
                Learn more <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="border border-blue-400/30 rounded-3xl p-8 backdrop-blur-lg bg-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-white/80 text-lg">
              We understand that every industry has unique challenges. Here&apos;s how we&apos;re making a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Industry Selector */}
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative ${
                    selectedIndustry.name === industry.name
                      ? "border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20"
                      : "border-white/20 hover:border-blue-400/40 hover:bg-blue-400/5"
                  }`}
                >
                  {industry.comingSoon && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      SOON
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {industry.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Industry Details */}
            <div className="border border-blue-400/30 rounded-2xl p-6 bg-white/5">
              <div className="mb-6">
                {selectedIndustry.comingSoon ? (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl mb-4 border border-blue-400/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Banger Project Coming!</h3>
                      <p className="text-blue-300 text-lg">Give us about a week</p>
                    </div>
                  </div>
                ) : (
                  <Image 
                    src={selectedIndustry.image} 
                    alt={selectedIndustry.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl mb-4 border border-blue-400/20"
                  />
                )}
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {selectedIndustry.name}
                </h3>
                <p className="text-blue-300 text-lg italic text-center mb-4">
                  {selectedIndustry.tagline}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20">
                  <h4 className="text-blue-300 font-bold mb-2 text-sm uppercase tracking-wider">The Problem</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {selectedIndustry.problem}
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20">
                  <h4 className="text-blue-300 font-bold mb-2 text-sm uppercase tracking-wider">Our Solution</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {selectedIndustry.ourSolution}
                  </p>
                </div>
                
                <div className="text-center pt-4">
                  <div className="inline-block bg-blue-400/10 border border-blue-400/30 rounded-lg px-4 py-2 mb-4">
                    <span className="text-blue-300 font-semibold">
                      {selectedIndustry.solution}
                    </span>
                  </div>
                  {selectedIndustry.comingSoon ? (
                    <button className="w-full bg-blue-500/20 text-blue-300 font-bold py-3 rounded-xl border border-blue-400/30 cursor-not-allowed opacity-70">
                      Coming Soon - Stay Tuned!
                    </button>
                  ) : (
                    <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform duration-300 border border-white hover:border-blue-400">
                      Learn More About {selectedIndustry.solution}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="border border-blue-400/30 rounded-3xl p-8 backdrop-blur-lg bg-white/5">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to solve your business challenges?
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Let&apos;s identify your specific problems and build the perfect solution together.
            </p>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform duration-300 border border-white hover:border-blue-400">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
          <div className="border border-blue-400/30 rounded-3xl p-6 backdrop-blur-xl bg-gray-900/95 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  {selectedSolution.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedSolution.title}</h3>
                  <p className="text-white/70">{selectedSolution.description}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSolution(null)}
                className="text-white/60 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20">
                  <h4 className="text-blue-300 font-bold mb-3 text-sm uppercase tracking-wider">The Challenge</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {selectedSolution.problem}
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20">
                  <h4 className="text-blue-300 font-bold mb-3 text-sm uppercase tracking-wider">Our Approach</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {selectedSolution.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20">
                <h4 className="text-blue-300 font-bold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                <div className="grid gap-2">
                  {selectedSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 flex-1 border border-white hover:border-blue-400">
                  Get This Solution
                </button>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex-1 border border-white/20 hover:border-blue-400/40"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-float"
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
  );
}