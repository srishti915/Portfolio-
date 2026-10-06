/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavSection } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { EducationPage } from './pages/EducationPage.tsx';
import { SkillsPage } from './pages/SkillsPage.tsx';
import { HobbiesPage } from './pages/HobbiesPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  // Default to 'contact' as requested ("Highlight 'Contact' because this is the current page.")
  const getInitialSection = (): NavSection => {
    const hash = window.location.hash.replace('#', '') as NavSection;
    const validSections: NavSection[] = ['home', 'about', 'education', 'skills', 'hobbies', 'contact'];
    if (validSections.includes(hash)) return hash;
    return 'contact';
  };

  const [activeSection, setActiveSection] = useState<NavSection>(getInitialSection);

  const handleSelectSection = (section: NavSection) => {
    setActiveSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      const validSections: NavSection[] = ['home', 'about', 'education', 'skills', 'hobbies', 'contact'];
      if (validSections.includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-900">
      {/* Header / Navbar */}
      <Navbar activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Main Content Area: Renders the active section */}
      <main className="flex-1">
        {activeSection === 'contact' && <ContactPage />}
        {activeSection === 'hobbies' && <HobbiesPage />}
        {activeSection === 'skills' && <SkillsPage />}
        {activeSection === 'education' && <EducationPage />}
        {activeSection === 'about' && <AboutPage onSelectSection={handleSelectSection} />}
        {activeSection === 'home' && <HomePage onSelectSection={handleSelectSection} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
