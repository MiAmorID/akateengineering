import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    setMobileMenuOpen(false);
  };

  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.quality'), id: 'quality' },
    { label: t('nav.clients'), id: 'clients' },
    { label: t('nav.contact'), id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--surface)]/80 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/akate.png"
              alt="AKATE Engineering Indonesia"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0"
            />
            <div className="ml-3">
              <h1
                className={`text-lg sm:text-xl font-bold transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
                style={{ fontFamily: 'Source Serif 4, serif' }}
              >
                AKATE ENGINEERING
              </h1>
              <p
                className={`text-xs sm:text-sm transition-colors ${scrolled ? 'text-gray-600' : 'text-[var(--muted)]'}`}
              >
                {t('footer.engineering')}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors relative group ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl border border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}

            <div className="px-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 font-medium">Language</div>
                <LanguageSelector compact />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
