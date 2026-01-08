import { Target, TrendingUp, Users, Award } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const Vision = () => {
  const { t } = useLanguage();
  const translationMissions = t('vision.missions');
  const icons = [Award, TrendingUp, Users, Target];
  const missions = translationMissions.map((m: any, i: number) => ({ icon: icons[i], ...m }));

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('vision.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="flex items-start mb-4">
              <Target className="w-12 h-12 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Vision
                </h3>
                <p className="text-xl text-blue-50 leading-relaxed">
                  To become a One Stop Engineering Solution company that provides added value to all
                  industry stakeholders through innovation and technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Mission
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission: any, index: number) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 transform-gpu transition-transform duration-300 group-hover:scale-110">
                    <mission.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
