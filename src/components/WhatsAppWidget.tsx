import { MessageCircle, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppWidget = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiry: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => setIsOpen(!isOpen), 100);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.inquiry) {
      alert('Please fill in all fields');
      return;
    }

    // Format the message
    const message = `
Hello! I would like to inquire about your services.

*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Inquiry:*
${formData.inquiry}
    `.trim();

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6287856562406?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form and close
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiry: ''
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button - Fixed position on right corner */}
      <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isAnimating ? 'animate-bounce' : ''
        }`}
        aria-label="Open WhatsApp chat"
      >
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-pulse"></div>
        <MessageCircle className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4 pt-40 md:pt-0"
          onClick={handleToggle}
        >
          {/* Form Modal - Centered and Responsive */}
          <div
            className="w-full max-w-sm bg-white rounded-3xl shadow-2xl transition-all duration-300 animate-in fade-in scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="font-bold text-base md:text-lg">{t('whatsapp.title')}</h2>
              </div>
              <button
                onClick={handleToggle}
                className="hover:bg-green-600 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-3 md:p-5 space-y-3 md:space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {t('whatsapp.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('whatsapp.form.placeholder.name')}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {t('whatsapp.form.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('whatsapp.form.placeholder.company')}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {t('whatsapp.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('whatsapp.form.placeholder.email')}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {t('whatsapp.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('whatsapp.form.placeholder.phone')}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Inquiry Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {t('whatsapp.form.inquiry')}
                </label>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  placeholder={t('whatsapp.form.placeholder.inquiry')}
                  rows={3}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit and Close Buttons */}
              <div className="flex gap-2 pt-3">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="flex-1 px-3 py-2 text-xs md:text-sm text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all"
                >
                  {t('whatsapp.button.close')}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-3 py-2 text-xs md:text-sm bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  {t('whatsapp.button.send')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
