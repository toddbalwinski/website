"use client";

import Section from "./components/Section";
import Card from "./components/Card";
import Motif from "./components/Motif";
import Image from "next/image";
import { projects } from "./projectsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ACCENT_BG = "bg-teal-600/10";
const POP = "text-rose-500";

export default function Page() {
  return (
    <div className="selection:bg-slate-200/80">
      {/* Hero */}
      <div className="relative">
        <Section className="pt-16 pb-10 md:pt-24 md:pb-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left: Name + headline */}
            <div className="order-2 md:order-1">
              <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Todd Balwinski
              </h1>
              <p className="mt-4 max-w-prose text-lg text-slate-700">
                Using technology to improve proccesses and operations
              </p>

            </div>

            {/* Right: Portrait image */}
            <div className="order-1 md:order-2">
              <motion.div
                className="relative mx-auto aspect-[4/5] w-64 sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-100 shadow-md"
                whileHover={{ rotate: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                style={{ willChange: "transform" }}
              >
                <img
                  src="/headshot.jpeg"
                  alt="Todd Balwinski headshot"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ willChange: "transform" }}
                />
                {/* <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-teal-600/10" /> */}
              </motion.div>
            </div>
          </div>
        </Section>
      </div>


      {/* Blog Highlights */}
      <Section id="blog" className="py-8 md:py-12">
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4">From the Blog</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          <div className="col-span-3 grid gap-5 md:grid-cols-2">
            <a href="/blog/trigon-vice-president" className="block">
              <Card
                title="Rebuilding a Culture of Service: My Term as Trigon Vice President"
                subtitle="December 2024"
                body="Reflections on reviving Trigon's service culture and leading as Vice President."
              />
            </a>
            <Card title="Another Featured Story" subtitle="June 2025" body="Another short intro that previews the narrative and invites recruiters to read more." />
          </div>
          <a
            href="/blog"
            className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md text-base font-semibold text-slate-800 px-4 py-6 col-span-3 md:col-span-1"
            style={{ minHeight: '100%' }}
          >
            View all posts
          </a>
        </div>
      </Section>

      {/* Projects Highlights */}
      <Section id="projects" className="py-8 md:py-12">
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4 text-left md:text-right">Featured Projects</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          <a
            href="/projects"
            className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md text-base font-semibold text-slate-800 px-4 py-6 md:col-span-1 order-2 md:order-1"
            style={{ minHeight: '100%' }}
          >
            View all projects
          </a>
          <div className="md:col-span-3 grid gap-5 md:grid-cols-2 order-1 md:order-2">
            <a href={projects[0].link} className="block" target="_blank" rel="noopener noreferrer">
              <Card
                title={projects[0].name}
                subtitle={projects[0].tags.join(", ")}
                body={projects[0].description}
              />
            </a>
            <a href={projects[1].link} className="block" target="_blank" rel="noopener noreferrer">
              <Card
                title={projects[1].name}
                subtitle={projects[1].tags.join(", ")}
                body={projects[1].description}
              />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 bg-slate-900 text-slate-200">
        <Section className="py-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-400">
                <Image src="/tb3.svg" alt="TB icon" width={28} height={28} className="h-7 w-7 object-contain" style={{objectFit: 'contain'}} />
              </div>
              <span className="text-sm text-slate-400">Todd Balwinski — Portfolio & Blog</span>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a href="mailto:tbalwinski@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16}/> tbalwinski@gmail.com</a>
              <a href="tel:+15715219973" className="inline-flex items-center gap-2 hover:text-white"><Phone size={16}/> (571) 521-9973</a>
              <a href="https://www.linkedin.com/in/todd-balwinski/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={16}/> LinkedIn</a>
              <a href="https://github.com/toddbalwinski" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={16}/> GitHub</a>
              {/* <a href="#resume" className={`inline-flex items-center gap-2 hover:text-white ${POP}`}>eslint-disable-next-line react/jsx-no-comment-textnodes<span className="font-medium">Resume</span></a> */}
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Todd Balwinski. All rights reserved. Built with Next.js & Tailwind.
          </div>
        </Section>
      </footer>
    </div>
  );
}
