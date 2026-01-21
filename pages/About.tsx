import React from 'react';
import { Target, Zap, Shield, ArrowRight } from 'lucide-react';
import { COMMITMENTS } from '../constants';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="bg-white py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral skew-x-12 translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">L'Entreprise</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">À Propos de GALVATECH</h2>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            La science de la surface et la précision suisse depuis 1999.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="prose prose-lg text-gray-600">
             <h3 className="text-2xl font-bold text-primary mb-4">Notre Histoire</h3>
             <p className="mb-4">
               Fondée à La Chaux-de-Fonds, au cœur de la région horlogère suisse, GALVATECH a bâti sa réputation sur la maîtrise du traitement galvanique et du traitement chimique de métaux.
             </p>
             <p className="mb-4">
               Notre équipe d'experts en chimie, métallurgie et procédés industriels met en œuvre des solutions sur mesure adaptées à chaque matériau et à chaque exigence. Nous ajustons les paramètres électrochimiques et chimiques afin de garantir des résultats constants.
             </p>
             <p>
               GALVATECH associe innovation et exigence suisse pour offrir à ses clients des surfaces parfaites jusque dans le micron.
             </p>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-75 blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <img 
               src="img/polissage.png" 
               alt="Laboratoire GALVATECH" 
               className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent max-w-xs hidden md:block">
                <p className="font-bold text-dark text-lg italic">"La précision n'est pas une option, c'est notre standard."</p>
             </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:border-accent transition-colors group">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-xl text-dark mb-3">Précision</h3>
              <p className="text-gray-500">Contrôle au micron près pour répondre aux tolérances les plus strictes de l'horlogerie et du médical.</p>
          </div>

          <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:border-accent transition-colors group">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-xl text-dark mb-3">Performance</h3>
              <p className="text-gray-500">Des traitements durables qui améliorent concrètement la résistance et la longévité de vos pièces.</p>
          </div>

          <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:border-accent transition-colors group">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-xl text-dark mb-3">Durabilité</h3>
              <p className="text-gray-500">Des procédés optimisés pour réduire l'impact environnemental sans compromettre la qualité.</p>
          </div>
        </div>

        {/* Commitments List */}
        <div className="bg-dark text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl mb-10 text-center md:text-left">Nos Engagements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {COMMITMENTS.map((commitment) => (
                  <div key={commitment.id} className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 mr-4 group-hover:scale-110 transition-transform">
                        <span className="font-bold text-xs text-white">{commitment.id}</span>
                      </div>
                      <p className="text-lg text-gray-200">{commitment.text}</p>
                  </div>
                ))}
            </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;