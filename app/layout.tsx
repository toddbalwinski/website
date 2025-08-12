import './globals.css';
import { ReactNode } from 'react';

import Motif from "../components/Motif";

export const metadata = {
  title: 'Todd Balwinski — Portfolio & Blog',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tb.png" type="image/png" />
      </head>
      <body className="font-sans antialiased min-h-screen relative">
        <Motif />
        {children}
      </body>
    </html>
  );
}
