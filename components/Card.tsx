import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  body?: string;
}

export default function Card({ title, subtitle, body, className, ...rest }: CardProps) {
  return (
    <div
      className={`group rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/70 shadow-sm transition-shadow duration-300 hover:shadow-md ${className || ''}`}
      {...rest}
    >
      <div className="p-5">
        {subtitle && <div className="mb-2 text-sm text-slate-500">{subtitle}</div>}
        <h3 className="text-lg font-semibold tracking-tight text-slate-800">{title}</h3>
        {body && <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>}
        <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-800/90 group-hover:underline">
          View
          <span className="ml-2 inline-block h-1 w-8 group-hover:w-16 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}
