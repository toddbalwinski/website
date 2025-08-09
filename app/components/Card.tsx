import * as React from "react";

export default function Card({
  title,
  subtitle,
  body,
  className,
  ...rest
}: {
  title: string;
  subtitle?: string;
  body?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/70 shadow-sm transition-shadow duration-300 hover:shadow-md ${
        className || ""
      }`}
      {...rest}
    >
      <div className="p-5">
        {subtitle && (
          <div className="mb-2 text-sm text-slate-500">{subtitle}</div>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h3>
        {body && (
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {body}
          </p>
        )}
        <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-800/90 group-hover:underline">
          View
          <span className="ml-2 inline-block h-1 w-8 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
        </div>
      </div>
    </div>
  );
}
