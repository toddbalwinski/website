"use client";
import Motif from "../../app/components/Motif";
import Card from "../../app/components/Card";
import Section from "../../app/components/Section";
import Image from "next/image";
import { projects } from "../projectsData";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  // Add top spacing
  const topSpacing = "pt-16 md:pt-24";
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = useMemo<string[]>(() => {
    const allTags = projects.flatMap((p) => p.tags);
    return Array.from(new Set(allTags));
  }, []);
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects;
    return projects.filter((p) => p.tags.includes(selectedTag as string));
  }, [selectedTag]);

  // Responsive columns for minHeight calculation
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const rows = Math.ceil(filteredProjects.length / cols);
  const minHeight = rows * 270;

  return (
    <main className="relative min-h-screen pb-16">
      <Motif />
      <Section className={topSpacing}>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold font-serif">Projects</h2>
          <a
            href="/"
            className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium border border-slate-200 shadow-sm hover:bg-slate-200 transition"
          >
            Back to Home Page
          </a>
        </div>
        <p className="text-slate-600 mb-6">A selection of my work, with filtering by tag.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`rounded-full px-3 py-1 text-sm border ${!selectedTag ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800 border-slate-200"}`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {tags.map((tag: string) => (
            <button
              key={tag}
              className={`rounded-full px-3 py-1 text-sm border ${selectedTag === tag ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800 border-slate-200"}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <motion.div
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          layout
          style={{ minHeight }}
          transition={{ layout: { duration: 1.2, ease: [0.2, 0.7, 0.2, 1] } }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group block"
                variants={{
                  hidden: { opacity: 0, y: 30, transition: { duration: 0.7 } },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  exit: { opacity: 0, y: -30, transition: { duration: 0.7 } }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                    <Image src={project.image} alt={project.name} width={400} height={300} className="object-cover w-full h-full rounded-lg" />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 border border-slate-200">{tag}</span>
                      ))}
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-slate-800">{project.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{project.description}</p>
                    <div className="mt-3 h-1 w-0 bg-slate-400 rounded-full transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </main>
  );
}
