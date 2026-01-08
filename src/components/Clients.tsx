import { Building2, CheckCircle } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    'PT. PERTAMINA (PERSERO)',
    'PT. KATUP INDUSTRI INDONESIA',
    'PT. ALFA VALVES INDONESIA',
    'PT. SUKSES MANDIRI TEKNIK',
    'PT. TRACON INDUSTRI',
    'PT. MANDIRI TRANSFORMA GLOBAL - AEQUUS SOLUTIONS',
    'CV. INSTINDO',
    'HAKU WOOD'
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('clients.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('clients.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-blue-300"
            >
              <div className="flex items-start">
                <Building2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1 transform-gpu transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-semibold text-gray-900 leading-tight">{client}</p>
                </div>
              </div>
            </div>
          ))} 
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          { (t('clients.highlights') || []).map((h: any, i: number) => (
            <div key={i} className={`bg-gradient-to-br ${i===0? 'from-blue-600 to-blue-700' : i===1 ? 'from-cyan-500 to-cyan-600' : 'from-orange-500 to-orange-600'} text-white p-8 rounded-2xl shadow-xl`}>
              <CheckCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{h.title}</h3>
              <p className={`text-${i===0? 'blue' : i===1 ? 'cyan' : 'orange'}-100`}>
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
