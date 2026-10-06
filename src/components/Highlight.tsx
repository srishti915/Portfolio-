import React from 'react';

interface UnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export const YellowUnderline: React.FC<UnderlineProps> = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block font-semibold text-slate-900 ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-2 text-amber-400 pointer-events-none overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 1 5 Q 50 1.5 99 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};
