import React from 'react';
import { CheckCircle2, Leaf, Recycle, FileCheck } from 'lucide-react';
import { QUALITY_STEPS } from '../constants';

interface QualityProps {
  id: string;
}

const Quality: React.FC<QualityProps> = ({ id }) => {
  return (
    <section id={id} className="bg-neutral py-24">
       {/* Header */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Engagement</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">Qualité et Environnement</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Chez GALVATECH, la qualité est une culture. Nous associons performance industrielle et responsabilité écologique.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quality Section */}
        <div className="mb-24">
          <div className="flex items-center mb-12">
            <div className="bg-primary text-white p-3 rounded-lg mr-4 shadow-lg">
              <FileCheck size={32} />
            </div>
            <h3 className="font-heading font-bold text-3xl text-dark">Processus de Contrôle Qualité</h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Chaque étape du traitement galvanique est contrôlée : de la préparation des bains chimiques au contrôle des épaisseurs et du dépôt de zinc final.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line for mobile */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:hidden"></div>
            {/* Horizontal Line for desktop */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {QUALITY_STEPS.map((step) => (
                <div key={step.step} className="relative pl-12 md:pl-0 md:pt-12 md:text-center group">
                  {/* Dot */}
                  <div className="absolute left-2 md:left-1/2 top-6 md:top-4 w-5 h-5 bg-white border-4 border-accent rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:scale-125 transition-transform shadow-sm"></div>
                  
                  <h4 className="font-bold text-lg text-primary mb-2">0{step.step}. {step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environment Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                 <div className="bg-green-600 text-white p-3 rounded-lg mr-4 shadow-lg">
                  <Leaf size={32} />
                </div>
                <h3 className="font-heading font-bold text-3xl text-dark">Engagement Environnemental</h3>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Nos installations respectent les réglementations suisses et européennes, notamment <strong>REACH</strong> et <strong>ROHS</strong>.
                </p>
                <p>
                  Nous réduisons la consommation d'eau et d'énergie, recyclons les métaux et prolongeons la durée de vie de nos bains de traitement chimique. GALVATECH s'engage pour une industrie plus propre, durable et responsable.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                 <div className="flex items-center bg-gray-50 px-5 py-3 rounded-full border border-gray-100 shadow-sm">
                    <CheckCircle2 className="text-green-600 mr-2" size={20} />
                    <span className="font-bold text-gray-700">REACH Compliant</span>
                 </div>
                 <div className="flex items-center bg-gray-50 px-5 py-3 rounded-full border border-gray-100 shadow-sm">
                    <CheckCircle2 className="text-green-600 mr-2" size={20} />
                    <span className="font-bold text-gray-700">ROHS Compliant</span>
                 </div>
              </div>
            </div>

            <div className="flex justify-center">
                <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-4 border-green-100 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-4 border-green-200 rounded-full"></div>
                    <div className="absolute inset-8 border-4 border-green-300 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Recycle className="text-green-600 w-24 h-24" />
                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;