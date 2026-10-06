import React from 'react';
import { YellowUnderline } from '../components/Highlight.tsx';
import { 
  TrendingUp, 
  Cpu, 
  Share2, 
  PenTool, 
  Globe, 
  Sparkles, 
  Palette, 
  Compass, 
  BookOpenCheck
} from 'lucide-react';

interface SkillCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  isPrimary?: boolean;
}

export const SkillsPage: React.FC = () => {
  const skills: SkillCard[] = [
    {
      title: 'Digital Marketing',
      description: 'Learning the fundamentals of digital marketing and exploring practical strategies for online growth.',
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-100',
      isPrimary: true,
    },
    {
      title: 'AI Automation',
      description: 'Learning how AI tools and automation can simplify tasks and improve digital workflows.',
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-100',
      isPrimary: true,
    },
    {
      title: 'Social Media Marketing',
      description: 'Developing knowledge of social media content, audience engagement and platform strategies.',
      icon: <Share2 className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Content Creation',
      description: 'Learning to create engaging and useful digital content for different platforms.',
      icon: <PenTool className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-100',
    },
    {
      title: 'Website Creation',
      description: 'Learning how to create and structure modern websites using digital and AI-powered tools.',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'AI Tools',
      description: 'Exploring AI tools that can support creativity, productivity and digital work.',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-100',
    },
    {
      title: 'Basic Graphic Design',
      description: 'Developing basic design skills for social media and digital content.',
      icon: <Palette className="w-5 h-5 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <div className="bg-white py-12 md:py-18 lg:py-22">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Page Heading & Introduction */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Digital Roadmap</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Here are the skills and areas I am currently{' '}
            <YellowUnderline>learning and developing</YellowUnderline> as part of my digital journey.
          </p>
        </section>

        {/* Skills Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon Header */}
                <div className="mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${skill.iconBg}`}
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Heading */}
                <h2 className="text-xl font-bold text-slate-900 mb-2.5">
                  {skill.isPrimary ? (
                    <YellowUnderline>{skill.title}</YellowUnderline>
                  ) : (
                    <span>{skill.title}</span>
                  )}
                </h2>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Status indicator without fake percentages */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-xs font-medium text-slate-500">
                  Active Learning Area
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Learning Approach Section at the bottom */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-700 uppercase tracking-wider">
            <BookOpenCheck className="w-4 h-4" />
            <span>Growth Mindset</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Currently Learning
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I am continuously{' '}
            <YellowUnderline>learning and practicing</YellowUnderline> these areas to build practical skills and prepare myself for future digital projects.
          </p>
        </section>
      </div>
    </div>
  );
};
