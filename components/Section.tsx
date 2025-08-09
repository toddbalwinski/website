import * as React from 'react';

export default function Section({ id, className, children }: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`relative px-6 sm:px-8 md:px-12 max-w-6xl mx-auto ${className || ''}`}>
      {children}
    </section>
  );
}
