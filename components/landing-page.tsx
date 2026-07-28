"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, Check, ChevronDown, Menu } from "lucide-react";
import { useAxisformMotion } from "@/components/use-axisform-motion";
import pastorGil from "@/pastor_gil.jpeg";
import pastorCulto from "@/pastor00.jpeg";
import pastorCertificados from "@/pastor01.jpeg";
import pastorKarate from "@/pastor02.jpeg";
import pastorDistribuicaoNoite from "@/pastor03.jpeg";
import pastorCantando from "@/pastor04.jpeg";
import pastorComunidade from "@/pastor05.jpeg";
import pastorFilaAlimentos from "@/pastor06.jpeg";

export function LandingPage() {
  useAxisformMotion();

  return (
    <>
      <div className="noise" aria-hidden="true"></div>
        <div className="grid-veil" aria-hidden="true"></div>
        <div className="page-rail" aria-hidden="true">Recuperando Vidas / Lapidando Tesouros</div>

        <div id="ax-loader" className="ax-loader" aria-hidden="true">
          <div className="ax-loader__inner">
            <div className="ax-loader__brand">
              <span>Pastor Gil</span><span className="ax-dot"></span>
            </div>
            <div className="ax-loader__track">
              <div className="ax-loader__bar"></div>
            </div>
            <div className="ax-loader__meta">
              <span className="ax-loader__pct">000</span>
              <span>Lapidando Tesouros</span>
            </div>
          </div>
        </div>

        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
          <a href="#home" className="text-lg font-semibold tracking-[-0.055em] text-[#f3f0e8] md:text-xl">
            Lapidando Tesouros
          </a>

          <nav className="hidden items-center gap-11 text-xs font-bold text-[#f3f0e8]/82 md:flex">
            <a href="#work" className="nav-link"><span className="mr-5 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f] align-middle"></span>A Jornada</a>
            <a href="#studio" className="nav-link">O Programa</a>
            <a href="#pricing" className="nav-link">Como Ajudar</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
      
          <button className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden" aria-label="Open menu">
            <Menu className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>
      
        <main id="home" className="relative z-10 overflow-hidden">
      
          
          <section className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="hero-copy relative z-20 max-w-[360px]">
              <p className="section-label mb-10">Lapidando Tesouros</p>
              <p className="max-w-[340px] text-[21px] font-medium leading-[1.45] tracking-[-0.045em] text-[#f3f0e8]/76 md:text-[25px]">
                Toda vida tem um <span className="text-[#f3f0e8]">tesouro</span> escondido debaixo da dor. Há mais de 15 anos, o Pastor Gil dedica sua história a lapidar homens que o mundo desistiu, devolvendo-lhes dignidade, fé e um novo começo.
              </p>

              <a href="#work" className="magnetic-button mt-14 inline-flex items-center gap-5 rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f3f0e8]">
                Conheça a Lapidando Tesouros
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
              Lapidando
            </h1>

            <div className="hero-meta glass absolute bottom-10 right-5 z-20 hidden w-[270px] rounded-[24px] p-6 md:right-8 lg:block">
              <div className="mb-8 text-2xl text-[#ff5a1f]">✳</div>
              <p className="text-[19px] leading-[1.25] tracking-[-0.04em]">
                Recuperando vidas, lapidando tesouros. Tratamento gratuito, sem medicação, fundamentado em valores cristãos.
              </p>
              <div className="mt-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/45">
                <span>Aparecida de Goiânia / GO</span>
                <span className="h-1 w-1 rounded-full bg-[#ff5a1f]"></span>
                <span>Desde 2010</span>
              </div>
            </div>
          </section>
      
          
          <section id="studio" className="brand-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <h2 className="brand-drift wordmark pointer-events-none absolute -top-16 left-0 text-[6rem] font-black leading-none text-[#f3f0e8]/10 sm:text-[9rem] md:text-[13rem] lg:text-[18rem]">
              Lapidando
            </h2>

            <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="section-label">Nossos Pilares</p>
                <p data-reveal="" className="mt-8 max-w-sm text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Cada homem que chega até nós carrega uma história de perda. Nosso trabalho começa ali: enxergar, além da dependência, o tesouro que ainda pode ser lapidado.
                </p>
              </div>

              <div className="brand-words grid gap-6 md:col-span-7 md:col-start-6">
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">acolher</p>
                <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">restaurar</p>
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">libertar.</p>
                <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">capacitar</p>
                <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">reinserir</p>
              </div>
            </div>
          </section>
      
          
          <section className="services-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="absolute left-1/2 top-0 h-[360px] w-[78%] -translate-x-1/2 overflow-hidden rounded-b-[32px] border-x border-b border-[#f3f0e8]/10 md:h-auto md:aspect-[1.55]">
              <Image src={pastorCertificados} alt="Homens da Lapidando Tesouros recebendo certificados de qualificação profissional" className="strip-image h-full w-full object-cover object-[center_80%] opacity-70" sizes="(max-width: 767px) 100vw, 50vw" />
            </div>

            <div className="grid min-h-screen items-center gap-14 md:grid-cols-12">
              <div data-reveal="" className="md:col-span-3">
                <p className="section-label mb-20">O Programa</p>
                <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Um tratamento de 9 meses, sem uso de medicamentos, construído sobre disciplina, trabalho, fé e acompanhamento humano.
                </p>
              </div>

              <div className="md:col-span-6 md:col-start-4">
                <p className="services-copy text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-6xl lg:text-7xl">
                  Lapidamos vidas através de um programa estruturado em quatro etapas.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">01</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Acolhimento</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Recebemos o homem onde ele está, sem julgamento, com abrigo, alimentação e os primeiros passos rumo à recuperação.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">02</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Recuperação</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Nove meses de tratamento sem medicação, com rotina estruturada, aconselhamento e apoio psicossocial.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">03</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Restauração Espiritual</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Valores cristãos como base para reconstruir a fé, o propósito e a relação com Deus.</p>
                  </div>
                  <div className="service-card glass rounded-[28px] p-6">
                    <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">04</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">Reinserção Social</h3>
                    <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Preparo para o retorno à família, ao trabalho e à sociedade como cidadão restaurado.</p>
                  </div>
                </div>
              </div>

              <div data-reveal="" className="md:col-span-2 md:col-start-11">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.12em]">Inscrições Abertas <span aria-hidden="true">→</span></p>
                <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Não é apenas um programa. É um caminho real de volta à vida.
                </p>
              </div>
            </div>
          </section>
      
          
          <section className="numbers-intro relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <figure className="parallax-image parallax-slow pointer-events-none right-4 top-32 h-28 w-40 rotate-[7deg] md:right-8 md:top-28 md:h-48 md:w-72">
              <Image src={pastorFilaAlimentos} alt="Fila de distribuição de alimentos na comunidade" sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>

            <figure className="parallax-image parallax-fast pointer-events-none bottom-24 left-4 h-24 w-36 rotate-[-9deg] md:bottom-20 md:left-10 md:h-40 md:w-60">
              <Image src={pastorDistribuicaoNoite} alt="Distribuição de alimentos à noite na comunidade" sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>
      
            <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
              <div data-reveal="" className="md:col-span-3">
                <p className="section-label mb-8">Números que Contam uma História</p>
                <p className="max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Cada número aqui representa uma vida que encontrou um novo começo.
                </p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">Fale conosco <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /></a>
              </div>

              <div data-reveal="" className="md:col-span-5 md:col-start-5">
                <h2 className="text-6xl font-semibold leading-[0.92] tracking-[-0.08em] md:text-8xl lg:text-9xl">Vidas em<br />Transformação</h2>
              </div>

              <div className="stat-grid md:col-span-3 md:col-start-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">121</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">homens atendidos</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">70%</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">taxa de recuperação</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">09</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">meses de tratamento</p></div>
                  <div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">100%</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">gratuito</p></div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="archive-scroll-section relative overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="section-label">Registros da Jornada</p>
                <p className="mt-8 max-w-64 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Momentos de fé, trabalho e transformação dentro da Lapidando Tesouros.
                </p>
              </div>

              <div className="md:col-span-8 md:col-start-5">
                <h2 className="archive-title text-[54px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[86px] lg:text-[112px]">
                  Histórias de vidas restauradas, uma a uma.
                </h2>
              </div>
            </div>

            <div className="archive-gallery mt-20 flex gap-5 will-change-transform">
              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src={pastorCulto} alt="Culto da Lapidando Tesouros com multidão de braços erguidos" className="h-full w-full object-cover opacity-75" sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>

              <figure className="archive-card mt-20 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                <Image src={pastorCantando} alt="Pastor Gil cantando no palco da Lapidando Tesouros" className="h-full w-full object-cover opacity-75" sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>

              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src={pastorComunidade} alt="Grupo reunido em estudo na comunidade" className="h-full w-full object-cover opacity-75" sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>

              <figure className="archive-card mt-28 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                <Image src={pastorKarate} alt="Grupo de artes marciais na sede da Lapidando Tesouros" className="h-full w-full object-cover opacity-75" sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>

              <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                <Image src={pastorFilaAlimentos} alt="Fila de distribuição de alimentos na comunidade" className="h-full w-full object-cover opacity-75" sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
            </div>
          </section>
      
          
          <section id="work" className="work-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
              <div className="work-copy md:col-span-3">
                <p className="section-label mb-8">A Jornada</p>
                <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl">4 Etapas da Restauração</h2>
                <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  O caminho de volta à vida acontece em etapas: acolher, tratar, restaurar, reinserir. Cada etapa deixa uma marca permanente na história de quem passa por aqui.
                </p>
                <a href="#contact" className="magnetic-button mt-8 inline-flex rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">Conheça o Programa</a>
              </div>

              <div className="relative md:col-span-7 md:col-start-4">
                <div className="relative flex min-h-[520px] items-center justify-center">
                  <span className="masked-number text-[13rem] font-black leading-none tracking-[-0.09em] md:text-[24rem] lg:text-[29rem]" style={{ "--number-image": "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=1600&amp;q=90')" } as CSSProperties}>04</span>
                  <Image src={pastorCulto} alt="Culto da Lapidando Tesouros com multidão de braços erguidos" className="project-card absolute left-0 top-14 hidden h-44 w-72 rotate-[-14deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" sizes="(max-width: 767px) 100vw, 50vw" />
                  <Image src={pastorComunidade} alt="Grupo reunido em estudo na comunidade" className="project-card absolute right-4 top-6 hidden h-44 w-72 rotate-[10deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" sizes="(max-width: 767px) 100vw, 50vw" />
                </div>
              </div>

              <div data-reveal="" className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e8]/62">Registro da Jornada</p>
                <p className="mt-8 text-sm font-medium leading-[1.7] text-[#f3f0e8]/50">Acolhimento, Tratamento, Restauração, Reinserção</p>
              </div>
            </div>
          </section>

          <section className="partners-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <h2 className="partners-heading pointer-events-none absolute left-5 top-16 text-[18vw] font-black leading-none tracking-[-0.1em] text-[#f3f0e8]/[0.055] md:left-8 md:top-10 md:text-[15vw]">
              Nossos Valores
            </h2>

            <figure className="parallax-image parallax-slow pointer-events-none absolute right-5 top-28 hidden h-44 w-72 rotate-[5deg] overflow-hidden rounded-[28px] border border-[#f3f0e8]/10 md:block lg:right-14 lg:h-56 lg:w-96">
              <Image src={pastorCantando} alt="Pastor Gil cantando no palco da Lapidando Tesouros" className="h-full w-full object-cover" sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center">
              <div className="mb-16 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="section-label">O Que Nos Guia</p>
                </div>

                <div className="md:col-span-7 md:col-start-5">
                  <h2 className="text-[52px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[84px] lg:text-[104px]">
                    Cinco valores que guiam cada etapa da restauração.
                  </h2>
                </div>
              </div>

              <div className="partner-logos grid grid-cols-1 gap-5 md:grid-cols-12">
                <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#f3f0e8] p-8 text-[#060706] md:col-span-5">
                  <div className="absolute -right-6 -top-8 text-[180px] font-black leading-none tracking-[-0.12em] text-[#060706]/[0.06]">01</div>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/45">01 / Acolhimento</p>
                      <h3 className="mt-12 max-w-sm text-[50px] font-black leading-[0.88] tracking-[-0.08em] md:text-[64px]">Ninguém chega aqui por acaso.</h3>
                    </div>
                    <p className="max-w-sm text-base font-semibold leading-[1.55] text-[#060706]/62">Cada homem é recebido com dignidade, independente de sua história.</p>
                  </div>
                </article>

                <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#111612] md:col-span-4">
                  <Image src={pastorKarate} alt="Grupo de artes marciais na sede da Lapidando Tesouros" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" sizes="(max-width: 767px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-[#060706]/25 to-transparent"></div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/50">02 / Disciplina</p>
                    <h3 className="mt-5 text-[34px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8]">A rotina que reconstrói.</h3>
                  </div>
                </article>

                <article className="note-card relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-white/[0.035] p-7 md:col-span-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">Índice</p>
                  <div className="mt-10 space-y-5">
                    <div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">03</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Fé</p></div>
                    <div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">04</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Comunidade</p></div>
                    <div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">05</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Propósito</p></div>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-sm font-medium leading-[1.65] text-[#f3f0e8]/56">Fé, comunidade e propósito caminham juntos em cada etapa da recuperação.</p>
                  </div>
                </article>

                <article className="note-card group relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#0c0f0c] p-8 md:col-span-7">
                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#f3f0e8]/10"></div>
                  <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-[#f3f0e8]/10"></div>
                  <div className="relative z-10 grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">04 / Comunidade</p>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="max-w-2xl text-[44px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[64px]">Ninguém se recupera sozinho.</h3>
                      <p className="mt-7 max-w-lg text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Construímos uma rede de apoio que continua depois dos nove meses de tratamento.</p>
                    </div>
                  </div>
                </article>

                <article className="note-card relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#ff5a1f] p-8 text-[#060706] md:col-span-5">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#060706]/10"></div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/50">05 / Propósito</p>
                  <h3 className="mt-12 max-w-sm text-[42px] font-black leading-[0.9] tracking-[-0.08em] md:text-[58px]">Recuperar é só o começo.</h3>
                  <p className="mt-8 max-w-sm text-sm font-semibold leading-[1.65] text-[#060706]/62">Preparamos cada homem para uma vida com significado, não apenas sem dependência.</p>
                </article>
              </div>
            </div>
          </section>
      
          
          <section className="process-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <figure className="parallax-image parallax-slow pointer-events-none right-4 top-24 h-28 w-44 rotate-[4deg] md:right-8 md:top-20 md:h-56 md:w-80">
              <Image src={pastorDistribuicaoNoite} alt="Distribuição de alimentos à noite na comunidade" sizes="(max-width: 767px) 100vw, 50vw" />
            </figure>

            <div data-reveal="" className="mb-16 max-w-2xl">
              <p className="section-label mb-8">Como Funciona</p>
              <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">A Jornada em 4 Passos</h2>
              <p className="mt-6 max-w-md text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                Um caminho estruturado para transformar dor em restauração.
              </p>
            </div>

            <div className="relative h-72 overflow-hidden rounded-[32px] border border-[#f3f0e8]/10 bg-white/[0.025]">
              <div className="timeline-bar absolute left-0 top-10 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Acolher</span></div>
              <div className="timeline-bar absolute left-[18%] top-24 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Tratar</span></div>
              <div className="timeline-bar absolute left-[36%] top-[9.5rem] h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Restaurar</span></div>
              <div className="timeline-bar absolute left-[62%] top-52 h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Reinserir</span></div>
              <div className="grid h-full grid-cols-4 divide-x divide-[#f3f0e8]/10"></div>
            </div>

            <div className="process-columns mt-8 grid gap-4 md:grid-cols-4">
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Acolher</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">Recepção, triagem e adaptação à rotina da casa, com acolhimento humano desde o primeiro dia.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Tratar</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">Nove meses de acompanhamento diário, aconselhamento e disciplina de vida, sem uso de medicamentos.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Restaurar</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">Fortalecimento espiritual, reconstrução de vínculos familiares e resgate da autoestima.</p></div>
              <div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Reinserir</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">Preparação para o retorno à sociedade com autonomia, trabalho e propósito.</p></div>
            </div>
          </section>
      
          
          <section id="pricing" className="pricing-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="pricing-copy md:col-span-4">
                <p className="section-label mb-8">Como Ajudar</p>
                <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">Como Ajudar</h2>
                <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  A Lapidando Tesouros é mantida por doações e trabalho voluntário. Sua contribuição sustenta o único tratamento gratuito de recuperação em Goiás.
                </p>
              </div>

              {/* Dados de doação e voluntariado abaixo são fictícios — substituir por PIX, telefone e e-mail reais */}
              <div className="pricing-list grid gap-5 md:col-span-7 md:col-start-6">
                <div className="pricing-card glass rounded-[36px] p-8">
                  <div className="mb-10 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#f3f0e8]/12 px-3 py-1 text-xs font-medium text-[#f3f0e8]/66">PIX</span>
                    <span className="rounded-full bg-[#ff5a1f] px-3 py-1 text-xs font-bold text-[#060706]">Qualquer valor ajuda</span>
                  </div>
                  <div className="flex items-baseline gap-3"><p className="text-2xl font-semibold tracking-[-0.06em] text-[#f3f0e8]/70">pix@lapidandotesouros.org.br</p></div>
                  <h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Doe</h3>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Alimentação</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Higiene e vestuário</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Manutenção da casa</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Oficinas de trabalho</p>
                  </div>
                </div>

                <div className="pricing-card glass rounded-[36px] p-8">
                  <div className="mb-10 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#f3f0e8]/12 px-3 py-1 text-xs font-medium text-[#f3f0e8]/66">Sem custo</span>
                  </div>
                  <h3 className="mt-2 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Seja Voluntário</h3>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Palestras e testemunhos</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Aulas e oficinas</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Apoio jurídico</p>
                    <p className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.5} aria-hidden="true" /> Acompanhamento espiritual</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section id="contact" className="contact-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-14 md:grid-cols-12">
              {/* Formulário e telefone abaixo usam placeholders — ligar a um canal de contato real */}
              <div className="contact-form md:col-span-4">
                <p className="section-label mb-10">Contato</p>
                <div className="glass mb-5 flex w-full max-w-sm items-center justify-between rounded-[22px] px-5 py-4 text-sm font-medium text-[#f3f0e8]/58">Selecione um Assunto <ChevronDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /></div>
                <div className="mb-5 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Fale com a gente pelo <span className="text-[#f3f0e8]">E-mail *</span></div>
                <div className="mb-10 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Conte-nos como podemos ajudar.</div>
                <p className="mb-8 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Pronto para fazer parte dessa transformação?</p>
                <a href="#footer" className="magnetic-button inline-flex items-center gap-4 rounded-full border border-[#f3f0e8]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                  Enviar <span className="rounded-full bg-[#ff5a1f] px-5 py-3 text-[#060706]">Enviar Mensagem</span>
                </a>
              </div>

              <div className="faq-list md:col-span-7 md:col-start-6">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em]">Perguntas frequentes. <span className="float-right">×</span></p>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h2 className="text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Como faço para internar alguém na Lapidando Tesouros?</h2><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Entre em contato pelo telefone ou WhatsApp abaixo. Nossa equipe explica o processo de acolhimento e agenda uma conversa inicial com a família.</p></div>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">O tratamento é realmente gratuito?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Sim. Somos a única casa de recuperação totalmente gratuita de Goiás para quem não tem condições de pagar um tratamento particular.</p></div>
                <div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">Quanto tempo dura o programa?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Nove meses, sem uso de medicamentos, com acompanhamento espiritual e psicossocial contínuo até a reinserção social.</p></div>
              </div>
            </div>
          </section>
      
          
          <footer id="footer" className="footer-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-3"><p className="section-label">Lapidando Tesouros</p></div>
              <div className="md:col-span-9"><h2 className="footer-wordmark wordmark text-[5rem] font-black leading-none sm:text-[8rem] md:text-[11rem] lg:text-[14rem]">Lapidando</h2></div>
            </div>

            <div className="absolute right-5 top-28 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44 md:right-8">© 2010–26</div>

            <div className="footer-links absolute bottom-16 left-5 right-5 grid gap-10 border-t border-[#f3f0e8]/12 pt-10 md:left-8 md:right-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Comunidade Terapêutica / Aparecida de Goiânia</p>
                <h3 className="max-w-xl text-[42px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8] md:text-[64px] lg:text-[76px]">
                  Restaurando vidas, lapidando tesouros, uma história de cada vez.
                </h3>

                <div className="mt-10 grid max-w-lg grid-cols-2 border-y border-[#f3f0e8]/12 py-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Instituição</p>
                    <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">Lapidando Tesouros</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Programa</p>
                    <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">9 Meses / Gratuito</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Sobre</p>
                <p className="mt-6 text-sm font-medium leading-[1.75] text-[#f3f0e8]/58">
                  Comunidade terapêutica cristã dedicada à recuperação de dependentes químicos e à restauração de suas famílias, sob liderança do Pastor Gil.
                </p>

                <a href="#contact" className="group mt-9 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8] transition hover:border-[#f3f0e8]/40">
                  Fale conosco
                  <span className="transition duration-300 group-hover:translate-x-2">→</span>
                </a>

                <a href="https://www.instagram.com/lapidandotesouros_/" target="_blank" rel="noopener noreferrer" className="group mt-4 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8]/62 transition hover:border-[#f3f0e8]/40 hover:text-[#f3f0e8]">
                  Siga no Instagram
                  <span className="transition duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>

              {/* Telefone/endereço e links de rede social são fictícios — substituir por dados reais */}
              <div className="grid gap-10 md:col-span-2 md:col-start-11">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Redes</p>
                  <div className="mt-6 space-y-4 text-sm font-bold text-[#f3f0e8]/72">
                    <a href="https://www.instagram.com/lapidandotesouros_/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">Instagram <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                    <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">Facebook <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                    <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">WhatsApp <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Institucional</p>
                  <div className="mt-6 space-y-3 text-sm font-semibold text-[#f3f0e8]/50">
                    <a href="#" className="block transition hover:text-[#f3f0e8]">Política de Privacidade</a>
                    <a href="#" className="block transition hover:text-[#f3f0e8]">Termos de Uso</a>
                    <a href="#" className="block transition hover:text-[#f3f0e8]">404</a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-12">
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#f3f0e8]/12 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">© 2010-2026 Lapidando Tesouros</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">Aparecida de Goiânia / GO</p>
                </div>
              </div>
            </div>
          </footer>
        </main>
    </>
  );
}
