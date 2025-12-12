import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  id: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="bg-neutral py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Expertise Technique</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6">Nos Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Une gamme complète de traitements galvaniques et chimiques, conçus pour améliorer la résistance, la durabilité et l'esthétique des pièces métalliques.
        </p>
      </div>

      {/* Services Grid - 2 Columns with Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                
                {/* Icon positioned on image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg text-primary">
                   <service.icon size={28} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-10 rounded-2xl shadow-lg text-center border-l-4 border-accent">
          <h3 className="text-2xl font-bold text-dark mb-4">Un besoin spécifique ?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour étudier la faisabilité de votre projet avec nos experts.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;