import './globals.css';
import { ReactNode } from 'react';

import Motif from "../app/components/Motif";

export const metadata = {
  title: 'Todd Balwinski — Portfolio & Blog',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Todd Balwinski — Portfolio & Blog</title>
        <meta name="description" content="Personal portfolio and blog of Todd Balwinski. Projects, blog posts, and contact info." />
        <meta name="keywords" content="Todd Balwinski, portfolio, blog, projects, UVA, consultant, developer, engineer" />
        <meta name="author" content="Todd Balwinski" />
        <link rel="icon" href="/tb3.svg" type="image/svg+xml" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Todd Balwinski — Portfolio & Blog" />
        <meta property="og:description" content="Personal portfolio and blog of Todd Balwinski. Projects, blog posts, and contact info." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toddbalwinski.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Todd Balwinski — Portfolio & Blog" />
        <meta name="twitter:description" content="Personal portfolio and blog of Todd Balwinski. Projects, blog posts, and contact info." />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className="font-sans antialiased min-h-screen relative">
        <Motif />
        {children}
      </body>
    </html>
  );
}
