import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">Srishti Pathak</span>
          <span>·</span>
          <span>Personal Portfolio</span>
        </div>
        <p>© {new Date().getFullYear()} Srishti Pathak. All rights reserved.</p>
      </div>
    </footer>
  );
};
