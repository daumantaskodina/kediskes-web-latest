'use client';

import { useLanguage } from '@/app/language-context';
import { useState } from 'react';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: 'lt' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition duration-300"
      >
        <span className="font-medium">{language.toUpperCase()}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
          <button
            onClick={() => toggleLanguage('lt')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === 'lt' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Lietuvių
          </button>
          <button
            onClick={() => toggleLanguage('en')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === 'en' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
} 