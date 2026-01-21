import React from 'react';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="img/La-Chaux-de-Fonds-1927-1.jpg" 
          alt="Vue aérienne La Chaux-de-Fonds" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image not uploaded yet, use a generic industrial city texture
            e.currentTarget.src = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white mt-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 drop-shadow-lg">
            GALVATECH, l'expertise suisse du traitement de surface <span className="text-accent">haute précision</span>.
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-100 mb-10 border-l-4 border-accent pl-6 bg-black/10 py-2 backdrop-blur-sm">
            Ébavurage de précision • Polissage électrolytique • Décontamination
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToServices}
              className="bg-accent hover:bg-sky-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1 text-center"
            >
              Découvrir nos services
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all text-center"
            >
              Demande d'offre sans obligation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;