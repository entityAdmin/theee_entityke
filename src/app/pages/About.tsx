"use client";
import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  quote: string;
  image: string;
  portfolio: string;
  portfolioTarget?: string;
}

interface Service {
  title: string;
  description: string;
  details: string;
}

const team: TeamMember[] = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Co-founder",
    description: "Collins is the driving force and leader of Thee Entity. A visionary idealist with a strong background in backend development and DevOps, he brings both technical expertise and strategic leadership to the team. As a co-founder, he is passionate about creating practical, scalable solutions that bridge the gap between technology and real business needs, empowering enterprises to become globally competitive.",
    quote: "I believe that innovation should be accessible to everyone, not just large enterprises. Our mission at Thee Entity is to level the playing field.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg",
    portfolio: "#"
  },
  {
    name: "Fatime Hashim Machira",
    role: "Co-Founder",
    description: "As a frontend developer and UI/UX designer, Fatime is the creative force behind Thee Entity's user interfaces, ensuring they are not only beautiful but also intuitive and user-friendly. With her added passion for cybersecurity, she helps architect systems that are both engaging and secure. Her vision is to create digital experiences that don't just work, but delight and protect the users who depend on them.",
    quote: "I believe in building technology that is both beautiful and secure. We are not just solving problems — we are designing trustworthy digital experiences.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg",
    portfolio: "#"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder",
    description: "Brian combines his expertise in cybersecurity and backend engineering with a strategic mindset, ensuring that Thee Entity's solutions are not only secure but also market-ready. His deep understanding of digital threats helps build systems that are both safe and resilient. As a communicator, he bridges the gap between our technology and the businesses we serve, helping organizations understand how AI and automation can transform their operations.",
    quote: "In a digital-first world, trust is everything. My goal is to make Thee Entity a brand that businesses can rely on for both security and growth.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg",
    portfolio: "https://kareithi.vercel.app",
    portfolioTarget: "_blank"
  },
  {
    name: "Zeituna Hussein Kura",
    role: "Marketing & Social Media Manager",
    description: "Zeituna leads the charge in telling Thee Entity's story to the world. As the manager of marketing and all social media platforms, she crafts compelling narratives that connect with our audience and showcase the transformative power of our solutions. Her strategic approach ensures that our message reaches the right people, building a strong community around our brand.",
    quote: "Great technology deserves a great story. My mission is to share how Thee Entity is changing the game, one business at a time.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Zeituna.jpg",
    portfolio: "#"
  }
];

const services: Service[] = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    details: "We build scalable, robust applications using modern technologies and best practices to drive your business forward."
  },
  {
    title: "AI Agents Development",
    description: "Intelligent automation for enhanced productivity",
    details: "Create smart AI assistants that automate repetitive tasks, provide insights, and enhance customer experiences."
  },
  {
    title: "Infrastructure Security",
    description: "Protecting your digital assets 24/7",
    details: "Comprehensive security solutions including threat monitoring, vulnerability assessment, and infrastructure hardening."
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile solutions",
    details: "Engaging mobile experiences for iOS and Android that connect you with your customers anywhere, anytime."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock system monitoring and maintenance",
    details: "Proactive monitoring, rapid response to outages, and continuous optimization to keep your systems running smoothly."
  }
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetService = () => {
    setSelectedService(null);
    setTimeout(scrollToContact, 300);
  };

  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Shaping the Future Through AI
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-purple-400"></div>
            <div className="mx-4 flex gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-blue-400"></div>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Kenyan-born startup empowering businesses with intelligent automation and next-gen software solutions.
          </p>
        </div>

        {/* Mission & Vision Tabs */}
        <div className="border border-purple-400/30 rounded-3xl p-6 mb-12 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-lg'
                }`}
              >
                {tab === 'mission' && 'Our Mission'}
                {tab === 'vision' && 'Our Vision'}
                {tab === 'values' && 'Our Values'}
              </button>
            ))}
          </div>

          <div className="min-h-[120px] flex items-center justify-center">
            {activeTab === 'mission' && (
              <p className="text-white text-lg text-center leading-relaxed max-w-2xl">
                To revolutionize how businesses operate by delivering <span className="text-purple-300">affordable, intelligent, and scalable</span> tech solutions.
              </p>
            )}
            
            {activeTab === 'vision' && (
              <p className="text-white text-lg text-center leading-relaxed max-w-2xl">
                To be the leading <span className="text-blue-300">African-born AI and automation partner</span> that transforms local businesses into global leaders.
              </p>
            )}
            
            {activeTab === 'values' && (
              <div className="text-center">
                <p className="text-white text-lg mb-6 leading-relaxed">
                  <span className="text-purple-300">Innovation</span>, <span className="text-blue-300">Integrity</span>, <span className="text-purple-300">Collaboration</span>, <span className="text-blue-300">Impact</span>
                </p>
                <p className="text-white/70 text-sm max-w-xl mx-auto">
                  We think beyond today, build trust, grow with our clients, and measure success by the change we create.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Services Section */}
        <div className="border border-blue-400/30 rounded-3xl p-6 mb-12 backdrop-blur-lg bg-white/5">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="border border-purple-400/20 rounded-2xl p-5 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-purple-300 text-sm font-semibold hover:text-purple-200 transition-colors inline-flex items-center gap-1">
                  Learn more <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="border border-purple-400/30 rounded-3xl p-6 backdrop-blur-lg bg-white/5">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h3>
          <p className="text-white/70 text-center mb-8 max-w-xl mx-auto leading-relaxed">
            Passionate innovators driving the future of business automation
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative mb-4 mx-auto w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-purple-400/30 group-hover:border-purple-400 transition-all duration-500 group-hover:scale-110">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{member.name.split(' ')[0]}</h4>
                <p className="text-purple-300 text-xs mb-2">{member.role.split('|')[0].trim()}</p>
                <button className="text-white/60 text-xs hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
          <div className="border border-purple-400/30 rounded-3xl p-6 backdrop-blur-xl bg-gray-900/95 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Image 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-purple-400"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-purple-300 font-semibold">{selectedMember.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(null)}
                className="text-white/60 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">About</h4>
                <p className="text-white/80 leading-relaxed">{selectedMember.description}</p>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="text-white font-semibold mb-2">Quote</h4>
                <p className="text-white/80 italic">&ldquo;{selectedMember.quote}&rdquo;</p>
              </div>
              
              <div className="flex gap-3 pt-4">
                <a 
                  href={selectedMember.portfolio.startsWith('http') ? selectedMember.portfolio : `https://${selectedMember.portfolio}`}
                  target={selectedMember.portfolioTarget || '_self'}
                  className="bg-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300"
                >
                  View Portfolio
                </a>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="bg-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
          <div className="border border-purple-400/30 rounded-3xl p-6 backdrop-blur-xl bg-gray-900/95 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedService.title}</h3>
                <p className="text-white/70">{selectedService.description}</p>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-white/60 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Service Details</h4>
                <p className="text-white/80 leading-relaxed">{selectedService.details}</p>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={handleGetService}
                  className="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-600 transition-all duration-300 flex-1"
                >
                  Get This Service
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex-1"
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
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;