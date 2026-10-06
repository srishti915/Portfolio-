import React from 'react';
import { NavSection } from '../types.ts';
import { HeroVisual } from '../components/HeroVisual.tsx';
import { YellowUnderline } from '../components/Highlight.tsx';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

interface HomePageProps {
  onSelectSection: (section: NavSection) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectSection }) => {
  const scrollToExplore = () => {
    // Gentle scroll or explore trigger
    window.scrollTo({ top: window.innerHeight * 0.4, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Welcome to my official portfolio</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Srishti Pathak
                </span>
              </h1>

              {/* Professional Headline */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 tracking-tight">
                B.Com (Hons.) Student | Digital Marketing & AI Automation Learner
              </p>

              {/* Short Introduction with subtle yellow underline on important words */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I’m a B.Com (Hons.) student building my skills in{' '}
                <YellowUnderline>Digital Marketing</YellowUnderline> and{' '}
                <YellowUnderline>AI Automation</YellowUnderline>, with a passion for creativity and learning.
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Button 1: Explore My Portfolio */}
                <button
                  onClick={() => onSelectSection('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Button 2: Contact Me */}
                <button
                  onClick={() => onSelectSection('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-purple-600" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom of Home Page: Small, elegant scroll indicator */}
      <div className="py-6 flex flex-col items-center justify-center text-center">
        <button
          onClick={scrollToExplore}
          className="group inline-flex flex-col items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="tracking-widest uppercase text-[11px]">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-blue-600 transition-colors" />
        </button>
      </div>
    </div>
  );
};
