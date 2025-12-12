import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { COMPANY_DETAILS, SECTORS } from '../constants';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="bg-neutral py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Contact</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Contactez-nous</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Nos spécialistes sont à votre écoute pour définir le procédé le plus adapté à vos besoins.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-accent">
            <h3 className="text-2xl font-bold text-dark mb-6">Demande d'offre sans obligation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="Jean Dupont" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                     <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="+41 79 ..." />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="jean@entreprise.ch" />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité</label>
                  <div className="relative">
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors appearance-none cursor-pointer">
                        <option value="">Sélectionner un secteur</option>
                        {SECTORS.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="autre">Autre</option>
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                     </div>
                  </div>
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="Détails de votre demande..."></textarea>
               </div>

               <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg transition-colors shadow-md flex items-center justify-center group">
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Envoyer ma demande
               </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8 flex flex-col h-full">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-grow">
                <h3 className="font-bold text-xl text-dark mb-6">Coordonnées</h3>
                <ul className="space-y-6">
                   <li className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-primary mr-4">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <span className="block font-semibold text-dark">Adresse</span>
                         <span className="text-gray-600">{COMPANY_DETAILS.address}</span>
                      </div>
                   </li>
                   <li className="flex items-center">
                      <div className="bg-blue-50 p-3 rounded-full text-primary mr-4">
                         <Phone size={20} />
                      </div>
                      <div>
                         <span className="block font-semibold text-dark">Téléphone</span>
                         <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-accent transition-colors">{COMPANY_DETAILS.phone}</a>
                      </div>
                   </li>
                   <li className="flex items-center">
                      <div className="bg-blue-50 p-3 rounded-full text-primary mr-4">
                         <Mail size={20} />
                      </div>
                      <div>
                         <span className="block font-semibold text-dark">Email</span>
                         <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-gray-600 hover:text-accent transition-colors">{COMPANY_DETAILS.email}</a>
                      </div>
                   </li>
                   <li className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-primary mr-4">
                         <Clock size={20} />
                      </div>
                      <div>
                         <span className="block font-semibold text-dark">Horaires</span>
                         <span className="text-gray-600">{COMPANY_DETAILS.hours}</span>
                      </div>
                   </li>
                </ul>
             </div>

             {/* Map Placeholder */}
             <div className="bg-gray-200 rounded-2xl h-64 w-full overflow-hidden relative shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Carte localisation" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <a 
                     href="https://maps.google.com/?q=Rue+Alexis-Marie-Piaget+73,2300+La+Chaux-de-Fonds,Suisse" 
                     target="_blank"
                     rel="noreferrer"
                     className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center hover:scale-105 transition-transform text-dark"
                   >
                      <MapPin className="text-red-500 mr-2" size={20} />
                      <span className="font-bold">La Chaux-de-Fonds</span>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;