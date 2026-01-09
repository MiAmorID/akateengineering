import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const { t } = useLanguage();

  // Local slides (place images in public/hero). If missing, the slider will use remote fallbacks.
  const images = [
    '/hero/slide-1.jpg',
    '/hero/slide-2.jpg',
    '/hero/slide-3.jpg',
    'https://source.unsplash.com/1600x900/?valve&sig=1',
    'https://source.unsplash.com/1600x900/?valve&sig=2',
    'https://source.unsplash.com/1600x900/?valve&sig=3',
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);

  // DEV: preload images and surface load/fail counts in console for debugging
  useEffect(() => {
    let loaded = 0;
    let failed = 0;
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => { loaded++; console.log('Hero preload loaded:', src); window.__HERO_IMAGE_STATUS__ = { loaded, failed }; };
      img.onerror = () => { failed++; console.warn('Hero preload failed:', src); window.__HERO_IMAGE_STATUS__ = { loaded, failed }; };
      img.src = src;
    });
  }, []);

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
    setIsPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 8000);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    setIsPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 8000);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [isPaused, images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section
      id="hero"
      onMouseEnter={() => {
        setIsPaused(true);
        if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
      }}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0].clientX;
        const startX = touchStartX.current;
        if (startX == null) return;
        const delta = endX - startX;
        if (Math.abs(delta) > 50) {
          if (delta < 0) next();
          else prev();
        }
        touchStartX.current = null;
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background slides */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              // Use local SVG fallback if remote image fails (avoid infinite loop)
              const img = e.currentTarget as HTMLImageElement;
              // eslint-disable-next-line no-console
              console.warn('Hero image failed to load, switching to fallback:', src);
              if (!img.dataset.fallback) {
                img.dataset.fallback = '1';
                img.src = '/hero-fallback.svg';
                img.style.opacity = '1';
              } else {
                // fallback also failed; hide the image to avoid broken icon
                img.style.opacity = '0';
              }
            }}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            style={{ display: 'block' }}
          />
        ))}

        {/* Faded overlay to make content readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>

      {/* Slider controls (prev / next) — responsive & premium look */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 border border-white/10 text-white shadow-2xl backdrop-blur-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 border border-white/10 text-white shadow-2xl backdrop-blur-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Logo removed from hero; logo appears in header only */}

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
          </h1>

          <div className="space-y-2 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-semibold">
              {t('hero.lead')}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200">
              {t('hero.sub')}
            </p>
          </div>

          <p className="text-lg sm:text-xl text-blue-50 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('hero.partner')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToAbout()}
              className="btn-primary px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base transition-all transform hover:scale-105"
            >
              {t('button.learnMore')}
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              {t('button.getInTouch')}
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white scale-110' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
