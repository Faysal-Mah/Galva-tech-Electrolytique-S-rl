import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, COMPANY_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.path.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(`#${section}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    setIsOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer h-full py-2" onClick={() => handleNav('#home')}>
            <img 
              src="/galvatech-logo.png" 
              alt="Galvatech Logo" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo */}
            <div className="hidden flex items-center gap-2 h-full">
               <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                G
              </div>
              <span className="font-heading font-bold text-2xl text-primary tracking-tight">
                GALVATECH
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`font-medium text-sm transition-colors duration-200 ${
                  activeSection === item.path
                    ? 'text-accent font-semibold'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('#contact')}
              className="bg-accent hover:bg-sky-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
            >
              Demande d'offre sans obligation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-xl border-b border-gray-100 animate-fadeIn h-screen">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`block w-full text-left px-4 py-4 rounded-lg text-lg font-medium border-b border-gray-50 ${
                  activeSection === item.path
                    ? 'bg-neutral text-primary'
                    : 'text-dark hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 px-4">
              <button 
                onClick={() => handleNav('#contact')}
                className="w-full bg-accent text-white py-4 rounded-lg font-bold text-center shadow-md active:scale-95 transition-transform"
              >
                Demande d'offre sans obligation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                GALVATECH
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Expertise suisse en traitement de surface. Zingage, passivation et polissage pour les industries exigeantes.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-accent">Navigation</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <button onClick={() => scrollTo(item.path)} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 text-accent group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo('#services')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">Zingage électrolytique</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">Polissage inox</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">Passivation</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">Nettoyage technique</button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm">{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 flex-shrink-0 text-accent" />
                <span className="text-sm">{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 flex-shrink-0 text-accent" />
                <span className="text-sm">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Galvatech SA - Tous droits réservés</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Mentions légales</span>
            <span className="hover:text-white cursor-pointer transition-colors">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  // Format: Country code + Number without leading 0 or spaces
  // 032 968 15 42 -> 41329681542
  const phoneNumber = "41329681542"; 
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white/20"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-lg">
        WhatsApp
      </span>
    </a>
  );
};

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;