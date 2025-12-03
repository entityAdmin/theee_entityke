"use client";
import Link from "next/link";

interface CoFounder {
  name: string;
  role: string;
  image: string;
  portfolio?: string;
}

const coFounders: CoFounder[] = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Co-Founder",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg",
    portfolio: "https://collinslagat1901.github.io/Collins-Lagat/"
  },
  {
    name: "Fatime Hashim Machira",
    role: "Co-Founder",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg",
    portfolio: "https://kareithi.vercel.app/"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Leadership Team</h2>
          <p className="text-white/70 text-lg">Seasoned professionals with deep expertise in technology and strategy</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
          {coFounders.map((cf) => (
            <div
              key={cf.name}
              className="group flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/20 mb-4 group-hover:scale-110 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cf.image} alt={cf.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">{cf.name}</h3>
              <p className="text-purple-300 text-sm font-medium mb-4">{cf.role}</p>

              {cf.portfolio && (
                <a
                  href={cf.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  View Profile →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
