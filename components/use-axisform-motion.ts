"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function useAxisformMotion() {
  useEffect(() => {
    let cleanup = () => {};

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
        if (!prefersReducedMotion) {
          gsap.registerPlugin(ScrollTrigger);
          gsap.defaults({ ease: "power3.out" });
    
          const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1.15
          });
    
          lenis.on("scroll", ScrollTrigger.update);
          const updateLenis = (time: number) => lenis.raf(time * 1000);
          gsap.ticker.add(updateLenis);
          gsap.ticker.lagSmoothing(0);
    
          // ---- On-load: brand preloader -> hero entrance ----
          const axLoader = document.getElementById("ax-loader");
    
          if (lenis && axLoader) {
            lenis.stop();
          }
    
          const loadTl = gsap.timeline({ paused: true });
    
          loadTl
            .from("header", { y: -24, duration: 0.75 })
            .from(".hero-copy > *", { y: 28, stagger: 0.09, duration: 0.8 }, "-=0.35")
            .from(".hero-card", { y: 90, rotate: 0, scale: 0.94, stagger: 0.08, duration: 1.05 }, "-=0.55")
            .from(".hero-cta", { scale: 0, duration: 0.6 }, "-=0.45")
            .from(".hero-wordmark", { yPercent: 18, duration: 1 }, "-=0.7")
            .from(".hero-meta", { y: 24, duration: 0.75 }, "-=0.65");
    
          if (axLoader) {
            const brandEl = axLoader.querySelector(".ax-loader__brand");
            const barEl = axLoader.querySelector(".ax-loader__bar");
            const metaEl = axLoader.querySelector(".ax-loader__meta");
            const pctEl = axLoader.querySelector(".ax-loader__pct");
            const counter = { v: 0 };
    
            gsap.timeline({
              defaults: { ease: "power3.out" },
              onComplete() {
                axLoader.style.display = "none";
                lenis.start();
                ScrollTrigger.refresh();
              }
            })
              .to(brandEl, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out" }, 0)
              .to(metaEl, { opacity: 1, duration: 0.6 }, 0.3)
              .to(barEl, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0.2)
              .to(counter, {
                v: 100,
                duration: 1.1,
                ease: "power2.inOut",
                onUpdate() {
                  if (pctEl) {
                    pctEl.textContent = String(Math.round(counter.v)).padStart(3, "0");
                  }
                }
              }, 0.2)
              .to([brandEl, metaEl], { opacity: 0, y: -20, filter: "blur(8px)", duration: 0.5, ease: "power2.in" }, "+=0.15")
              .to(axLoader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "<0.1")
              .add(() => { loadTl.play(); }, "<0.35");
          } else {
            loadTl.play();
            lenis.start();
          }
    
          // Universal soft reveals
          gsap.utils.toArray<HTMLElement>("[data-reveal], .reveal").forEach((item) => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: .9,
              scrollTrigger: {
                trigger: item,
                start: "top 84%",
                toggleActions: "play none none reverse"
              }
            });
          });
    
          // Hero pinned cinematic transformation
          const hero = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "+=115%",
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });
    
          hero
            .to(".hero-wordmark", { yPercent: -50, scale: 1.07, opacity: .86, duration: 1 }, 0)
            .to(".hero-copy", { y: -60, opacity: .42, duration: 1 }, 0)
            .to(".hero-meta", { y: -34, opacity: .72, duration: 1 }, 0)
            .to(".hero-stack", { y: -70, scale: .94, duration: 1 }, 0)
            .to(".hero-card:nth-child(1)", { x: -46, y: 34, rotate: -24, duration: 1 }, 0)
            .to(".hero-card:nth-child(2)", { x: 42, y: -34, rotate: 20, duration: 1 }, 0)
            .to(".hero-card:nth-child(3)", { x: 54, y: 22, rotate: 22, duration: 1 }, 0)
            .to(".hero-card:nth-child(4)", { x: 8, y: 12, rotate: 0, duration: 1 }, 0);
    
          // Studio pinned word rhythm
          const brand = gsap.timeline({
            scrollTrigger: {
              trigger: ".brand-section",
              start: "top top",
              end: "+=110%",
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });
    
          brand
            .fromTo(".brand-drift", { xPercent: 4 }, { xPercent: -22, duration: 1 }, 0)
            .fromTo(".brand-word", {
              opacity: 0,
              y: 80,
              x: (i) => (i % 2 ? -90 : 90)
            }, {
              opacity: 1,
              y: 0,
              x: 0,
              stagger: .08,
              duration: .6
            }, .08)
            .to(".brand-word", {
              x: (i) => (i % 2 ? -34 : 34),
              stagger: .04,
              duration: .45
            }, .64);
    
          // Services reveal and image strip motion
          gsap.timeline({
            scrollTrigger: {
              trigger: ".services-section",
              start: "top 65%",
              end: "bottom 30%",
              scrub: 1
            }
          })
            .from(".services-copy", { y: 90, opacity: 0, duration: .35 })
            .from(".service-card", { y: 42, opacity: 0, stagger: .08, duration: .45 }, .16)
            .to(".strip-image", { xPercent: -14, scale: 1.22, duration: .8 }, 0);
    
          // Parallax media
          gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((item) => {
            const isFast = item.classList.contains("parallax-fast");
            const section = item.closest("section");
    
            gsap.fromTo(item, { y: isFast ? 90 : 50 }, {
              y: isFast ? -120 : -70,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            });
    
            const img = item.querySelector("img");
            if (img) {
              gsap.fromTo(img, { scale: 1.18, yPercent: isFast ? -8 : -5 }, {
                scale: 1.04,
                yPercent: isFast ? 8 : 5,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              });
            }
          });
    
          // Stats stagger
          gsap.from(".stat-grid .note-card", {
            y: 52,
            opacity: 0,
            stagger: .08,
            duration: .8,
            scrollTrigger: {
              trigger: ".numbers-intro",
              start: "top 58%",
              toggleActions: "play none none reverse"
            }
          });
    
          // Archive scroll
          gsap.timeline({
            scrollTrigger: {
              trigger: ".archive-scroll-section",
              start: "top 75%",
              end: "bottom 20%",
              scrub: 1
            }
          })
            .from(".archive-title", { y: 80, opacity: 0, duration: 0.45 }, 0)
            .from(".archive-card", {
              y: 100,
              opacity: 0,
              rotate: (i) => [-3, 2, -2, 3, -1][i],
              stagger: 0.08,
              duration: 0.65
            }, 0.12)
            .to(".archive-gallery", { xPercent: -18, duration: 1 }, 0.25)
            .to(".archive-card img", { scale: 1.18, duration: 1 }, 0.25);
    
          // Work pinned number
          const work = gsap.timeline({
            scrollTrigger: {
              trigger: ".work-section",
              start: "top top",
              end: "+=120%",
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });
    
          work
            .from(".work-copy", { x: -80, opacity: 0, duration: .4 }, 0)
            .fromTo(".masked-number", { scale: .82, y: 80, backgroundPosition: "50% 28%" }, { scale: 1.1, y: -50, backgroundPosition: "50% 74%", duration: 1 }, 0)
            .from(".project-card", { y: 80, opacity: 0, rotate: 0, stagger: .1, duration: .4 }, .15)
            .to(".project-card", { y: -40, x: (i) => (i ? 42 : -34), duration: .8 }, .45);
    
          // Field notes editorial
          gsap.timeline({
            scrollTrigger: {
              trigger: ".partners-section",
              start: "top 72%",
              end: "bottom 28%",
              scrub: 1
            }
          })
            .fromTo(".partners-heading", { yPercent: 10, opacity: 0.06 }, { yPercent: -16, opacity: 0.12, duration: 1 }, 0)
            .from(".partners-section .section-label", { y: 24, opacity: 0, duration: 0.35 }, 0.08)
            .from(".partners-section h2:not(.partners-heading)", { y: 70, opacity: 0, duration: 0.55 }, 0.12)
            .from(".partner-logos .note-card", {
              y: 100,
              opacity: 0,
              rotate: (i) => [-2, 2, -1, 1, -2][i],
              stagger: 0.08,
              duration: 0.7
            }, 0.2)
            .to(".partner-logos .note-card", {
              y: (i) => [-24, 18, -12, 14, -18][i],
              stagger: 0.04,
              duration: 0.55
            }, 0.62);
    
          // Timeline process
          gsap.timeline({
            scrollTrigger: {
              trigger: ".process-section",
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1
            }
          })
            .to(".timeline-bar", { scaleX: 1, stagger: .12, duration: .6 }, 0)
            .from(".process-columns > div", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .25);
    
          // Pricing pin on desktop only
          gsap.timeline({
            scrollTrigger: {
              trigger: ".pricing-section",
              start: "top top",
              end: "+=80%",
              scrub: 1,
              pin: window.innerWidth >= 768,
              anticipatePin: 1
            }
          })
            .from(".pricing-copy", { y: 50, opacity: 0, duration: .35 }, 0)
            .from(".pricing-card", { x: 110, opacity: 0, stagger: .16, duration: .55 }, .12);
    
          // Contact / footer
          gsap.timeline({
            scrollTrigger: {
              trigger: ".contact-section",
              start: "top 62%",
              end: "bottom 34%",
              scrub: 1
            }
          })
            .from(".contact-form > *", { y: 36, opacity: 0, stagger: .07, duration: .45 }, 0)
            .from(".faq-row", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .12);
    
          gsap.timeline({
            scrollTrigger: {
              trigger: ".footer-section",
              start: "top 72%",
              end: "bottom bottom",
              scrub: 1
            }
          })
            .fromTo(".footer-wordmark", { scale: 0.9, y: 120, opacity: 0.35 }, { scale: 1, y: 0, opacity: 1, duration: 0.9 }, 0)
            .from(".footer-links", { y: 80, opacity: 0, duration: 0.5 }, 0.2)
            .from(".footer-links h3", { y: 60, opacity: 0, letterSpacing: "-0.12em", duration: 0.45 }, 0.3)
            .from(".footer-links a", { y: 18, opacity: 0, stagger: 0.04, duration: 0.3 }, 0.45);
    
          const refreshScroll = () => ScrollTrigger.refresh();
          window.addEventListener("load", refreshScroll);
          window.addEventListener("resize", refreshScroll);
    
          cleanup = () => {
            window.removeEventListener("load", refreshScroll);
            window.removeEventListener("resize", refreshScroll);
            gsap.ticker.remove(updateLenis);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            lenis.destroy();
          };
    
        } else {
          const reducedLoader = document.getElementById("ax-loader");
          if (reducedLoader) reducedLoader.style.display = "none";
    
          document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]").forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "none";
          });
    
          document.querySelectorAll<HTMLElement>(".timeline-bar").forEach((item) => {
            item.style.transform = "scaleX(1)";
          });
        }

    return cleanup;
  }, []);
}
