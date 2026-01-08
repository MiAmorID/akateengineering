import { MapPin, Phone, Mail, Building } from 'lucide-react';

const Contact = () => {
  const locations = [
    {
      title: 'Head Office',
      address: 'Jl. Raya Cikuda, Wanaherang, Gunung Putri',
      city: 'Bogor, Jawa Barat',
      icon: Building
    },
    {
      title: 'Workshop 1',
      address: 'Jl. Sukadami, Cikarang Selatan',
      city: 'Kab. Bekasi, Jawa Barat',
      icon: MapPin
    },
    {
      title: 'Workshop 2',
      address: 'Jl. Desa Pasir Angin, Kec. Cileungsi',
      city: 'Kab. Bogor, Jawa Barat',
      icon: MapPin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for your engineering solution needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <location.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {location.title}
              </h3>
              <p className="text-gray-600 text-center mb-1">{location.address}</p>
              <p className="text-gray-500 text-center text-sm">{location.city}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:081380547936"
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
          >
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-xl mr-4">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <div className="text-blue-100 text-sm mb-1">Call Us</div>
                <div className="text-2xl font-bold">0813 8054 7936</div>
              </div>
            </div>
          </a>

          <a
            href="mailto:info.akate24@gmail.com"
            className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
          >
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-xl mr-4">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <div className="text-cyan-100 text-sm mb-1">Email Us</div>
                <div className="text-xl font-bold break-all">info.akate24@gmail.com</div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your engineering needs. Our team of experts is ready
            to provide comprehensive solutions tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:081380547936"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Call Now
            </a>
            <a
              href="mailto:info.akate24@gmail.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
