"use client";
import ProjectCarousel from "@/app/components/ProjectCarousel";
import BookingForm from "@/app/components/BookingForm";

interface Project {
  id: string;
  title: string;
  industry: string;
  users?: string;
  description: string;
  impact: string;
  images: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "quickprinting",
    title: "QuickPrinting",
    industry: "ICT / Print-shop services",
    users: "~50+ cyber/print shops",
    description:
      "Digital workflow allowing customers to upload documents via QR/link, with operator dashboard and AI tools.",
    impact: "Faster turnaround, reduced errors, professional experience",
    images: [
      "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/quickprint.png"
    ],
    link: "https://www.quickprint.top/"
  },
  {
    id: "mavuno-insight",
    title: "Mavuno Insight",
    industry: "Agriculture / Agritech",
          description:
            "Combines real-time market intelligence, crop-price trends, and a marketplace connecting farmers directly with verified buyers.",
          impact:
            "Informed planting decisions, fair selling prices, predictable income",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Mavuno%20Landing%20UI.png",
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Mavuno%20UI.png"
          ],
          link: "https://mavuno-turudi-mashambani.vercel.app/"
        },
        {
          id: "mavuno-marine",
          title: "Mavuno Insight Marine",
          industry: "Fisheries / Marine Market",
          users: "Coastal fishers & buyers",
          description:
            "Web + SMS platform connecting fishers directly to buyers, with real-time seafood price data and secure payments.",
          impact: "Fair earnings, reliable buyer access, reduced exploitation",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Mavuno%20Marine%20UI.png"
          ],
          link: "https://mavuno-insight-marine.vercel.app/"
        },
        {
          id: "stockflow",
          title: "StockFlow",
          industry: "Retail / Small Business",
          users: "20–100 small shops in pilot regions",
          description:
            "Mobile-friendly inventory & sales platform with real-time stock tracking and sales analytics.",
          impact: "Smarter restocking, reduced losses, better profitability",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/StockFlow%20Landing%20UI.png",
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/StockFlow%20Dashboard%20UI.png",
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/StockFlow%20UI.png"
          ]
        },
        {
          id: "mamacare",
          title: "MamaCare",
          industry: "Health / Public Service",
          users: "~1,000+ households (pilot)",
          description:
            "Household registration & maternal/child health tracking with automated reminders and reports.",
          impact: "Better health outcomes, timely interventions, organized data",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Mama%20Care%20UI.png",
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Mamacare%20UI.png"
          ]
        },
        {
          id: "codegenie",
          title: "CodeGenie AI Plugin",
          industry: "Software Development / AI Tools",
          users: "40+ active VS Code installs",
          description:
            "VS Code plugin that generates code, scaffolding and provides in-editor guidance to speed development.",
          impact: "Faster development, higher productivity",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/CodeGenie%20Landing%20UI.png",
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Codegenie%20UI.png"
          ]
        },
        {
          id: "iphone-store",
          title: "iPhone Store — Ecommerce Platform",
          industry: "Retail / Online Store",
          users: "Small electronics retailers",
          description:
            "Full ecommerce platform with product browsing, filtering, cart and checkout for shops.",
          impact: "Smooth shopping experience, increased sales",
          images: [
            "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photo/Iphone%20Store%20UI.png"
          ],
          link: "https://shopping-website-inky-seven.vercel.app/"
        }
      ];

      export default function Solutions() {
        // Scroll helper for booking button
        const scrollToBooking = () => {
          const el = document.getElementById('booking-form');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        return (
          <section className="w-full py-20 px-4 relative overflow-hidden" id="solutions">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  Industry-Specific Solutions
                </h1>
                <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Practical, field-proven projects built for local industries — designed to deliver measurable impact.
                </p>
              </div>

              <div className="grid gap-8">
                {projects.map((p) => (
                  <article
                    key={p.id}
                    className="grid lg:grid-cols-3 gap-6 items-start bg-white/5 border border-white/10 rounded-2xl p-6 transition-transform hover:scale-[1.01] hover:shadow-2xl"
                    aria-labelledby={`${p.id}-title`}
                  >
                    <div className="lg:col-span-1">
                      <div className="rounded-xl overflow-hidden border border-white/5">
                        <ProjectCarousel images={p.images} alt={p.title} />
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 id={`${p.id}-title`} className="text-2xl font-semibold text-white mb-2">
                        {p.title}
                      </h3>
                      <div className="text-sm text-white/60 mb-3">{p.industry} • {p.users ?? "—"}</div>
                      <p className="text-white/90 mb-4">{p.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm text-purple-300 font-semibold mb-1">Key impact / value</h4>
                        <p className="text-white/80">{p.impact}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                          >
                            Learn More
                          </a>
                        )}

                        <button
                          onClick={scrollToBooking}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition-all"
                        >
                          Book Discovery Call
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Booking area and final CTA */}
              <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
                <div id="booking-form" className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl text-white font-semibold mb-3">Book a Discovery Call</h3>
                  <p className="text-white/80 mb-4">
                    Speak with our product team — we will review your needs and map out a tailored solution.
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M7 10h5v5H7z" fill="currentColor" opacity="0.08" />
                      <path d="M7 3v2M17 3v2M4 11h16M5 21h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold">Quick, Flexible Scheduling</div>
                      <div className="text-white/70 text-sm">Pick a time that works for you — we will handle the rest.</div>
                    </div>
                  </div>
                  <div>
                    <BookingForm />
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                  <h3 className="text-2xl text-white font-semibold mb-3">Why work with Thee Entity?</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Field-proven projects tailored for local industries.</li>
                    <li>• Data-driven solutions with measurable impact.</li>
                    <li>• Rapid prototyping and practical deployment.</li>
                  </ul>

                  <p className="mt-6 text-white/80">We also build custom tools, AI automations, and AI agents tailored to your business — whatever your workflow, we can make it smarter and easier.</p>
                </div>
              </div>
            </div>
          </section>
        );
      }
