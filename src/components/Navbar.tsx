import React, { useState } from 'react';
import { NavSection, NAV_ITEMS } from '../types.ts';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSelectSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: NavSection) => {
    onSelectSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo / Name on the left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-xs group-hover:scale-105 transition-transform duration-200">
              SP
            </div>
            <div>
              <span className="block font-bold text-lg text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                Srishti Pathak
              </span>
            </div>
          </button>

          {/* Navigation links on the right */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-blue-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* "Contact Me" button on the right */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm rounded-lg font-medium flex items-center justify-between cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                )}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xs cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
