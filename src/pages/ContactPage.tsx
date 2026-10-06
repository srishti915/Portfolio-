import React, { useState } from 'react';
import { YellowUnderline } from '../components/Highlight.tsx';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Compass, 
  Sparkles 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="bg-white py-12 md:py-18 lg:py-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Page Heading & Introduction */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or want to connect? Feel free to reach out through any of the contact options below.
          </p>
        </section>

        {/* Contact Information Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* 1. Phone */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    <YellowUnderline>Phone</YellowUnderline>
                  </h2>
                  <a
                    href="tel:9110069692"
                    className="text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5 tracking-tight"
                  >
                    9110069692
                  </a>
                </div>
              </div>

              <button
                onClick={(e) => handleCopy('9110069692', 'phone', e)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Direct Voice Call</span>
              <a
                href="tel:9110069692"
                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>Call Now</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 2. WhatsApp */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    <YellowUnderline>WhatsApp</YellowUnderline>
                  </h2>
                  <a
                    href="https://wa.me/919110069692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5 tracking-tight"
                  >
                    9110069692
                  </a>
                </div>
              </div>

              <button
                onClick={(e) => handleCopy('9110069692', 'whatsapp', e)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Copy WhatsApp number"
                aria-label="Copy WhatsApp number"
              >
                {copiedKey === 'whatsapp' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Instant Messaging</span>
              <a
                href="https://wa.me/919110069692"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 3. Email */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between min-w-0">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base font-bold text-slate-900">
                    <YellowUnderline>Email</YellowUnderline>
                  </h2>
                  <a
                    href="mailto:srishtidigital36@gmail.com"
                    className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-purple-600 transition-colors block mt-0.5 truncate tracking-tight"
                  >
                    srishtidigital36@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={(e) => handleCopy('srishtidigital36@gmail.com', 'email', e)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer flex-shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Electronic Mail</span>
              <a
                href="mailto:srishtidigital36@gmail.com"
                className="inline-flex items-center gap-1 font-semibold text-purple-600 hover:text-purple-700"
              >
                <span>Send Email</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 4. Instagram */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-pink-300 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shadow-2xs">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    <YellowUnderline>Instagram</YellowUnderline>
                  </h2>
                  <a
                    href="https://instagram.com/srishti.diaries_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-slate-900 hover:text-pink-600 transition-colors block mt-0.5 tracking-tight"
                  >
                    @srishti.diaries_
                  </a>
                </div>
              </div>

              <button
                onClick={(e) => handleCopy('srishti.diaries_', 'instagram', e)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Copy Instagram handle"
                aria-label="Copy Instagram handle"
              >
                {copiedKey === 'instagram' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Social Profile</span>
              <a
                href="https://instagram.com/srishti.diaries_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-pink-600 hover:text-pink-700"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 5. Location (Full width on tablet/desktop) */}
          <div className="md:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Location
                </h2>
                <p className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5 tracking-tight">
                  Memco More, Dhanbad, Jharkhand
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Optional Contact CTA at the bottom */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Open Communication</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I’m always open to connecting, learning and exploring new opportunities.
          </p>
        </section>

      </div>
    </div>
  );
};
