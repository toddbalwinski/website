"use client";
import React from "react";
import Image from "next/image";

export default function BlogPostTrigonVP() {
  // Reading progress and sticky bar logic
  // Only runs client-side
  React.useEffect(() => {
    const progressBar = document.getElementById('reading-progress-bar');
    const stickyBar = document.getElementById('sticky-title-bar');
    const h1 = document.getElementById('main-title');
    function onScroll() {
      if (!progressBar || !stickyBar || !h1) return;
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      progressBar.style.transform = `scaleX(${progress})`;
      // Sticky bar appears when h1 is out of view
      const h1Rect = h1.getBoundingClientRect();
      stickyBar.style.transform = h1Rect.bottom < 0 ? 'translateY(0)' : 'translateY(-100%)';
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative w-full bg-slate-50">
      {/* Diagonal grid motif background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #e2e8f0 0px, #e2e8f0 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* Reading progress bar */}
      <div id="reading-progress-bar" className="fixed inset-x-0 top-0 z-40 h-0.5 bg-teal-600/60 origin-left scale-x-0 transition-transform duration-800" />

      {/* Sticky mini-title bar */}
      <div id="sticky-title-bar" className="fixed top-0 inset-x-0 z-30 translate-y-[-100%] transition duration-300 backdrop-blur bg-white/60 border-b border-slate-200 flex items-center justify-between px-4 h-12">
        <a href="/blog" className="text-teal-700 font-medium text-sm">← Back to All Blogs</a>
        <span className="text-slate-700 font-semibold text-sm text-center max-w-md">Rebuilding a Culture of Service: My Term as Trigon Vice President</span>
        <div className="w-8" />
      </div>

      {/* Main content container */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6 md:p-10">
          <h1 id="main-title" className="text-3xl font-bold mb-6">Rebuilding a Culture of Service: My Term as Trigon Vice President</h1>
          <div className="prose prose-lg text-slate-700 [&>p]:mb-8">
            <p>When I first joined the Trigon Engineering Society at UVA, I was introduced to its three pillars: social, brotherhood, and service. All three have value, but I quickly came to believe that service is the most vital. Social events and brotherhood activities strengthen bonds within the group. <span className="not-italic">Service connects us to the broader community, grounds us in purpose, and allows us to give back to the people and institutions that shape our time at the university.</span></p>
            {/* <div className="border-l-4 border-teal-600/30 pl-4 italic my-8">
              “Service connects us to the broader community, grounds us in purpose, and allows us to give back to the people and institutions that shape our time at the university.”
            </div> */}
            <p>Despite this belief, I quickly realized that our service culture had faded. Historically, Trigon had been known for major contributions to the engineering school and community including engineering school tours, scholarships, calculator donations, and running an Engineers Ball. It had been recognized for these contributions with both the endowment of a Lawn room and a plaque outside Thornton Hall. By the time I joined, these traditions had dwindled to one modest service event per semester, mostly attended by first-years. Upperclassmen, though active in other parts of Trigon, were almost entirely absent from service. The Thomas E. Hutchinson Award, where we honored an outstanding professor at a formal Rotunda dinner, was the only event that still carried the spirit of prestige and impact.</p>
            <p>This situation did not sit well with me. I believed that service could do more than fulfill one-third of our mission by drawing in inactive members and strengthening the society as a whole. At the end of my first year, I ran for Vice President on a platform centered on revitalizing our service culture and making participation a shared expectation.</p>
            <p>Once elected, my original goal was to establish a recurring weekly service partnership. However when that plan did not come together, I pivoted to organizing a schedule of annual and one-time events that could build participation and set the stage for future traditions.</p>
            <p className="!mb-2">We ended up participating in:</p>
            <ul className="list-disc pl-6 space-y-2 !mt-2">
              <li>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <strong>Rivanna Trails Cleanup</strong> — Our first event of the semester, held before the new first-years joined, was attended exclusively by upperclassmen. It started early, was more physically demanding than we expected, and we decided it was not something we wanted to repeat. Still, the group of 10 brothers, many of whom did not usually spend time together, made the most of it. We worked hard, joked through the morning, and went to lunch together afterward. It was great to see the society's connections to each other strengthened through service.
                  </div>
                    <figure className="flex-shrink-0 w-full md:w-40">
                      <Image src="/rivanna.jpeg" alt="Rivanna Trails Cleanup" width={320} height={450} className="rounded-lg shadow w-full" />
                      <figcaption className="mt-2 text-sm text-slate-500 text-center">Working at the Rivanna Trail cleanup</figcaption>
                  </figure>
                </div>
              </li>
              <li><strong>Forest Patches Sustainability Projects</strong> — A sustainability initiative on grounds was looking for volunteers to help them plant and maintain forest pacts around the school. The work was light, the location convenient, and the atmosphere relaxed. The event was good for building up our culture, and the next vice president continued volunteering with the organization the following semester.</li>
              <li><strong>Boo Bash at the Virginia Discovery Museum</strong> — The lone existing tradition where members ran Halloween-themed activity stations at the local children’s museum. This was a great event and it was great to have some continuity with our past years.</li>
              <li><strong>Habitat for Humanity Rake-a-Thon</strong> — We joined other volunteers to rake lawns for Charlottesville residents, raising funds for local sustainable housing. This was the largest event we did and I promoted it at every weekly meeting to ensure we had strong turnout. This was an amazing event where everyone had a good time and one that I hope continues into future years.</li>
            </ul>
            <figure className="mb-8 mt-8">
              <Image src="/rake.jpeg" alt="Habitat for Humanity Rake-a-Thon" width={1200} height={800} className="w-full rounded-lg shadow object-cover" />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">Trigon brothers at the Habitat for Humanity Rake-a-Thon</figcaption>
            </figure>
            {/* Rivanna image now appears inline with first bullet above */}
            <p>By the end of the semester, over 58% of our brotherhood had participated in at least one service event — a major improvement from the previous year (which I estimate to be ~20%). First-years led participation at 77%, but every class year saw gains. I tracked all attendance and event details in a central Google Sheet, breaking down participation by year and average events per member. This not only helped measure progress but also created a clear record for future vice presidents to build on.</p>
            <p>Beyond the events themselves, I focused on sustainability. Leadership in Trigon changes every semester, so I created a dedicated vice president email account, documented all event contacts and logistics, and encouraged the rest of the executive board to do the same for their positions. The goal was to make it easy for future leaders to continue building on our work. I also spearheaded a new tradition of recapping your work in a meeting at the end of the semester and presenting the position and its roles to the society to help educate anyone who would like to run for the role in the future.</p>
            <p>Looking back, my time as Vice President was not defined by one large event but by the deliberate rebuilding of a culture. We increased participation, reestablished traditions, and planted the seeds for new ones. My hope is that the foundation that has been built will allow for Trigon to serve the community in bigger and better ways in the near future.</p>
          </div>
        </article>
        <div className="mt-12 flex justify-end gap-3">
          <a href="/blog" className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium border border-slate-200 shadow-sm hover:bg-slate-200 transition">Back to All Blogs</a>
          <a href="/" className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium border border-slate-200 shadow-sm hover:bg-slate-200 transition">Back to Home Page</a>
        </div>
      </div>
    </div>
  );
}
