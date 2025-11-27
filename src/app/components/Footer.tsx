import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 px-4 relative bg-black/40 backdrop-blur-2xl border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Footer Content - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TE</span>
              </div>
              <h3 className="text-lg font-bold text-white">THEE ENTITY</h3>
            </div>
            <p className="text-white text-sm leading-relaxed max-w-md">
              Shaping the future through AI and automation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-3">
              <a 
                href="https://github.com/Thee-Entity" 
                className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-sm" />
              </a>
              <a 
                href="https://linkedin.com/company/thee-entity" 
                className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-sm" />
              </a>
              <a 
                href="https://twitter.com/theeentity" 
                className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white hover:text-white font-medium text-sm hover:pl-1 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/10 border border-white/20 rounded flex items-center justify-center">
                  <FaEnvelope className="text-white text-xs" />
                </div>
                <div>
                  <p className="text-white text-sm">info@theeentity.co.ke</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/10 border border-white/20 rounded flex items-center justify-center">
                  <FaPhone className="text-white text-xs" />
                </div>
                <div>
                  <p className="text-white text-sm">+254 708 889016</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left">
              <p className="text-white text-sm">
                &copy; {currentYear} Thee Entity. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#privacy" className="text-white hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#terms" className="text-white hover:text-white transition-colors text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer