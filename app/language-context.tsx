'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations dictionary
const translations: Record<string, Record<Language, string>> = {
  // Header Navigation
  'nav.services': {
    lt: 'Paslaugos',
    en: 'Services',
  },
  'nav.products': {
    lt: 'Produktai',
    en: 'Products',
  },
  'nav.examples': {
    lt: 'Pavyzdžiai',
    en: 'Examples',
  },
  'nav.equipment': {
    lt: 'Įranga',
    en: 'Equipment',
  },
  'nav.about': {
    lt: 'Apie mus',
    en: 'About us',
  },
  'nav.contact': {
    lt: 'Kontaktai',
    en: 'Contact',
  },
  'nav.contact-us': {
    lt: 'Susisiekti',
    en: 'Contact us',
  },

  // Hero Section
  'hero.title': {
    lt: 'Tikslūs CNC tekinimo sprendimai',
    en: 'Precise CNC Turning Solutions',
  },
  'hero.description': {
    lt: 'Profesionalūs metalo apdirbimo paslaugos naudojant modernius CNC stakles. Garantuojame aukščiausią kokybę ir tikslumą kiekviename projekte.',
    en: 'Professional metal processing services using modern CNC machines. We guarantee the highest quality and precision in every project.',
  },

  // Services Section
  'services.title': {
    lt: 'Mūsų paslaugos',
    en: 'Our Services',
  },
  'services.subtitle': {
    lt: 'Specializuojamės tikslaus metalo apdirbimo srityje',
    en: 'We specialize in precision metal processing',
  },
  'services.turning.title': {
    lt: 'Tekinimas ir frezavimas',
    en: 'Turning and Milling',
  },
  'services.turning.description': {
    lt: 'Tikslus metalo detalių apdirbimas naudojant modernius CNC stakles',
    en: 'Precise metal parts processing using modern CNC machines',
  },
  'services.turning.feature1': {
    lt: 'Tolerancija iki ±0.01mm',
    en: 'Tolerance up to ±0.01mm',
  },
  'services.turning.feature2': {
    lt: 'Įvairios medžiagos',
    en: 'Various materials',
  },
  'services.turning.feature3': {
    lt: 'Greitas vykdymas',
    en: 'Fast execution',
  },
  'services.threading.title': {
    lt: 'Sriegiai ir skylės',
    en: 'Threads and Holes',
  },
  'services.threading.description': {
    lt: 'Tikslūs sriegiai ir skylių apdirbimas pagal techninius brėžinius',
    en: 'Precise threads and hole processing according to technical drawings',
  },
  'services.threading.feature1': {
    lt: 'Metriniai ir coliniai sriegiai',
    en: 'Metric and inch threads',
  },
  'services.threading.feature2': {
    lt: 'Specialūs profiliai',
    en: 'Special profiles',
  },
  'services.threading.feature3': {
    lt: 'Aukštas tikslumas',
    en: 'High precision',
  },
  'services.finishing.title': {
    lt: 'Apdaila ir kontrolė',
    en: 'Finishing and Quality Control',
  },
  'services.finishing.description': {
    lt: 'Galutinis apdirbimas ir kokybės užtikrinimas',
    en: 'Final processing and quality assurance',
  },
  'services.finishing.feature1': {
    lt: 'Precizinis šlifavimas',
    en: 'Precision grinding',
  },
  'services.finishing.feature2': {
    lt: 'Matavimo įranga',
    en: 'Measuring equipment',
  },
  'services.finishing.feature3': {
    lt: 'Kokybės sertifikatai',
    en: 'Quality certificates',
  },

  // Numbered Grid Services
  'numbered.turning': {
    lt: 'CNC tekinimas',
    en: 'CNC turning',
  },
  'numbered.turning.desc': {
    lt: 'Tikslus metalo detalių tekinimas',
    en: 'Precise metal parts turning',
  },
  'numbered.milling': {
    lt: 'Frezavimas',
    en: 'Milling',
  },
  'numbered.milling.desc': {
    lt: 'Sudėtingų formų apdirbimas',
    en: 'Complex shape processing',
  },
  'numbered.drilling': {
    lt: 'Gręžimas',
    en: 'Drilling',
  },
  'numbered.drilling.desc': {
    lt: 'Tikslūs skylių apdirbimas',
    en: 'Precise hole processing',
  },
  'numbered.threading': {
    lt: 'Sriegių pjovimas',
    en: 'Thread cutting',
  },
  'numbered.threading.desc': {
    lt: 'Standartiniai ir specialūs sriegiai',
    en: 'Standard and special threads',
  },
  'numbered.grinding': {
    lt: 'Šlifavimas',
    en: 'Grinding',
  },
  'numbered.grinding.desc': {
    lt: 'Aukščiausios kokybės paviršius',
    en: 'Highest quality surface',
  },
  'numbered.control': {
    lt: 'Kontrolė',
    en: 'Quality Control',
  },
  'numbered.control.desc': {
    lt: 'Kokybės užtikrinimas',
    en: 'Quality assurance',
  },

  // Products Section
  'products.title': {
    lt: 'Ką galime pagaminti',
    en: 'What We Can Produce',
  },
  'products.subtitle': {
    lt: 'Mūsų CNC staklės leidžia gaminti įvairias tikslias detales iš skirtingų metalų',
    en: 'Our CNC machines allow us to produce various precise parts from different metals',
  },
  'products.shafts.title': {
    lt: 'Velenai ir ašys',
    en: 'Shafts and Axles',
  },
  'products.shafts.description': {
    lt: 'Tiksliai apdirbti velenai ir ašys pagal jūsų techninius reikalavimus.',
    en: 'Precisely machined shafts and axles according to your technical requirements.',
  },
  'products.shafts.tag1': {
    lt: 'Tolerancijos iki ±0.01mm',
    en: 'Tolerances up to ±0.01mm',
  },
  'products.shafts.tag2': {
    lt: 'Paviršiaus Ra 0.4',
    en: 'Surface Ra 0.4',
  },
  'products.shafts.tag3': {
    lt: 'Grūdinimas',
    en: 'Hardening',
  },
  'products.threads.title': {
    lt: 'Srieginės jungtys',
    en: 'Threaded Connections',
  },
  'products.threads.description': {
    lt: 'Standartinės ir nestandartinės srieginės jungtys pagal užsakovo poreikius.',
    en: 'Standard and non-standard threaded connections according to customer needs.',
  },
  'products.threads.tag1': {
    lt: 'Metriniai',
    en: 'Metric',
  },
  'products.threads.tag2': {
    lt: 'Coliniai',
    en: 'Inch',
  },
  'products.threads.tag3': {
    lt: 'Specialūs sriegiai',
    en: 'Special threads',
  },
  'products.hydraulic.title': {
    lt: 'Hidrauliniai komponentai',
    en: 'Hydraulic Components',
  },
  'products.hydraulic.description': {
    lt: 'Aukšto slėgio hidraulinių sistemų komponentai, vožtuvai, jungtys ir kitos detalės.',
    en: 'High pressure hydraulic system components, valves, fittings and other parts.',
  },
  'products.hydraulic.tag1': {
    lt: 'Aukštas slėgis',
    en: 'High pressure',
  },
  'products.hydraulic.tag2': {
    lt: 'Hermetiškumas',
    en: 'Hermeticity',
  },
  'products.hydraulic.tag3': {
    lt: 'Ilgaamžiškumas',
    en: 'Longevity',
  },
  'products.bushings.title': {
    lt: 'Įvorės ir guoliai',
    en: 'Bushings and Bearings',
  },
  'products.bushings.description': {
    lt: 'Specialios įvorės, slydimo guoliai ir kitos besisukančios detalės.',
    en: 'Special bushings, sliding bearings and other rotating parts.',
  },
  'products.bushings.tag1': {
    lt: 'Bronza',
    en: 'Bronze',
  },
  'products.bushings.tag2': {
    lt: 'Žalvaris',
    en: 'Brass',
  },
  'products.bushings.tag3': {
    lt: 'Teflono įdėklai',
    en: 'Teflon inserts',
  },
  'products.gears.title': {
    lt: 'Krumpliaračiai ir žvaigždutės',
    en: 'Gears and Sprockets',
  },
  'products.gears.description': {
    lt: 'Tikslūs krumpliaračiai, žvaigždutės ir kitos pavaros detalės.',
    en: 'Precise gears, sprockets and other drive parts.',
  },
  'products.gears.tag1': {
    lt: 'Moduliniai krumpliaračiai',
    en: 'Modular gears',
  },
  'products.gears.tag2': {
    lt: 'Grandinių žvaigždutės',
    en: 'Chain sprockets',
  },
  'products.gears.tag3': {
    lt: 'Specialūs profiliai',
    en: 'Special profiles',
  },
  'products.medical.title': {
    lt: 'Medicininės įrangos detalės',
    en: 'Medical Equipment Parts',
  },
  'products.medical.description': {
    lt: 'Ypatingai tikslios detalės medicininei įrangai su griežtais standartais.',
    en: 'Extremely precise parts for medical equipment with strict standards.',
  },
  'products.medical.tag1': {
    lt: 'Nerūdijantis plienas',
    en: 'Stainless steel',
  },
  'products.medical.tag2': {
    lt: 'Titanai',
    en: 'Titanium',
  },
  'products.medical.tag3': {
    lt: 'Medicininis aliuminis',
    en: 'Medical aluminum',
  },

  // Portfolio Section
  'portfolio.title': {
    lt: 'Mūsų darbų pavyzdžiai',
    en: 'Our Work Examples',
  },
  'portfolio.subtitle': {
    lt: 'Peržiūrėkite mūsų atliktų darbų pavyzdžius. Kiekvienas projektas atliktas laikantis aukščiausių kokybės standartų.',
    en: 'Browse examples of our completed work. Each project is carried out according to the highest quality standards.',
  },
  'portfolio.example1': {
    lt: 'Precizinis veleno komponentas su 0.01mm tolerancija',
    en: 'Precision shaft component with 0.01mm tolerance',
  },
  'portfolio.example2': {
    lt: 'Srieginė jungtis iš nerūdijančio plieno',
    en: 'Threaded connection made of stainless steel',
  },
  'portfolio.example3': {
    lt: 'Hidraulinis komponentas aukšto slėgio sistemoms',
    en: 'Hydraulic component for high-pressure systems',
  },
  'portfolio.example4': {
    lt: 'Bronzinė įvorė su tiksliais matmenimis',
    en: 'Bronze bushing with precise dimensions',
  },
  'portfolio.example5': {
    lt: 'Krumpliaratis su specialiu profiliu',
    en: 'Gear with special profile',
  },
  'portfolio.example6': {
    lt: 'Medicininės įrangos detalė iš titano',
    en: 'Medical equipment part made of titanium',
  },
  'portfolio.example7': {
    lt: 'Aliuminio detalė su sudėtinga geometrija',
    en: 'Aluminum part with complex geometry',
  },
  'portfolio.example8': {
    lt: 'Žalvarinė jungtis su tiksliais sriegiais',
    en: 'Brass connection with precise threads',
  },

  // Precision Metrics Section
  'metrics.title': {
    lt: 'Mūsų tikslumas skaičiais',
    en: 'Our Precision in Numbers',
  },
  'metrics.subtitle': {
    lt: 'Kiekvienas projektas vykdomas laikantis griežčiausių tikslumų standartų',
    en: 'Each project is carried out according to the strictest precision standards',
  },
  'metrics.tolerance': {
    lt: 'Tolerancija',
    en: 'Tolerance',
  },
  'metrics.tolerance.description': {
    lt: 'Aukščiausias tikslumas',
    en: 'Highest accuracy',
  },
  'metrics.roughness': {
    lt: 'Paviršiaus šiurkštumas',
    en: 'Surface roughness',
  },
  'metrics.roughness.description': {
    lt: 'Glotnūs paviršiai',
    en: 'Smooth surfaces',
  },
  'metrics.response': {
    lt: 'Atsako laikas',
    en: 'Response time',
  },
  'metrics.response.description': {
    lt: 'Greitas reagavimas',
    en: 'Fast response',
  },
  'metrics.experience': {
    lt: 'Patirtis',
    en: 'Experience',
  },
  'metrics.experience.description': {
    lt: 'Profesionalumas',
    en: 'Professionalism',
  },
  'metrics.val': {
    lt: 'val',
    en: 'hours',
  },
  'metrics.metai': {
    lt: 'metų',
    en: 'years',
  },

  // Equipment Section
  'equipment.title': {
    lt: 'Mūsų įranga ir įrankiai',
    en: 'Our Equipment and Tools',
  },
  'equipment.subtitle': {
    lt: 'Naudojame modernią CNC įrangą ir precizinės kokybės įrankius tiksliausiems gamybos procesams užtikrinti',
    en: 'We use modern CNC equipment and precision quality tools to ensure the most accurate manufacturing processes',
  },
  'equipment.cnc.title': {
    lt: 'CNC tekinimo ir frezavimo staklės',
    en: 'CNC Turning and Milling Machines',
  },
  'equipment.cnc.description': {
    lt: 'Mūsų dirbtuvėse naudojamos naujausios CNC tekinimo ir frezavimo staklės, kurios leidžia gaminti detales su ypač aukštu tikslumu ir sudėtinga geometrija. Modernūs įrengimai užtikrina stabilų procesą ir patikimą rezultatą.',
    en: 'Our workshop uses the latest CNC turning and milling machines, which allow us to produce parts with extremely high precision and complex geometry. Modern equipment ensures a stable process and reliable results.',
  },
  'equipment.tools.title': {
    lt: 'Pažangūs įrankiai ir matavimo įranga',
    en: 'Advanced Tools and Measuring Equipment',
  },
  'equipment.tools.description': {
    lt: 'Precizinės kokybės pjovimo įrankiai ir moderniausių technologijų matavimo prietaisai leidžia užtikrinti aukščiausius tikslumo standartus kiekvienai detalei. Nuolat investuojame į naujausius įrankius ir matavimo įrangą.',
    en: 'Precision cutting tools and state-of-the-art measuring instruments ensure the highest standards of accuracy for each part. We constantly invest in the latest tools and measuring equipment.',
  },
  'equipment.gallery.title': {
    lt: 'Mūsų įrangos galerija',
    en: 'Our Equipment Gallery',
  },

  // About Section
  'about.title': {
    lt: 'Apie mus',
    en: 'About Us',
  },
  'about.description1': {
    lt: 'MB "Kediškės" - patikimas partneris tikslaus metalo apdirbimo srityje. Turime daugiametę patirtį ir naudojame moderniausias CNC technologijas.',
    en: 'MB "Kediškės" - a reliable partner in the field of precision metal processing. We have many years of experience and use the most modern CNC technologies.',
  },
  'about.description2': {
    lt: 'Mūsų komanda užtikrina aukščiausią kokybę ir tikslumą kiekviename projekte. Dirbame su įvairiomis metalo rūšimis ir galime įgyvendinti net sudėtingiausius užsakymus.',
    en: 'Our team ensures the highest quality and precision in every project. We work with various types of metals and can implement even the most complex orders.',
  },
  'about.feature1': {
    lt: 'Daugiau nei 10 metų patirties',
    en: 'More than 10 years of experience',
  },
  'about.feature2': {
    lt: 'Modernūs CNC įrengimai',
    en: 'Modern CNC equipment',
  },
  'about.feature3': {
    lt: 'Individualus požiūris į kiekvieną projektą',
    en: 'Individual approach to each project',
  },

  // Contact Section
  'contact.title': {
    lt: 'Susisiekite su mumis',
    en: 'Contact Us',
  },
  'contact.subtitle': {
    lt: 'Esame pasiruošę padėti įgyvendinti jūsų projektus',
    en: 'We are ready to help implement your projects',
  },
  'contact.questions': {
    lt: 'Turite klausimų?',
    en: 'Have questions?',
  },
  'contact.questions.description': {
    lt: 'Susisiekite su mumis telefonu arba el. paštu ir atsakysime į visus jūsų klausimus. Siūlome nemokamą konsultaciją dėl jūsų projekto.',
    en: 'Contact us by phone or email and we will answer all your questions. We offer a free consultation for your project.',
  },
  'contact.email': {
    lt: 'El. paštas',
    en: 'Email',
  },
  'contact.email.description': {
    lt: 'Parašykite mums laišką bet kuriuo metu',
    en: 'Write us a message anytime',
  },

  // Footer
  'footer.slogan': {
    lt: 'Tikslūs metalo tekinimo CNC staklėmis sprendimai',
    en: 'Precise metal turning solutions with CNC machines',
  },
  'footer.description': {
    lt: 'MB "Kediškės" - jūsų patikimas partneris metalo apdirbimo srityje',
    en: 'MB "Kediškės" - your reliable partner in the field of metal processing',
  },
  'footer.contacts': {
    lt: 'Kontaktai',
    en: 'Contacts',
  },
  'footer.services': {
    lt: 'Paslaugos',
    en: 'Services',
  },
  'footer.service1': {
    lt: 'CNC tekinimas',
    en: 'CNC turning',
  },
  'footer.service2': {
    lt: 'Tikslus metalo apdirbimas',
    en: 'Precise metal processing',
  },
  'footer.service3': {
    lt: 'Individualūs sprendimai',
    en: 'Individual solutions',
  },
  'footer.service4': {
    lt: 'Smulkių serijų gamyba',
    en: 'Small series production',
  },
  'footer.copyright': {
    lt: '© 2024 MB "Kediškės". Visos teisės saugomos.',
    en: '© 2024 MB "Kediškės". All rights reserved.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('lt');
  
  // Initialize language from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'lt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][language];
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 