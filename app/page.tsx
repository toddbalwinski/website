import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-serif mb-4">Your Name</h1>
          <p className="text-lg mb-6">Short professional headline goes here</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-lg" />
        </div>
      </section>
      {/* About section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-serif mb-2">About Me</h2>
        <p className="max-w-prose">
          This section will include a brief introduction about yourself.
          Keep it concise and highlight your background and passions.
        </p>
      </section>
      {/* Blog highlights */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-serif mb-2">Blog Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2">Blog Post Title</h3>
            <p className="text-sm">
              A short summary of the blog post content goes here.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2">Blog Post Title</h3>
            <p className="text-sm">
              A short summary of the blog post content goes here.
            </p>
          </div>
        </div>
      </section>
      {/* Projects preview */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-serif mb-4">Projects</h2>
        <div className="mb-6 space-x-3">
          <button className="px-4 py-2 border rounded">All</button>
          <button className="px-4 py-2 border rounded">Tech</button>
          <button className="px-4 py-2 border rounded">Business</button>
          <button className="px-4 py-2 border rounded">Writing</button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2">Project Name</h3>
            <p className="text-sm">
              Brief description of the project goes here.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2">Project Name</h3>
            <p className="text-sm">
              Brief description of the project goes here.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2">Project Name</h3>
            <p className="text-sm">
              Brief description of the project goes here.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-gray-300 py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-x-6">
            <a href="mailto:you@example.com" className="hover:text-white">
              you@example.com
            </a>
            <a href="tel:+1234567890" className="hover:text-white">
              +123 456 7890
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
