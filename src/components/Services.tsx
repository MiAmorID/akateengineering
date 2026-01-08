import { Box, Calculator, Settings, Cpu, Package, Truck } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Calculator,
      title: 'FEA Analysis',
      description: 'Advanced Finite Element Analysis for stress, deformation, and structural integrity assessments',
      features: ['Stress Analysis', 'Deformation Studies', 'Structural Validation', 'ASME Compliance']
    },
    {
      icon: Box,
      title: 'General Fabrication',
      description: 'Comprehensive fabrication services for industrial equipment and structures',
      features: ['Metal Fabrication', 'Welding Services', 'Assembly', 'Quality Control']
    },
    {
      icon: Settings,
      title: 'Precision Machining',
      description: 'High-precision machining operations for complex components',
      features: ['Lathe Operations', 'Milling Services', 'Drilling', 'CNC Machining']
    },
    {
      icon: Cpu,
      title: 'Special Purpose Machines',
      description: 'Custom-designed machinery solutions for unique industrial applications',
      features: ['Custom Design', 'Automation', 'Installation', 'Commissioning']
    },
    {
      icon: Package,
      title: 'Industrial Equipment',
      description: 'Supply and distribution of quality industrial equipment and components',
      features: ['Valves & Fittings', 'Industrial Tools', 'Equipment Supply', 'Technical Support']
    },
    {
      icon: Truck,
      title: 'Engineering Consulting',
      description: 'Expert consulting services for engineering projects and technical solutions',
      features: ['Project Planning', 'Technical Advisory', 'Process Optimization', 'Quality Assurance']
    }
  ];

  const dataItems = t('services.items');

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.lead')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataItems.map((service: any, index: number) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 transform-gpu hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform-gpu transition-transform duration-300 group-hover:scale-110">
                {/* Icons remain as before; use icon from original services array */}
                {(() => {
                  const Icon = (services[index] && (services[index] as any).icon) || Calculator;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                FEA Expertise
              </h3>
              <p className="text-blue-50 leading-relaxed mb-4">
                Our advanced Finite Element Analysis services ensure structural integrity and compliance
                with ASME BPVC standards. We provide comprehensive stress analysis, deformation studies,
                and safety assessments for critical industrial equipment.
              </p>
              <p className="text-blue-100 text-sm">
                All analyses follow ASME codes with Unity Check (UC) and Stress Ratio (SR) assessments
                to guarantee safe and reliable designs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">ASME</div>
                <div className="text-blue-100 text-sm">Certified Standards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">&lt;1</div>
                <div className="text-blue-100 text-sm">Stress Ratio (SR)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">3D</div>
                <div className="text-blue-100 text-sm">Analysis Models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-100 text-sm">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
