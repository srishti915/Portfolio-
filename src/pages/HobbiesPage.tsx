import React from 'react';
import { YellowUnderline } from '../components/Highlight.tsx';
import { Sparkles, Heart } from 'lucide-react';
import guitarImg from '../assets/images/guitar.jpg';
import artImg from '../assets/images/art.jpg';
import craftImg from '../assets/images/craft.jpg';

interface HobbyItem {
  title: string;
  imageSrc: string;
  imageAlt: string;
  renderDescription: () => React.ReactNode;
}

export const HobbiesPage: React.FC = () => {
  const hobbies: HobbyItem[] = [
    {
      title: 'Guitar',
      imageSrc: guitarImg,
      imageAlt: 'Realistic acoustic guitar in a bright studio setting',
      renderDescription: () => (
        <span>
          Playing guitar is one of my favorite creative activities. It gives me a way to enjoy music, practice regularly and express my{' '}
          <YellowUnderline>creativity</YellowUnderline>.
        </span>
      ),
    },
    {
      title: 'Art',
      imageSrc: artImg,
      imageAlt: 'Artist painting canvas with brushes and paints in an art studio',
      renderDescription: () => (
        <span>
          Art gives me a{' '}
          <YellowUnderline>creative space</YellowUnderline> to explore ideas, experiment with different techniques and express myself visually.
        </span>
      ),
    },
    {
      title: 'Craft',
      imageSrc: craftImg,
      imageAlt: 'Handmade crafts, delicate origami paper art, and DIY decor work',
      renderDescription: () => (
        <span>
          Craft allows me to turn simple ideas and materials into{' '}
          <YellowUnderline>creative handmade work</YellowUnderline>.
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white py-12 md:py-18 lg:py-22">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Heading & Introduction */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-100" />
            <span>Personal Pursuits</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hobbies &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Interests
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond academics and digital learning, I enjoy{' '}
            <YellowUnderline>creative activities</YellowUnderline> that allow me to express myself and enjoy my free time.
          </p>
        </section>

        {/* Main Hobbies Section: 3 Separate Cards in 1 Row on Desktop */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 4:3 Image Container with smooth hover pop effect, non-clickable */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 relative shadow-inner">
                  <img
                    src={hobby.imageSrc}
                    alt={hobby.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 pointer-events-none select-none"
                    style={{ aspectRatio: '4 / 3' }}
                  />
                </div>

                {/* Hobby Title */}
                <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-3 tracking-tight">
                  {hobby.title}
                </h2>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hobby.renderDescription()}
                </p>
              </div>

              {/* Aesthetic subtle bottom accent line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Creative Hobby
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Expression
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Creativity in My Life Section */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Aesthetic Balance</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Creativity in My Life
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Music, art and craft are meaningful parts of how I explore{' '}
            <YellowUnderline>creativity</YellowUnderline>, learn new things and enjoy my free time.
          </p>
        </section>

      </div>
    </div>
  );
};
