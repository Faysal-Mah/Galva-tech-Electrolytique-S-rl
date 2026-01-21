import React from 'react';
import { SECTORS } from '../constants';

interface SectorsProps {
  id: string;
}

const Sectors: React.FC<SectorsProps> = ({ id }) => {
  return (
    <section id={id} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
           <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Industries</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6">Secteurs d'Activité</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GALVATECH intervient dans les industries où la qualité de surface et la précision ne tolèrent aucun compromis.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SECTORS.map((sector, index) => (
            <div key={sector.id} className={`flex flex-col h-full ${index % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg mb-6 group">
                <img 
                  src={sector.imageUrl} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm text-primary z-10">
                  <sector.icon size={24} />
                </div>
              </div>
              <div className="flex-grow px-2">
                <h3 className="font-heading font-bold text-3xl text-primary mb-4">{sector.title}</h3>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;