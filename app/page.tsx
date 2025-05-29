'use client';

import { Phone, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import './global-scroll.css'
import { useEffect } from 'react'
import { useLanguage } from "./language-context"
import { LanguageSwitch } from "@/components/language-switch"

export default function HomePage() {
  const { t } = useLanguage();
  
  // Handle smooth scrolling for browsers that don't support CSS scroll-behavior
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element is an anchor tag with a hash
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          // Account for header height with a small offset
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener to handle clicks
    document.addEventListener('click', handleSmoothScroll);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header - Clean Causal Style */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">KEDIŠKĖS</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#paslaugos" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.services')}
            </a>
            <a href="#produktai" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.products')}
            </a>
            <a href="#pavyzdziai" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.examples')}
            </a>
            <a href="#iranga" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.equipment')}
            </a>
            <a href="#apie" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.about')}
            </a>
            <a href="#kontaktai" className="text-gray-600 hover:text-gray-900 text-sm transition duration-300">
              {t('nav.contact')}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+370 6 790 9655</span>
            </div>
            <a href="#kontaktai" className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-8 py-4 text-sm inline-flex items-center">
              {t('nav.contact-us')}
            </a>
            <LanguageSwitch />
          </div>
        </div>
      </header>

      {/* Hero Section - Causal Style with Ruler Pattern */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 px-6 overflow-hidden">
        {/* Ruler Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 99px,
                #374151 99px,
                #374151 101px,
                transparent 101px,
                transparent 199px,
                #374151 199px,
                #374151 201px,
                transparent 201px,
                transparent 299px,
                #374151 299px,
                #374151 301px,
                transparent 301px,
                transparent 399px,
                #374151 399px,
                #374151 401px,
                transparent 401px,
                transparent 499px,
                #374151 499px,
                #374151 501px
              )
            `,
            backgroundSize: "500px 100%",
          }}
        />

        {/* Ruler tick marks at top and bottom */}
        <div
          className="absolute top-0 left-0 right-0 h-2 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 24px,
                #374151 24px,
                #374151 26px,
                transparent 26px,
                transparent 49px,
                #374151 49px,
                #374151 51px,
                transparent 51px,
                transparent 74px,
                #374151 74px,
                #374151 76px,
                transparent 76px,
                transparent 99px,
                #374151 99px,
                #374151 101px,
                transparent 101px,
                transparent 124px,
                #374151 124px,
                #374151 126px
              )
            `,
            backgroundSize: "125px 100%",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-2 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 24px,
                #374151 24px,
                #374151 26px,
                transparent 26px,
                transparent 49px,
                #374151 49px,
                #374151 51px,
                transparent 51px,
                transparent 74px,
                #374151 74px,
                #374151 76px,
                transparent 76px,
                transparent 99px,
                #374151 99px,
                #374151 101px,
                transparent 101px,
                transparent 124px,
                #374151 124px,
                #374151 126px
              )
            `,
            backgroundSize: "125px 100%",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="mt-16 text-center">
            <a 
              href="#kontaktai"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-5 text-base font-medium inline-flex items-center"
              style={{ padding: '1.25rem 2rem', fontSize: '1.125rem' }}
            >
              {t('nav.contact-us')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Cards */}
      <section id="paslaugos" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">{t('services.title')}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/generic/CNC Precision Engineering.jpg"
                  alt={t('services.turning.title')}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('services.turning.title')}</h4>
              <p className="text-gray-600 mb-6">{t('services.turning.description')}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.turning.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.turning.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.turning.feature3')}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/generic/sregiai.jpg"
                  alt={t('services.threading.title')}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('services.threading.title')}</h4>
              <p className="text-gray-600 mb-6">{t('services.threading.description')}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.threading.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.threading.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.threading.feature3')}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/generic/CNC Precision Machining Aerospace.png"
                  alt={t('services.finishing.title')}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('services.finishing.title')}</h4>
              <p className="text-gray-600 mb-6">{t('services.finishing.description')}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.finishing.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.finishing.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {t('services.finishing.feature3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Grid - Causal Style */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">01</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.turning')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.turning.desc')}</p>
            </div>

            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">02</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.milling')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.milling.desc')}</p>
            </div>

            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">03</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.drilling')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.drilling.desc')}</p>
            </div>

            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">04</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.threading')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.threading.desc')}</p>
            </div>

            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">05</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.grinding')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.grinding.desc')}</p>
            </div>

            <div className="text-left">
              <div className="text-2xl font-light text-emerald-600 mb-2">06</div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">{t('numbered.control')}</h4>
              <p className="text-sm text-gray-500">{t('numbered.control.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Produce Section */}
      <section id="produktai" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">{t('products.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/generic/precision-shaft.jpg",
                titleKey: "products.shafts.title",
                descriptionKey: "products.shafts.description",
                tagsKeys: ["products.shafts.tag1", "products.shafts.tag2", "products.shafts.tag3"],
              },
              {
                image: "/images/generic/sregiai.jpg",
                titleKey: "products.threads.title",
                descriptionKey: "products.threads.description",
                tagsKeys: ["products.threads.tag1", "products.threads.tag2", "products.threads.tag3"],
              },
              {
                image: "/images/generic/CNC Precision Engineering.jpg",
                titleKey: "products.hydraulic.title",
                descriptionKey: "products.hydraulic.description",
                tagsKeys: ["products.hydraulic.tag1", "products.hydraulic.tag2", "products.hydraulic.tag3"],
              },
              {
                image: "/images/generic/precision-shaft.jpg",
                titleKey: "products.bushings.title",
                descriptionKey: "products.bushings.description",
                tagsKeys: ["products.bushings.tag1", "products.bushings.tag2", "products.bushings.tag3"],
              },
              {
                image: "/images/generic/CNC Precision Machining Aerospace.png",
                titleKey: "products.gears.title",
                descriptionKey: "products.gears.description",
                tagsKeys: ["products.gears.tag1", "products.gears.tag2", "products.gears.tag3"],
              },
              {
                image: "/images/generic/CNC Precision Engineering.jpg",
                titleKey: "products.medical.title",
                descriptionKey: "products.medical.description",
                tagsKeys: ["products.medical.tag1", "products.medical.tag2", "products.medical.tag3"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={t(item.titleKey)}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t(item.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tagsKeys.map((tagKey, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {t(tagKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#kontaktai"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-5 text-base font-medium inline-flex items-center"
              style={{ padding: '1.25rem 2rem', fontSize: '1.125rem' }}
            >
              {t('nav.contact-us')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="pavyzdziai" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">{t('portfolio.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "CNC apdirbimo pavyzdys 1",
                descriptionKey: "portfolio.example1",
                image: "/images/examples/IMG_5936_Convert_to_JPEG.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 2",
                descriptionKey: "portfolio.example2",
                image: "/images/examples/IMG_5937.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 3",
                descriptionKey: "portfolio.example3",
                image: "/images/examples/IMG_5938.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 4",
                descriptionKey: "portfolio.example4",
                image: "/images/examples/IMG_5939.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 5",
                descriptionKey: "portfolio.example5",
                image: "/images/examples/IMG_5940.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 6",
                descriptionKey: "portfolio.example6",
                image: "/images/examples/IMG_5936_Convert_to_JPEG.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 7",
                descriptionKey: "portfolio.example7",
                image: "/images/examples/IMG_5937.jpg",
              },
              {
                title: "CNC apdirbimo pavyzdys 8",
                descriptionKey: "portfolio.example8",
                image: "/images/examples/IMG_5938.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-2xl shadow-sm group bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium text-sm">{t(item.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Metrics Section - Dark Green like Causal */}
      <section className="py-24 px-6 bg-emerald-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-semibold mb-4">{t('metrics.title')}</h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t('metrics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-emerald-700/50 rounded-2xl p-8 border border-emerald-600/30">
              <div className="text-4xl font-semibold text-emerald-200 mb-2">±0.01</div>
              <div className="text-sm text-emerald-300 mb-1">mm</div>
              <h4 className="font-medium mb-2 text-lg">{t('metrics.tolerance')}</h4>
              <p className="text-sm text-emerald-200">{t('metrics.tolerance.description')}</p>
            </div>

            <div className="bg-emerald-700/50 rounded-2xl p-8 border border-emerald-600/30">
              <div className="text-4xl font-semibold text-emerald-200 mb-2">Ra 0.8</div>
              <div className="text-sm text-emerald-300 mb-1">μm</div>
              <h4 className="font-medium mb-2 text-lg">{t('metrics.roughness')}</h4>
              <p className="text-sm text-emerald-200">{t('metrics.roughness.description')}</p>
            </div>

            <div className="bg-emerald-700/50 rounded-2xl p-8 border border-emerald-600/30">
              <div className="text-4xl font-semibold text-emerald-200 mb-2">24</div>
              <div className="text-sm text-emerald-300 mb-1">{t('metrics.val')}</div>
              <h4 className="font-medium mb-2 text-lg">{t('metrics.response')}</h4>
              <p className="text-sm text-emerald-200">{t('metrics.response.description')}</p>
            </div>

            <div className="bg-emerald-700/50 rounded-2xl p-8 border border-emerald-600/30">
              <div className="text-4xl font-semibold text-emerald-200 mb-2">10+</div>
              <div className="text-sm text-emerald-300 mb-1">{t('metrics.metai')}</div>
              <h4 className="font-medium mb-2 text-lg">{t('metrics.experience')}</h4>
              <p className="text-sm text-emerald-200">{t('metrics.experience.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Equipment Section */}
      <section id="iranga" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">{t('equipment.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('equipment.subtitle')}
            </p>
          </div>

          {/* Main info sections */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 items-center mb-20">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">{t('equipment.cnc.title')}</h4>
              <p className="text-gray-600 mb-6">
                {t('equipment.cnc.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">DMG MORI NLX 2500 SY</span>
                    <p className="text-sm text-gray-600">Aukšto našumo CNC tekinimo centras su Y ašimi ir frezavimo galimybėmis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">HAAS VF-2</span>
                    <p className="text-sm text-gray-600">Vertikalus frezavimo centras su 4-ių ašių apdirbimo galimybėmis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">MAZAK QUICK TURN 250</span>
                    <p className="text-sm text-gray-600">Tekinimo centras su aukštu tikslumu ir greita detalių kaita</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/generic/CNC Precision Engineering.jpg"
                alt={t('equipment.cnc.title')}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md order-3 md:order-3">
              <Image
                src="/images/tools/Screenshot 2025-05-29 at 21.11.49.png"
                alt={t('equipment.tools.title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="order-4 md:order-4">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">{t('equipment.tools.title')}</h4>
              <p className="text-gray-600 mb-6">
                {t('equipment.tools.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">MITUTOYO koordinatinės matavimo mašinos</span>
                    <p className="text-sm text-gray-600">Submikrometrinio tikslumo matavimo įranga detalių kontrolei</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">SANDVIK COROMANT pjovimo įrankiai</span>
                    <p className="text-sm text-gray-600">Aukšto našumo tekinimo, frezavimo ir gręžimo įrankiai</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">CAD/CAM programinė įranga</span>
                    <p className="text-sm text-gray-600">MASTERCAM ir SOLIDWORKS sprendimai detalių projektavimui ir programavimui</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Tools Gallery Section */}
          <div className="mt-16">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t('equipment.gallery.title')}</h4>
            <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
              <div className="flex-none w-64 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/tools/Screenshot 2025-05-29 at 21.12.14.png"
                  alt="CNC įranga"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-none w-64 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/tools/Screenshot 2025-05-29 at 21.14.41.png"
                  alt="CNC įranga"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-none w-64 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/tools/Screenshot 2025-05-29 at 21.15.33.png"
                  alt="CNC įranga"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-none w-64 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/tools/Screenshot 2025-05-29 at 21.15.59.png"
                  alt="CNC įranga"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-none w-64 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/tools/Screenshot 2025-05-29 at 21.16.25.png"
                  alt="CNC įranga"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apie" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-6">{t('about.title')}</h3>
              <p className="text-xl text-gray-600 mb-6">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 mb-8">
                {t('about.description2')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">{t('about.feature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">{t('about.feature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">{t('about.feature3')}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/tools/Screenshot 2025-05-29 at 21.52.09.png"
                alt="CNC tekinimo dirbtuvės Kediškėse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Direct Contact Info */}
      <section id="kontaktai" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">{t('contact.title')}</h3>
            <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-8">{t('contact.questions')}</h4>
                <p className="text-gray-600 mb-8">
                  {t('contact.questions.description')}
                </p>
                <div className="flex flex-col gap-6">
                  <a 
                    href="tel:+37067909655"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-auto py-5 px-6 text-base font-medium flex justify-center items-center gap-3 w-full md:w-auto inline-flex"
                  >
                    <Phone className="w-5 h-5" />
                    +370 6 790 9655
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-emerald-50 rounded-full p-8 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">{t('contact.email')}</h4>
                  <a href="mailto:rzydrius@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium text-lg">
                    rzydrius@gmail.com
                  </a>
                  <p className="text-gray-600 mt-4">
                    {t('contact.email.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">KEDIŠKĖS</h4>
              <p className="text-gray-600 mb-4">{t('footer.slogan')}</p>
              <p className="text-sm text-gray-500">{t('footer.description')}</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4">{t('footer.contacts')}</h5>
              <div className="space-y-2 text-gray-600">
                <p>Žydrūnas Rimkus</p>
                <p>+370 6 790 9655</p>
                <p>Sodų g. 36</p>
                <p>Žemaičių Naumiestis, Šilutės raj.</p>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4">{t('footer.services')}</h5>
              <ul className="space-y-2 text-gray-600">
                <li>{t('footer.service1')}</li>
                <li>{t('footer.service2')}</li>
                <li>{t('footer.service3')}</li>
                <li>{t('footer.service4')}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
