import React from 'react';
import { 
  TrendingUp, 
  Cpu, 
  Palette, 
  Sparkles, 
  Workflow, 
  Target, 
  Layers
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Soft Glow (Professional Blue and Purple) */}
      <div 
        className="absolute -top-6 -left-6 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-8 -right-6 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Visual Composition Container */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-200/40 p-6 sm:p-7 overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
            <span className="text-xs font-semibold text-slate-400 ml-2 tracking-wider uppercase">
              Core Competencies & Vision
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/70">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>Synergy & Progress</span>
          </div>
        </div>

        {/* 4 Pillars Grid: Digital Marketing, AI Automation, Creativity, Personal Growth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {/* Pillar 1: Digital Marketing */}
          <div className="group relative bg-gradient-to-b from-blue-50/60 to-white p-4 rounded-xl border border-blue-100/80 hover:border-blue-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                Reach
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Digital Marketing</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Audience reach, campaign dynamics, and strategic online visibility.
            </p>
            {/* Visual metric representation */}
            <div className="mt-3 pt-2.5 border-t border-blue-100/60 flex items-end gap-1.5 h-7">
              <div className="w-1/4 bg-blue-200 rounded-t h-2.5"></div>
              <div className="w-1/4 bg-blue-300 rounded-t h-4"></div>
              <div className="w-1/4 bg-blue-400 rounded-t h-5"></div>
              <div className="w-1/4 bg-gradient-to-t from-blue-600 to-amber-400 rounded-t h-7 relative">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>
            </div>
          </div>

          {/* Pillar 2: AI Automation */}
          <div className="group relative bg-gradient-to-b from-purple-50/60 to-white p-4 rounded-xl border border-purple-100/80 hover:border-purple-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
                Smart Flow
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">AI Automation</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Automated processes, intelligent task flows, and productivity systems.
            </p>
            {/* Workflow nodes graphic */}
            <div className="mt-3 pt-2.5 border-t border-purple-100/60 flex items-center justify-between text-[11px] text-purple-700">
              <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-purple-200 text-[10px]">
                <Workflow className="w-2.5 h-2.5 text-purple-600" />
                <span>Task</span>
              </div>
              <span className="text-purple-400 font-bold">→</span>
              <div className="flex items-center gap-1 bg-amber-100/70 px-1.5 py-0.5 rounded border border-amber-300 text-slate-900 text-[10px] font-medium">
                <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                <span>Automated</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Creativity */}
          <div className="group relative bg-gradient-to-b from-purple-50/30 via-slate-50/50 to-white p-4 rounded-xl border border-slate-200/80 hover:border-purple-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-xs">
                <Palette className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                Ideation
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Creativity</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Expressive content ideas, balanced aesthetics, and innovative framing.
            </p>
            {/* Color swatches */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-2xs" title="Professional Blue"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-purple-600 shadow-2xs" title="Creative Purple"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-2xs" title="Subtle Yellow Accent"></span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Harmonious</span>
            </div>
          </div>

          {/* Pillar 4: Personal Growth */}
          <div className="group relative bg-gradient-to-b from-blue-50/30 via-slate-50/50 to-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                Ascent
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Personal Growth</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Continuous learning, expanding perspectives, and building future capability.
            </p>
            {/* Progress representation */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mr-2">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-400 h-2 rounded-full w-4/5"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-600">Evolving</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium text-slate-700">
              Commerce fundamentals empowered by modern digital skillsets
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
            Forward Driven
          </span>
        </div>
      </div>
    </div>
  );
};
