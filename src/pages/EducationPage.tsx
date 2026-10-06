import React from 'react';
import { YellowUnderline } from '../components/Highlight.tsx';
import { GraduationCap, Award, BookOpen, Compass } from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-18 lg:py-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Page Heading & 2. Short Introductory Line */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Qualification
            </span>
          </h1>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            My academic journey and educational qualifications.
          </p>
        </section>

        {/* 3. Education Timeline / 3-Card Layout */}
        <div className="relative">
          {/* Subtle Vertical Timeline Connector Line for Desktop */}
          <div
            className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-purple-500 opacity-60"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {/* Card 1: B.Com (Hons.) */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200">
              <div className="flex items-start gap-5">
                {/* Education Icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      <YellowUnderline>B.Com (Hons.)</YellowUnderline>
                    </h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                    Currently pursuing B.Com (Hons.) and developing my academic and professional knowledge.
                  </p>
                </div>
              </div>

              {/* Status Display */}
              <div className="w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex md:flex-col items-center md:items-end justify-between md:justify-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Status
                </span>
                <span className="text-base sm:text-lg font-bold text-blue-700">
                  Currently Pursuing
                </span>
              </div>
            </div>

            {/* Card 2: Class 12 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200">
              <div className="flex items-start gap-5">
                {/* Education Icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                  <Award className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Class 12
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-purple-700">
                    Higher Secondary Education
                  </p>
                </div>
              </div>

              {/* Percentage Result */}
              <div className="w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex md:flex-col items-center md:items-end justify-between md:justify-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Result
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <YellowUnderline>79%</YellowUnderline>
                </div>
              </div>
            </div>

            {/* Card 3: Class 10 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-200">
              <div className="flex items-start gap-5">
                {/* Education Icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
                  <BookOpen className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Class 10
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-indigo-700">
                    Secondary Education
                  </p>
                </div>
              </div>

              {/* Percentage Result */}
              <div className="w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex md:flex-col items-center md:items-end justify-between md:justify-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Result
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <YellowUnderline>84%</YellowUnderline>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Simple Closing Line */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Currently continuing my academic journey while developing practical digital skills.
          </p>
        </div>
      </div>
    </div>
  );
};
