import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Todd Balwinski',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
