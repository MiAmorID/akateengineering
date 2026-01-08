import { Shield, CheckCircle, Target, TrendingUp } from 'lucide-react';

const Quality = () => {
  const policies = [
    {
      icon: Shield,
      title: 'Customer Satisfaction',
      description: 'Committed to providing results that meet customer needs to achieve complete satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Ongoing improvisation aimed at providing added value for all stakeholders involved'
    },
    {
      icon: CheckCircle,
      title: 'Management Responsibility',
      description: 'Implementation is the responsibility of all levels of management and staff'
    }
  ];

  const objectives = [
    {
      title: 'Zero Accidents',
      description: 'Prioritize work safety to achieve zero accidents during the work process',
      icon: '🛡️'
    },
    {
      title: '100% Quality',
      description: 'Provide full service according to customer needs with 100% Quality, Delivery, and Cost results',
      icon: '✓'
    }
  ];

  return (
    <section id="quality" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Quality Policy
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AKATE Engineering Indonesia is committed to excellence in every aspect
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <policy.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {policy.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {policy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex items-center mb-8">
            <Target className="w-12 h-12 mr-4 text-blue-400" />
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Quality Objectives
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{objective.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{objective.title}</h4>
                <p className="text-gray-300 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-600/20 border border-blue-400/30 rounded-xl">
            <p className="text-blue-100 text-center italic">
              "Quality, Delivery, and Cost excellence are the cornerstones of our commitment to every client"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
