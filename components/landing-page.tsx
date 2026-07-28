"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, Check, ChevronDown, Menu } from "lucide-react";
import { useAxisformMotion } from "@/components/use-axisform-motion";
import pastorGil from "@/pastor_gil.jpeg";

export function LandingPage() {
  useAxisformMotion();

  return (
    <>
      <div className="noise" aria-hidden="true"></div>
        <div className="grid-veil" aria-hidden="true"></div>
        <div className="page-rail" aria-hidden="true">Launch OS / Axisform</div>
      
        <div id="ax-loader" className="ax-loader" aria-hidden="true">
          <div className="ax-loader__inner">
            <div className="ax-loader__brand">
              <span>Pastor Gil</span><sup>®</sup><span className="ax-dot"></span>
            </div>
            <div className="ax-loader__track">
              <div className="ax-loader__bar"></div>
            </div>
            <div className="ax-loader__meta">
              <span className="ax-loader__pct">000</span>
              <span>Launch OS / Axisform</span>
            </div>
          </div>
        </div>
      
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
          <a href="#home" className="text-lg font-semibold tracking-[-0.055em] text-[#f3f0e8] md:text-xl">
            Axisform<sup className="ml-0.5 text-[10px]">®</sup>
          </a>
      
          <nav className="hidden items-center gap-11 text-xs font-bold text-[#f3f0e8]/82 md:flex">
            <a href="#work" className="nav-link"><span className="mr-5 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f] align-middle"></span>Systems</a>
            <a href="#studio" className="nav-link">Signals</a>
            <a href="#pricing" className="nav-link">Engage</a>
            <a href="#contact" className="nav-link">Brief</a>
          </nav>
      
          <button className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden" aria-label="Open menu">
            <Menu className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>
      
        <main id="home" className="relative z-10 overflow-hidden">
      
          
          <section className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="hero-copy relative z-20 max-w-[360px]">
              <p className="section-label mb-10">Axisform® Studio</p>
              <p className="max-w-[340px] text-[21px] font-medium leading-[1.45] tracking-[-0.045em] text-[#f3f0e8]/76 md:text-[25px]">
                <span className="text-[#f3f0e8]">Axisform®</span> builds launch operating systems for founders, product teams, and cultural projects that need a sharper public signal before the next move.
              </p>
      
              <a href="#work" className="magnetic-button mt-14 inline-flex items-center gap-5 rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f3f0e8]">
                View Selected Work
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a1f] text-[#060706]">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </a>
            </div>
      
            <div className="hero-stack absolute left-1/2 top-[48%] z-10 h-[430px] w-[310px] -translate-x-1/2 -translate-y-1/2 md:h-[560px] md:w-[430px] lg:h-[620px] lg:w-[480px]">
              <div className="hero-card absolute inset-0 -translate-x-20 translate-y-12 -rotate-[17deg] rounded-[20px] bg-[#151713]">
                <div className="h-full w-full rounded-[20px] bg-gradient-to-br from-[#ff5a1f]/30 via-transparent to-black"></div>
              </div>
      
              <div className="hero-card absolute inset-0 translate-x-20 translate-y-10 rotate-[13deg] rounded-[20px] bg-[#d8cbb5]">
                <div className="absolute right-10 top-24 font-serif text-[110px] text-[#ff5a1f]/80">A</div>
                <div className="absolute bottom-12 left-10 h-32 w-32 rounded-full border border-black/20"></div>
              </div>
      
              <div className="hero-card absolute inset-0 translate-x-32 translate-y-20 rotate-[18deg] rounded-[20px] bg-[#080808]">
                <div className="h-full w-full rounded-[20px] bg-[linear-gradient(135deg,rgba(255,255,255,.16),transparent_45%)]"></div>
              </div>
      
              <div className="hero-card absolute inset-0 rotate-[4deg] overflow-hidden rounded-[20px] bg-[#201714]">
                <Image src={pastorGil} alt="Pastor Gil speaking on stage" className="h-full w-full object-cover saturate-125" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" preload />
                <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-orange-950/10"></div>
                <div className="absolute inset-0 bg-[#ff5a1f]/10 mix-blend-overlay"></div>
              </div>
      
              <button className="hero-cta absolute right-[-22px] top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-2xl backdrop-blur transition duration-300 hover:scale-110 hover:bg-[#ff5a1f]" aria-label="Explore">
                <ArrowRight className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
      
            <h1 className="hero-wordmark wordmark pointer-events-none absolute -bottom-5 left-2 z-0 select-none text-[23vw] font-black leading-none text-[#e8e0d4] md:-bottom-12 lg:left-6 lg:text-[20vw]">
              Axisform
            </h1>
      
            <div className="hero-meta glass absolute bottom-10 right-5 z-20 hidden w-[270px] rounded-[24px] p-6 md:right-8 lg:block">
              <div className="mb-8 text-2xl text-[#ff5a1f]">✳</div>
              <p className="text-[19px] leading-[1.25] tracking-[-0.04em]">
                Branding, digital experiences, and motion systems.
              </p>
              <div className="mt-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/45">
                <span>Global Studio</span>
                <span className="h-1 w-1 rounded-full bg-[#ff5a1f]"></span>
                <span>Field 04 / 2026</span>
              </div>
            </div>
          </section>
      
          
          <section id="studio" className="brand-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <h2 className="brand-drift wordmark pointer-events-none absolute -top-16 left-0 text-[6rem] font-black leading-none text-[#f3f0e8]/10 sm:text-[9rem] md:text-[13rem] lg:text-[18rem]">
              Axisform®
            </h2>
      
            <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="section-label">Studio Method</p>
                <p data-reveal="" className="mt-8 max-w-sm text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  The studio works in loops: read the field, reduce the noise, ship the system, then sharpen what survives contact.
                </p>
              </div>
      
              <div className="brand-words grid gap-6 md:col-span-7 md:col-start-6">
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">observe</p>
                <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">compress</p>
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">prototype.</p>
                <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">publish</p>
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">repeat</p>
              </div>
            </div>
          </section>
      
          
          <section className="services-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="absolute left-1/2 top-0 h-[360px] w-[78%] -translate-x-1/2 overflow-hidden rounded-b-[32px] border-x border-b border-[#f3f0e8]/10 md:h-[480px] lg:h-[620px]">
              <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b2725ca-5b05-49fe-b2ff-9de382bf26ef_1600w.webp" alt="Green atmospheric strip" className="strip-image h-full w-full object-cover object-center opacity-70" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
      
            <div className="grid min-h-screen items-center gap-14 md:grid-cols-12">
              <div data-reveal="" className="md:col-span-3">
                <p className="section-label mb-20">Operating Stack</p>
                <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  For teams preparing a launch, funding round, product shift, or public repositioning.
                </p>
              </div>
      
              <div className="md:col-span-6 md:col-start-4">
                <p className="services-copy text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-6xl lg:text-7xl">
                  We design the launch layer around a product.
                </p>
      
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">01</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Signal Audit</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Find where the story is unclear and what the market should remember.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">02</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Narrative Kernel</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Compress positioning into a clear structure your team can reuse.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">03</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Launch Interface</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Build pages, decks, and product surfaces with one visual logic.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">04</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Operator Kit</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Transfer motion rules, components, and launch material to your team.</p>
                  </div>
                </div>
              </div>
      
              <div data-reveal="" className="md:col-span-2 md:col-start-11">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.12em]">Open Intake <span aria-hidden="true">→</span></p>
                <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  The output is not a moodboard. It is a working kit for launch decisions.
                </p>
              </div>
            </div>
          </section>
      
          
          <section className="numbers-intro relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <figure className="parallax-image parallax-slow pointer-events-none right-4 top-32 h-28 w-40 rotate-[7deg] md:right-8 md:top-28 md:h-48 md:w-72">
              <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07705938-ccca-4133-9f21-1b3f01af3463_3840w.png" alt="Abstract architecture detail" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>
      
            <figure className="parallax-image parallax-fast pointer-events-none bottom-24 left-4 h-24 w-36 rotate-[-9deg] md:bottom-20 md:left-10 md:h-40 md:w-60">
              <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07ad449-1292-4c6b-aff4-6ce345d9fa12_3840w.png" alt="Landscape color field" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>
      
            <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
              <div data-reveal="" className="md:col-span-3">
                <p className="section-label mb-8">Launch Telemetry</p>
                <p className="max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  The public layer should reduce explanation time.
                </p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">Send the brief <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /></a>
              </div>
      
              <div data-reveal="" className="md:col-span-5 md:col-start-5">
                <h2 className="text-6xl font-semibold leading-[0.92] tracking-[-0.08em] md:text-8xl lg:text-9xl">Launch<br />Telemetry</h2>
              </div>
      
              <div className="stat-grid md:col-span-3 md:col-start-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">04</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">operating loops</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">21</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">launch windows</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">06</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">week cycles</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">90</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">day adoption map</p></div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="archive-scroll-section relative overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="section-label">Field Archive</p>
                <p className="mt-8 max-w-64 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Visual fragments from launch systems, product surfaces, and studio research.
                </p>
              </div>
      
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="archive-title text-[54px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[86px] lg:text-[112px]">
                  Signals collected before the system takes shape.
                </h2>
              </div>
            </div>
      
            <div className="archive-gallery mt-20 flex gap-5 will-change-transform">
              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07705938-ccca-4133-9f21-1b3f01af3463_3840w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
      
              <figure className="archive-card mt-20 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07ad449-1292-4c6b-aff4-6ce345d9fa12_3840w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
      
              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e4228e-37c5-45bc-a352-ae8b41b6d71b_3840w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
      
              <figure className="archive-card mt-28 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92ae1957-bb5d-4fef-b4fe-26a43ca6c254_3840w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
      
              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1f39209-cbcc-4857-bc13-744562e16d78_3840w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
            </div>
          </section>
      
          
          <section id="work" className="work-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
              <div className="work-copy md:col-span-3">
                <p className="section-label mb-8">Systems</p>
                <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl">04 Operating Loops</h2>
                <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  The work is organized as a repeatable loop: signal, frame, interface, deploy. Each loop leaves a usable artifact behind.
                </p>
                <a href="#contact" className="magnetic-button mt-8 inline-flex rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">Study the Loop</a>
              </div>
      
              <div className="relative md:col-span-7 md:col-start-4">
                <div className="relative flex min-h-[520px] items-center justify-center">
                  <span className="masked-number text-[13rem] font-black leading-none tracking-[-0.09em] md:text-[24rem] lg:text-[29rem]" style={{ "--number-image": "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=1600&amp;q=90')" } as CSSProperties}>04</span>
                  <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf697fb6-c82a-4c34-95ec-cbfc47b8622f_3840w.png" alt="Project preview one" className="project-card absolute left-0 top-14 hidden h-44 w-72 rotate-[-14deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
                  <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/095918f0-0508-4c1f-867f-ec46e9f0720d_3840w.png" alt="Project preview two" className="project-card absolute right-4 top-6 hidden h-44 w-72 rotate-[10deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
                </div>
              </div>
      
              <div data-reveal="" className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e8]/62">Loop Archive</p>
                <p className="mt-8 text-sm font-medium leading-[1.7] text-[#f3f0e8]/50">Narrative Systems, Product Surfaces, Founder Material</p>
              </div>
            </div>
          </section>
      
          
          <section className="partners-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <h2 className="partners-heading pointer-events-none absolute left-5 top-16 text-[18vw] font-black leading-none tracking-[-0.1em] text-[#f3f0e8]/[0.055] md:left-8 md:top-10 md:text-[15vw]">
              Field Notes
            </h2>
      
            <figure className="parallax-image parallax-slow pointer-events-none absolute right-5 top-28 hidden h-44 w-72 rotate-[5deg] overflow-hidden rounded-[28px] border border-[#f3f0e8]/10 md:block lg:right-14 lg:h-56 lg:w-96">
              <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92ae1957-bb5d-4fef-b4fe-26a43ca6c254_3840w.png" alt="Studio workspace detail" className="h-full w-full object-cover" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>
      
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center">
              <div className="mb-16 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="section-label">Field Notes</p>
                </div>
      
                <div className="md:col-span-7 md:col-start-5">
                  <h2 className="text-[52px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[84px] lg:text-[104px]">
                    Five rules for making a launch easier to understand.
                  </h2>
                </div>
              </div>
      
              <div className="partner-logos grid grid-cols-1 gap-5 md:grid-cols-12">
                <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#f3f0e8] p-8 text-[#060706] md:col-span-5">
                  <div className="absolute -right-6 -top-8 text-[180px] font-black leading-none tracking-[-0.12em] text-[#060706]/[0.06]">01</div>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/45">01 / Signal</p>
                      <h3 className="mt-12 max-w-sm text-[50px] font-black leading-[0.88] tracking-[-0.08em] md:text-[64px]">Make the story repeatable.</h3>
                    </div>
                    <p className="max-w-sm text-base font-semibold leading-[1.55] text-[#060706]/62">Reduce the story to what buyers, investors, and users can repeat.</p>
                  </div>
                </article>
      
                <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#111612] md:col-span-4">
                  <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e4228e-37c5-45bc-a352-ae8b41b6d71b_3840w.png" alt="Structural facade detail" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-[#060706]/25 to-transparent"></div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/50">02 / Interface</p>
                    <h3 className="mt-5 text-[34px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8]">The first screen should explain less.</h3>
                  </div>
                </article>
      
                <article className="note-card relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-white/[0.035] p-7 md:col-span-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">Index</p>
                  <div className="mt-10 space-y-5">
                    <div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">03</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Motion</p></div>
                    <div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">04</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Handoff</p></div>
                    <div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">05</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Adoption</p></div>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-sm font-medium leading-[1.65] text-[#f3f0e8]/56">Movement, handoff, and adoption are treated as one system.</p>
                  </div>
                </article>
      
                <article className="note-card group relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#0c0f0c] p-8 md:col-span-7">
                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#f3f0e8]/10"></div>
                  <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-[#f3f0e8]/10"></div>
                  <div className="relative z-10 grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">04 / Handoff</p>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="max-w-2xl text-[44px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[64px]">Build once. Reuse after launch.</h3>
                      <p className="mt-7 max-w-lg text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Give teams reusable material, not fragile one-off compositions.</p>
                    </div>
                  </div>
                </article>
      
                <article className="note-card relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#ff5a1f] p-8 text-[#060706] md:col-span-5">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#060706]/10"></div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/50">05 / Adoption</p>
                  <h3 className="mt-12 max-w-sm text-[42px] font-black leading-[0.9] tracking-[-0.08em] md:text-[58px]">Design past the launch day.</h3>
                  <p className="mt-8 max-w-sm text-sm font-semibold leading-[1.65] text-[#060706]/62">Design for the first ninety days after launch.</p>
                </article>
              </div>
            </div>
          </section>
      
          
          <section className="process-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <figure className="parallax-image parallax-slow pointer-events-none right-4 top-24 h-28 w-44 rotate-[4deg] md:right-8 md:top-20 md:h-56 md:w-80">
              <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1f39209-cbcc-4857-bc13-744562e16d78_3840w.png" alt="Collaborative planning table" width={3840} height={2160} sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>
      
            <div data-reveal="" className="mb-16 max-w-2xl">
              <p className="section-label mb-8">Operating Loop</p>
              <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">Operating Loop</h2>
              <p className="mt-6 max-w-md text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                A compact sequence for turning early product complexity into a public system.
              </p>
            </div>
      
            <div className="relative h-72 overflow-hidden rounded-[32px] border border-[#f3f0e8]/10 bg-white/[0.025]">
              <div className="timeline-bar absolute left-0 top-10 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Read</span></div>
              <div className="timeline-bar absolute left-[18%] top-24 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Frame</span></div>
              <div className="timeline-bar absolute left-[36%] top-[9.5rem] h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Build</span></div>
              <div className="timeline-bar absolute left-[62%] top-52 h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Transfer</span></div>
              <div className="grid h-full grid-cols-4 divide-x divide-[#f3f0e8]/10"></div>
            </div>
      
            <div className="process-columns mt-8 grid gap-4 md:grid-cols-4">
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Read</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We study the product, audience, category pressure, and the points where confusion slows momentum.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Frame</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We create a narrative kernel, visual direction, and structural rules for every launch surface.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Build</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We assemble pages, decks, motion cues, components, and source files into one coherent kit.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Transfer</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We document the system so your team can reuse it without asking what belongs where.</p></div>
            </div>
          </section>
      
          
          <section id="pricing" className="pricing-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="pricing-copy md:col-span-4">
                <p className="section-label mb-8">Engage</p>
                <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">Engage</h2>
                <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Choose the depth of the operating system: a tight signal sprint or a full launch loop.
                </p>
              </div>
      
              <div className="pricing-list grid gap-5 md:col-span-7 md:col-start-6">
                <div className="pricing-card glass rounded-[36px] p-8">
                  <div className="mb-10 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#f3f0e8]/12 px-3 py-1 text-xs font-medium text-[#f3f0e8]/66">Monthly</span>
                    <span className="rounded-full bg-[#ff5a1f] px-3 py-1 text-xs font-bold text-[#060706]">Yearly -15%</span>
                  </div>
                  <div className="flex items-baseline gap-3"><p className="text-4xl font-semibold tracking-[-0.06em]">$4,800</p><p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">/sprint</p><p className="text-sm font-semibold text-[#f3f0e8]/34 line-through">$6,000</p></div>
                  <h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Signal Sprint</h3>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Positioning map</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Visual direction</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Landing page concept</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Launch checklist</p>
                  </div>
                </div>
      
                <div className="pricing-card glass rounded-[36px] p-8">
                  <div className="flex items-baseline gap-3"><p className="text-4xl font-semibold tracking-[-0.06em]">$9,600</p><p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">/cycle</p><p className="text-sm font-semibold text-[#f3f0e8]/34 line-through">$12,000</p></div>
                  <h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Launch System</h3>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Identity system</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Motion toolkit</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Web direction</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Team handoff</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section id="contact" className="contact-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="contact-form md:col-span-4">
                <p className="section-label mb-10">Brief</p>
                <div className="glass mb-5 flex w-full max-w-sm items-center justify-between rounded-[22px] px-5 py-4 text-sm font-medium text-[#f3f0e8]/58">Select a Launch Window <ChevronDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /></div>
                <div className="mb-5 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Reach me at <span className="text-[#f3f0e8]">Email *</span></div>
                <div className="mb-10 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Tell us what needs to become clearer.</div>
                <p className="mb-8 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Ready to turn a scattered launch into a working system?</p>
                <a href="#footer" className="magnetic-button inline-flex items-center gap-4 rounded-full border border-[#f3f0e8]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                  Begin <span className="rounded-full bg-[#ff5a1f] px-5 py-3 text-[#060706]">Send Brief</span>
                </a>
              </div>
      
              <div className="faq-list md:col-span-7 md:col-start-6">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em]">Brief notes. <span className="float-right">×</span></p>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h2 className="text-4xl font-semibold tracking-[-0.07em] md:text-6xl">What happens after the first call?</h2><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">We define the launch problem, collect existing material, and return with a focused scope that names the exact system we should build.</p></div>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">How fast can a sprint move?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Most focused sprints run in two to four weeks. Full launch systems usually need six to nine weeks depending on content and approvals.</p></div>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">Can this support an internal team?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Yes. We build assets, rules, and examples so founders, marketers, and product teams can keep using the system after handoff.</p></div>
              </div>
            </div>
          </section>
      
          
          <footer id="footer" className="footer-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-3"><p className="section-label">Axisform®</p></div>
              <div className="md:col-span-9"><h2 className="footer-wordmark wordmark text-[5rem] font-black leading-none sm:text-[8rem] md:text-[11rem] lg:text-[14rem]">Axisform®</h2></div>
            </div>
      
            <div className="absolute right-5 top-28 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44 md:right-8">© 2020–26</div>
      
            <div className="footer-links absolute bottom-16 left-5 right-5 grid gap-10 border-t border-[#f3f0e8]/12 pt-10 md:left-8 md:right-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Independent Design Studio / 2026</p>
                <h3 className="max-w-xl text-[42px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8] md:text-[64px] lg:text-[76px]">
                  Building public systems for the next launch.
                </h3>
      
                <div className="mt-10 grid max-w-lg grid-cols-2 border-y border-[#f3f0e8]/12 py-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Studio</p>
                    <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">Axisform®</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Field</p>
                    <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">Launch OS / 04</p>
                  </div>
                </div>
              </div>
      
              <div className="md:col-span-3 md:col-start-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Notes</p>
                <p className="mt-6 text-sm font-medium leading-[1.75] text-[#f3f0e8]/58">
                  We build identity systems, launch pages, and compact brand infrastructure for teams who need their next chapter to feel deliberate.
                </p>
      
                <a href="#contact" className="group mt-9 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8] transition hover:border-[#f3f0e8]/40">
                  Send the brief
                  <span className="transition duration-300 group-hover:translate-x-2">→</span>
                </a>
      
                <a href="#" className="group mt-4 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8]/62 transition hover:border-[#f3f0e8]/40 hover:text-[#f3f0e8]">
                  Get studio notes
                  <span className="transition duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>
      
              <div className="grid gap-10 md:col-span-2 md:col-start-11">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Social</p>
                  <div className="mt-6 space-y-4 text-sm font-bold text-[#f3f0e8]/72">
                    <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">LinkedIn <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                    <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">X / Twitter <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                    <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">Instagram <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                  </div>
                </div>
      
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Legal</p>
                  <div className="mt-6 space-y-3 text-sm font-semibold text-[#f3f0e8]/50">
                    <a href="#" className="block transition hover:text-[#f3f0e8]">Privacy Policy</a>
                    <a href="#" className="block transition hover:text-[#f3f0e8]">Terms of Service</a>
                    <a href="#" className="block transition hover:text-[#f3f0e8]">404</a>
                  </div>
                </div>
              </div>
      
              <div className="md:col-span-12">
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#f3f0e8]/12 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">© 2020-2026 Axisform®</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">Montréal / Global Studio / Field 04</p>
                </div>
              </div>
            </div>
          </footer>
        </main>
    </>
  );
}
