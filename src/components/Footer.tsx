import { Phone, Mail, MapPin } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/akate.png"
                alt="AKATE Logo"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  AKATE ENGINEERING
                </h3>
                <p className="text-blue-400 text-sm">{t('footer.engineering')}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="text-gray-500 text-sm italic">
              {t('about.motto')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {t('nav.quality')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {t('nav.clients')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Jl. Raya Cikuda, Wanaherang, Gunung Putri, Bogor
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="https://wa.me/6287856562406" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm">
                  +62 878 5656 2406
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@akate.id" className="text-gray-400 hover:text-blue-400 text-sm break-all">
                  info@akate.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              {t('footer.copyright').replace('{year}', String(currentYear))}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
              <p className="text-gray-500 text-xs md:text-sm text-center md:text-left whitespace-nowrap">{t('footer.tagline')}</p>
              <div className="flex items-center gap-2">
                <div className="text-gray-400 text-xs md:text-sm">Language</div>
                <LanguageSelector compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
