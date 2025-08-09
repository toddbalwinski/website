"use client";

import Section from "./components/Section";
import Card from "./components/Card";
import Motif from "./components/Motif";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ACCENT_BG = "bg-teal-600/10";
const POP = "text-rose-500";

export default function Page() {
  return (
    <div className="min-h-screen selection:bg-slate-200/80">
      {/* Hero */}
      <div className="relative">
        <Motif />
        <Section className="pt-16 pb-10 md:pt-24 md:pb-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left: Name + headline */}
            <div className="order-2 md:order-1">
              <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Todd Balwinski
              </h1>
              <p className="mt-4 max-w-prose text-lg text-slate-700">
                CS student with a business lens — building clear, useful systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className={`rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:shadow ${ACCENT_BG}`}>
                  View Projects
                </a>
                <a href="#blog" className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-800 ring-1 ring-slate-300 hover:bg-slate-100 transition">
                  Read the Blog
                </a>
              </div>
            </div>

            {/* Right: Portrait placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/5] w-64 sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-100 shadow-md">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-widest text-slate-500">Portrait Placeholder</div>
                    <div className="mt-1 text-sm text-teal-700">Add final photo in build</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-teal-600/10" />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* About */}
      <Section className="py-8 md:py-12">
        <div className="md:w-3/4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 text-slate-700">
            Brief mission statement goes here. Keep it concise and intentional — a single paragraph that frames your interests at the intersection of technology and business. This is placeholder text.
          </p>
        </div>
      </Section>

      {/* Blog Highlights */}
      <Section id="blog" className="py-8 md:py-12">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">From the Blog</h2>
          <a href="#all-posts" className="text-sm font-medium text-slate-700 hover:underline">View all posts</a>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title="Featured Story Title" subtitle="July 2025" body="A short narrative intro about an experience. This is a placeholder for a featured blog post." />
          <Card title="Another Featured Story" subtitle="June 2025" body="Another short intro that previews the narrative and invites recruiters to read more." />
        </div>
      </Section>

      {/* Projects Preview */}
      <Section id="projects" className="py-8 md:py-14">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="flex items-center gap-2">
            <button className={`rounded-full border border-slate-300 px-3.5 py-1.5 text-sm text-slate-700 hover:bg-white/70 ${ACCENT_BG}`}>All</button>
            <button className="rounded-full border border-slate-300 px-3.5 py-1.5 text-sm text-slate-700 hover:bg-white/70">Tech</button>
            <button className="rounded-full border border-slate-300 px-3.5 py-1.5 text-sm text-slate-700 hover:bg-white/70">Business</button>
            <button className="rounded-full border border-slate-300 px-3.5 py-1.5 text-sm text-slate-700 hover:bg-white/70">Writing</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href="#project-link" className="group block">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <div className="aspect-video bg-slate-100" />
                <div className="p-4">
                  <div className="text-sm text-slate-500">Category</div>
                  <h3 className="mt-1 text-base font-semibold text-slate-800">Project Title {i}</h3>
                  <p className="mt-1 text-sm text-slate-600">Short description of the project and the value it delivered. Placeholder text.</p>
                  <div className="mt-3 h-1 w-0 bg-slate-300 transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 bg-slate-900 text-slate-200">
        <Section className="py-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800 text-slate-100 font-semibold">TB</div>
              <span className="text-sm text-slate-400">Personal site placeholder</span>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a href="mailto:email@example.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16}/> email@example.com</a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:text-white"><Phone size={16}/> (123) 456-7890</a>
              <a href="#linkedin" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={16}/> LinkedIn</a>
              <a href="#github" className="inline-flex items-center gap-2 hover:text-white"><Github size={16}/> GitHub</a>
              <a href="#resume" className={`inline-flex items-center gap-2 hover:text-white ${POP}`}>{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}<span className="font-medium">Résumé</span></a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Your Name. All rights reserved. — Built with Next.js & Tailwind.
          </div>
        </Section>
      </footer>
    </div>
  );
}
