import React from 'react';
import { YellowUnderline } from '../components/Highlight.tsx';
import { 
  Compass, 
  Lightbulb, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  ArrowRight
} from 'lucide-react';
import { NavSection } from '../types.ts';

interface AboutPageProps {
  onSelectSection?: (section: NavSection) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="bg-white py-12 md:py-18 lg:py-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Page Heading */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Personal Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            A welcoming look into my background, learning goals, and creative interests.
          </p>
        </section>

        {/* 2. Short Introduction Section */}
        <section className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              My name is Srishti Pathak. I am currently pursuing{' '}
              <YellowUnderline>B.Com (Hons.)</YellowUnderline> and developing my skills in{' '}
              <YellowUnderline>Digital Marketing</YellowUnderline> and{' '}
              <YellowUnderline>AI Automation</YellowUnderline>. I am interested in learning how digital platforms, creative content and AI-powered tools can be used to create better digital experiences.
            </p>

            <p>
              I enjoy learning new skills, exploring digital tools and working on{' '}
              <YellowUnderline>creative ideas</YellowUnderline>. Through my learning journey, I am focusing on building practical knowledge and developing myself professionally.
            </p>
          </div>
        </section>

        {/* 3. My Learning Journey Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              My Learning Journey
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Building a grounded, step-by-step foundation in modern digital capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5">
            <p className="text-slate-700 text-base leading-relaxed">
              I am currently developing my knowledge in Digital Marketing and AI Automation and building practical skills step by step. Rather than rushing, I prioritize understanding core concepts deeply—from how online communication drives engagement to how automated workflows eliminate repetitive tasks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Marketing Foundations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gaining practical clarity on audience connection, digital media, and thoughtful message delivery across platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Smart Workflow Automation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Exploring practical AI tools and structured automation logic to streamline productivity and solve challenges efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What Drives Me Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Drives Me
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              The core principles inspiring my personal and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Learning */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Learning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A genuine enthusiasm for acquiring new knowledge, developing structured habits, and continuously expanding my understanding of the business and digital worlds.
              </p>
            </div>

            {/* Creativity */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Creativity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Finding inspiration in fresh ideas, artistic aesthetics, and imaginative approaches to present information clearly and elegantly.
              </p>
            </div>

            {/* Digital Skills */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Digital Skills
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Embracing the modern digital landscape by studying online outreach channels, content presentation, and web fundamentals.
              </p>
            </div>

            {/* Exploring AI Tools */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Exploring AI Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Staying curious about artificial intelligence advancements, experimenting with prompt workflows, and leveraging smart tools for productivity.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
