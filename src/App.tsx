import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import GallerySection from './components/GallerySection';
import Services from './components/Services';
import Quality from './components/Quality';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Vision />
      <GallerySection />
      <Services />
      <Quality />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
