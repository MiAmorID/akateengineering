import { Factory, Wrench, Cog, TrendingUp } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const featuresFromTrans = t('about.features');
  const features = (Array.isArray(featuresFromTrans) && featuresFromTrans.length)
    ? featuresFromTrans.map((f: any, i: number) => ({ icon: [Factory, Wrench, Cog, TrendingUp][i], ...f }))
    : [
        { icon: Factory, title: 'General Fabrication', description: 'Expert fabrication services with precision and quality' },
        { icon: Wrench, title: 'Precision Machining', description: 'Advanced machining including lathe, milling, and drilling' },
        { icon: Cog, title: 'Special Purpose Machines', description: 'Custom-designed machines for unique industrial needs' },
        { icon: TrendingUp, title: 'Engineering Consulting', description: 'Professional consulting and technical solutions' }
      ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.lead')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('about.companyOverview')}
            </h3>
            <p className="text-gray-700 leading-relaxed">{t('about.p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('about.p2')}</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold italic">{t('about.motto')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 transform-gpu transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-5xl font-bold mb-2">3+</div>
            <div className="text-blue-100 text-lg">Years of Excellence</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-orange-100 text-lg">Quality Commitment</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-5xl font-bold mb-2">8+</div>
            <div className="text-cyan-100 text-lg">Trusted Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
