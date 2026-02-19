// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaPlay,
  FaBars,
  FaChevronDown,
  FaCheck,
  FaGithub
} from 'react-icons/fa';
import Footer from '@/components/ui/footer.main';
import Navbar from '@/components/ui/navbar.main';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* ========== NAVBAR ========== */}
      <Navbar />

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-base-100 z-50 pt-20 px-6 lg:hidden">
          <ul className="menu menu-vertical text-2xl font-medium gap-6">
            <li><a onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a onClick={() => scrollToSection('how')}>How it Works</a></li>
            <li><a onClick={() => scrollToSection('templates')}>Templates</a></li>
            <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
            <li><a href="#" className="mt-8">Log in</a></li>
            <li>
              <button
                onClick={() => scrollToSection('get-started')}
                className="btn btn-primary btn-block text-lg"
              >
                Get Started Free
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* HERO */}
      <section className="hero min-h-screen hero-bg relative overflow-hidden" id="hero">
        <div className="hero-content max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-3xl px-5 py-2 shadow text-sm font-medium border border-base-300">
              <span className="text-emerald-500">✦</span>
              <span>New: AI ATS Score Checker</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
              Build <span className="text-primary">ATS-proof</span><br />resumes in minutes
            </h1>

            <p className="text-2xl text-base-content/70 max-w-lg">
              AI-powered resume builder & enhancer. Real-time preview, keyword optimization,
              and stunning templates that get you hired.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('get-started')}
                className="btn btn-primary btn-lg rounded-2xl text-xl px-10 shadow-xl hover:scale-105 transition-transform"
              >
                Start Building Free
              </button>
              <button
                onClick={() => alert('Demo video would play here (YouTube embed in production)')}
                className="btn btn-outline btn-lg rounded-2xl text-xl px-8 flex items-center gap-3"
              >
                <FaPlay /> Watch 1-min demo
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="flex -space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/image-1" alt="" width={32} height={32} className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/image-2" alt="" width={32} height={32} className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/image-3" alt="" width={32} height={32} className="object-cover" />
                </div>
              </div>
              <div>
                <div className="font-semibold">Trusted by 12,450+ job seekers</div>
                <div className="flex text-amber-400">★★★★★ <span className="text-base-content/60 ml-2">4.98 avg</span></div>
              </div>
            </div>

            {/* Trust logos */}
            <div className="flex gap-8 opacity-75">
              <div className="text-2xl font-bold text-base-content/40">Google</div>
              <div className="text-2xl font-bold text-base-content/40">Meta</div>
              <div className="text-2xl font-bold text-base-content/40">Tesla</div>
              <div className="text-2xl font-bold text-base-content/40">Amazon</div>
            </div>
          </div>

          {/* Resume Mock */}
          <div className="relative hidden lg:block">
            <div className="resume-mock bg-white rounded-3xl p-6 shadow-2xl max-w-[380px] mx-auto border border-base-300">
              <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur rounded-full mb-4 flex items-center justify-center text-4xl">👨‍💼</div>
                <h3 className="font-semibold text-2xl">Alex Rivera</h3>
                <p className="text-sm opacity-75">Senior Product Designer • Open to work</p>
              </div>

              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <div className="font-medium text-primary mb-1">EXPERIENCE</div>
                  <div className="flex justify-between text-xs">
                    <div><strong>Product Designer</strong> @ Stripe</div>
                    <div className="text-base-content/60">2023 – Present</div>
                  </div>
                </div>
                <div className="h-px bg-base-300" />
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-base-100 p-4 rounded-2xl">+45% Interview rate after AI enhancement</div>
                  <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl font-medium">ATS Score: 98%</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-3xl px-6 py-3 flex items-center gap-3 text-sm font-medium">
              <span className="text-emerald-500">✓</span>
              AI Enhanced
            </div>
            <div className="absolute -bottom-8 right-12 bg-white shadow-xl rounded-3xl px-5 py-3 text-xs flex items-center gap-2 border border-emerald-200">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              Real-time Preview
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden lg:flex flex-col items-center text-xs opacity-60">
          <div className="mb-2">Scroll to explore</div>
          <FaChevronDown className="animate-bounce" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge badge-primary badge-lg mb-4">POWERFUL FEATURES</div>
            <h2 className="text-5xl font-bold tracking-tight">Everything you need to stand out</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-primary/30">
              <div className="card-body">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mb-6">🧠</div>
                <h3 className="card-title text-2xl">AI Resume Enhancer</h3>
                <p className="text-base-content/70">Upload your old resume or start fresh. Our AI rewrites bullet points, adds keywords, and makes you sound like a pro.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> Smart bullet rewrites</li>
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> Job-specific tailoring</li>
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> Grammar & cliché fixer</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-primary/30">
              <div className="card-body">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-6">📊</div>
                <h3 className="card-title text-2xl">ATS Optimization</h3>
                <p className="text-base-content/70">Built-in ATS scanner with keyword matching. Get an instant score and suggestions to beat applicant tracking systems.</p>
                <div className="mt-8 bg-base-200 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-emerald-600">98<span className="text-base font-normal">/100</span></div>
                  <div className="text-xs tracking-widest mt-1">AVERAGE ATS SCORE</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-primary/30">
              <div className="card-body">
                <div className="w-14 h-14 bg-violet-500/10 text-violet-500 rounded-2xl flex items-center justify-center text-3xl mb-6">👀</div>
                <h3 className="card-title text-2xl">Live Preview</h3>
                <p className="text-base-content/70">See exactly how recruiters will view your resume. 20+ beautiful, recruiter-approved templates.</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="bg-white border rounded-xl h-20" />
                  <div className="bg-white border-2 border-primary rounded-xl h-20 scale-110 shadow" />
                  <div className="bg-white border rounded-xl h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">From zero to hired in 4 steps</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Upload or Create", desc: "Drop your existing resume or start from a blank canvas" },
              { num: "2", title: "AI Works Its Magic", desc: "Instant suggestions, keyword optimization & content rewrite" },
              { num: "3", title: "Customize & Preview", desc: "Drag-drop sections, change colors, live preview" },
              { num: "4", title: "Download PDF", desc: "Export ATS-friendly PDF ready to send" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center text-5xl font-bold mb-6 shadow-inner">{step.num}</div>
                <h4 className="font-semibold text-xl mb-3">{step.title}</h4>
                <p className="text-base-content/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase tracking-widest text-sm font-medium text-primary">CHOOSE YOUR STYLE</div>
              <h2 className="text-5xl font-bold tracking-tighter">Stunning templates</h2>
            </div>
            <a href="#" className="btn btn-link text-lg">Browse all 20+ templates →</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1015, 201, 237, 1016].map((id, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={`https://picsum.photos/id/${id}/600/800`}
                  alt="Template"
                  width={300}
                  height={420}
                  className="w-full aspect-[9/13] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white font-medium">
                    {["Modern Classic", "Creative Bold", "Tech Minimal", "Executive"][i]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">Real people, real results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Product Manager @ Vercel", text: "Got 3 interviews in the first week after using ResumEnhanc. The AI suggestions were spot on!" },
              { name: "Omar Farooq", role: "Software Engineer", text: "The ATS score went from 62 to 97. I finally understand what recruiters are looking for." },
              { name: "Priya Sharma", role: "Marketing Lead", text: "Beautiful templates + AI = I actually enjoy making my resume now." }
            ].map((t, i) => (
              <div key={i} className="card bg-base-100 p-8">
                <div className="flex gap-1 text-amber-400 mb-6">★★★★★</div>
                <p className="italic">"{t.text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <Image src={`https://i.pravatar.cc/64?u=${i + 4}`} alt="" width={48} height={48} className="w-12 h-12 rounded-2xl" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-base-content/60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-base-content/70">Start free. Upgrade when you're ready to download unlimited PDFs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="card bg-white border-2 border-base-300">
              <div className="card-body">
                <div className="text-3xl font-bold">Free</div>
                <div className="text-6xl font-bold my-6">$0<span className="text-2xl font-normal text-base-content/60">/forever</span></div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> Unlimited AI suggestions</li>
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> Real-time preview</li>
                  <li className="flex items-center gap-3"><FaCheck className="text-emerald-500" /> 3 templates</li>
                  <li className="flex items-center gap-3 text-base-content/40"><FaCheck /> PDF export (watermarked)</li>
                </ul>
                <button className="btn btn-outline w-full mt-10">Start for free</button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="card bg-primary text-white border-2 border-primary relative">
              <div className="absolute -top-4 right-6 bg-white text-primary text-xs font-bold px-6 py-2 rounded-3xl shadow">MOST POPULAR</div>
              <div className="card-body">
                <div className="text-3xl font-bold">Pro</div>
                <div className="text-6xl font-bold my-6">$9<span className="text-2xl font-normal opacity-75">/month</span></div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><FaCheck /> Everything in Free</li>
                  <li className="flex items-center gap-3"><FaCheck /> Unlimited PDF exports</li>
                  <li className="flex items-center gap-3"><FaCheck /> All 20+ premium templates</li>
                  <li className="flex items-center gap-3"><FaCheck /> Advanced AI tailoring</li>
                  <li className="flex items-center gap-3"><FaCheck /> Cover letter generator</li>
                  <li className="flex items-center gap-3"><FaCheck /> Priority support</li>
                </ul>
                <button
                  onClick={() => alert('Checkout flow would open here')}
                  className="btn btn-secondary w-full mt-10 text-lg font-semibold"
                >
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="get-started" className="py-28 bg-gradient-to-br from-primary to-violet-600 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter leading-none">Ready to land your next role?</h2>
          <p className="text-2xl mt-8 opacity-90">Join thousands who already boosted their interview rate with ResumEnhanc</p>

          <div className="mt-12">
            <button
              onClick={() => alert('Redirecting to builder...')}
              className="btn btn-lg btn-secondary text-primary text-2xl px-16 py-8 rounded-3xl font-semibold shadow-2xl"
            >
              Build My Resume Now — It's Free
            </button>
          </div>

          <p className="mt-8 text-sm opacity-75">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}