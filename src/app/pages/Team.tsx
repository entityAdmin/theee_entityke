'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  portfolio: string
  portfolioTarget?: string
}

const team: TeamMember[] = [
  {
    name: 'Collins Kipkirui Lagat',
    role: 'Co-Founder, CEO, Lead Strategist',
    description:
      'Founder and head of direction at Thee Entity. Drives vision, strategy and execution across all products and services. Mobile developer, DevOps engineer, and the backbone of the technical and operational ecosystem.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg',
    portfolio: 'https://collinslagat1901.github.io/Collins-Lagat/',
  },
  {
    name: 'Fatime Hashim Machira',
    role: 'Co-Founder',
    description:
      'Co-founder contributing to the foundational structure, organization and evolution of the company. Provides stability, insight and long-term continuity.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg',
    portfolio: '#',
  },
  {
    name: 'Brian Kareithi',
    role: 'Co-Founder',
    description:
      'Part of the original founding trio, supporting core decisions, identity formation and business direction.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg',
    portfolio: 'https://kareithi.vercel.app/',
    portfolioTarget: '_blank',
  },
  {
    name: 'Zeituna Hussein Kura',
    role: 'Marketing & Social Media Manager',
    description:
      'Shapes the public face of Thee Entity. Manages brand presence, social communication, audience engagement and visibility. Ensures the company’s message resonates with the right people.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Zeituna.jpg',
    portfolio: '#',
  },
  {
    name: 'Joseph Gitau',
    role: 'Operations & Technical Specialist',
    description:
      'Handles day-to-day operations and technical implementation. Ensures projects run smoothly, converting concepts into real-world execution. Acts as the bridge between the engineering vision and client-facing deployment.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Joe.png',
    portfolio:
      'https://gitau.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn6AbVhYMVptZjx-kCs5cSxLlrXYLRFhJYVDClbywar9Z9fGSX-d7PmO-_aag_aem_qB8RKAJSdmQ17EPdcx6uvQ',
  },
  {
    name: 'Edison Gatia',
    role: 'Blockchain, Backend & AI Engineer',
    description:
      'Deep technical specialist in blockchain, backend architecture and artificial intelligence. Supports development of scalable AI agents, secure automation systems and enterprise-grade infrastructure.',
    image:
      'https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Edison.png',
    portfolio: '#',
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section
      id="team"
      className="min-h-screen w-full py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors text-sm font-medium"
          >
            <span>←</span> Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Meet The Team
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
            The passionate individuals driving our mission to revolutionize business
            automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="border border-purple-400/30 rounded-3xl p-6 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-4 mx-auto w-24 h-24 rounded-2xl overflow-hidden border-2 border-purple-400/30 group-hover:border-purple-400 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {member.name}
                </h4>
                <p className="text-purple-300 text-sm mb-4">{member.role}</p>
                <button className="text-white/60 text-sm hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                  <h3 className="text-2xl font-bold text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-purple-300 font-semibold">
                    {selectedMember.role}
                  </p>
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
                <p className="text-white/80 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href={selectedMember.portfolio}
                  target={selectedMember.portfolioTarget || '_self'}
                  className={`bg-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300 ${
                    selectedMember.portfolio === '#'
                      ? 'hidden'
                      : ''
                  }`}
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
    </section>
  )
}
