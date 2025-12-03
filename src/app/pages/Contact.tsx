"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaCalendarAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen w-full py-20 px-4 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let&apos;s Build The Future
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
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ready to revolutionize your business? Let&apos;s create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="border border-purple-400/30 rounded-3xl p-8 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-300" />
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 border border-purple-400/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300 group hover:bg-purple-400/5">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-400/20">
                    <FaEnvelope className="text-purple-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-purple-300 text-lg">info@theeentityke.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 border border-blue-400/20 rounded-2xl hover:border-blue-400/40 transition-all duration-300 group hover:bg-blue-400/5">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-400/20">
                    <FaPhone className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-blue-300 text-lg">+254 708 889016</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 border border-purple-400/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300 group hover:bg-purple-400/5">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-400/20">
                    <FaMapMarkerAlt className="text-purple-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Based In</p>
                    <p className="text-purple-300 text-lg">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="border border-blue-400/30 rounded-3xl p-8 backdrop-blur-lg bg-white/5 text-center hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Start</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Book a free strategy session and let&apos;s map out your digital transformation.
              </p>
              <button className="bg-blue-400/10 hover:bg-blue-400/20 text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 w-full group border border-blue-400/30 hover:border-blue-400/50">
                <div className="flex items-center justify-center gap-3">
                  <FaCalendarAlt className="text-blue-300 text-lg group-hover:scale-110 transition-transform" />
                  <span>Book Discovery Call</span>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border border-purple-400/30 rounded-3xl p-8 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center border border-purple-400/20">
                  <FaPaperPlane className="text-purple-300 text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-white">Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 text-lg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 bg-white/10 border border-purple-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400/40 focus:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 text-lg">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@theeentityke.com"
                      className="w-full px-4 py-4 bg-white/10 border border-blue-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400/40 focus:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and vision..."
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-purple-400/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400/40 focus:bg-white/15 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-400/10 hover:bg-purple-400/20 text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 text-lg group border border-purple-400/30 hover:border-purple-400/50"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Launch Your Project</span>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300 text-purple-300" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="text-center mt-16">
          <div className="border-t border-purple-400/30 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">24h</div>
                <div className="text-white text-sm">Response Time</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-white text-sm">Client Focused</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-white text-sm">Projects Delivered</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-white text-sm">Innovation</div>
              </div>
            </div>
            <p className="text-white text-lg mt-8">
              Let&apos;s build the next big thing together
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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
        {[...Array(6)].map((_, i) => (
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
}