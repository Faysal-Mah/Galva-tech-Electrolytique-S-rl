import { 
  Droplets, 
  ShieldCheck, 
  Sparkles, 
  FlaskConical, 
  Watch, 
  Activity, 
  Plane, 
  Cpu,
  Zap,
  Wind,
  Orbit
} from 'lucide-react';
import { ServiceData, SectorData, NavItem, QualityStep, Commitment } from './types';

// Updated Navigation Order: Home -> About -> Services -> ...
export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '#home' },
  { label: 'À Propos', path: '#apropos' },
  { label: 'Services', path: '#services' },
  { label: 'Secteurs', path: '#secteurs' },
  { label: 'Qualité', path: '#qualite' },
  { label: 'Contact', path: '#contact' },
];

export const SERVICES: ServiceData[] = [
  {
    id: 'zingage',
    title: 'Zingage électrolytique',
    description: "Dépôt homogène de zinc sur acier, inox ou laiton par procédé électrolytique. Ce traitement galvanique assure une excellente protection contre la corrosion tout en offrant un rendu esthétique régulier. Idéal pour les pièces de précision.",
    icon: Droplets,
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c4f3a69772?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'passivation',
    title: 'La passivation',
    description: "C’est un traitement chimique, réalisé par immersion dans une solution oxydante ou un mince film d’oxyde protecteur est déposé sur la surface du produit traité. Ce film présente un haut degré de pureté et protège le substrat contre la corrosion. La passivation ne modifie ni les dimensions, ni la morphologie de la surface produit.",
    icon: ShieldCheck,
    imageUrl: "https://images.unsplash.com/photo-1623835634598-a6207198a2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'polissage',
    title: 'Le polissage électrolytique',
    description: "C’est un procédé qui permet de donner à la surface de la pièce un aspect clair et brillant tout en éliminant ces impuretés. On obtient une surface plus lisse par diminution de la rugosité et une bonne résistance à la corrosion.",
    icon: Sparkles,
    imageUrl: "https://images.unsplash.com/photo-1622359560447-0d321151641b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'decapage',
    title: 'Le décapage chimique',
    description: "C’est un traitement qui permet de dissoudre les impuretés et les défauts de surface engendrés par des opérations de fabrication (usinage, gravure, pliage, soudage). Il est également utilisé comme préparation de surface avant le microbillage ou le polissage électrolytique afin de travailler sur un matériau sain et décontaminé. Cette opération est systématiquement suivie par une passivation.",
    icon: FlaskConical,
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'tribofinition',
    title: 'La tribofinition',
    description: "Appelé aussi la trovalisation est une opération qui consiste à ébavurer et à polir la surface et les arêtes des pièces en supprimant les défauts de surfaces. Elle permet d’obtenir une surface qui procure au produit une meilleure finition et des performances mécaniques élevés. Une passivation est indispensable après la tribofinition afin d’éliminer le dépôt du mélange abrasif incrusté dans la matière.",
    icon: Orbit,
    imageUrl: "https://images.unsplash.com/photo-1627814407886-f138865c1926?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'decontamination',
    title: 'La décontamination électrolytique',
    description: "C’est un traitement réalisé par électrolyse qui consiste à plonger des pièces dans un bain d’acide et à leur imposer une polarisation anodique et/ou cathodique. Ce procédé permet d’accélérer l’opération de décapage en provoquant l’attaque de l’oxyde par de l’acide naissant, plus actif que l’acide en solution.",
    icon: Zap,
    imageUrl: "https://images.unsplash.com/photo-1605517457723-6902257d077e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'sablage',
    title: 'Le sablage',
    description: "C’est une opération qui consiste à projeter des microbilles de verres sur une surface dans le but de la décaper légèrement. Elle est utilisée pour le nettoyage et le décapage des pièces ou pour réaliser une finition esthétique (aspect granuleux). C’est opération est généralement suivie par un décapage dans le but d’éliminer les microbilles de verre qui s’incrustent dans la pièce.",
    icon: Wind,
    imageUrl: "https://images.unsplash.com/photo-1618386377755-a043c7c25052?auto=format&fit=crop&w=800&q=80"
  }
];

export const SECTORS: SectorData[] = [
  {
    id: 'horlogerie',
    title: 'Horlogerie',
    description: "Les finitions métalliques pour boîtiers, bracelets et cadrans exigent une maîtrise totale. Nos procédés garantissent une brillance durable.",
    icon: Watch,
    imageUrl: "https://images.unsplash.com/photo-1612178382877-3e8e78e6a27e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'medical',
    title: 'Médical et dentaire',
    description: "Nos traitements répondent aux exigences de biocompatibilité pour vis, implants, prothèses et instruments chirurgicaux.",
    icon: Activity,
    imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a901668d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'aeronautique',
    title: 'Aéronautique',
    description: "Amélioration de la résistance à la fatigue et à la corrosion pour des pièces respectant les tolérances les plus strictes.",
    icon: Plane,
    imageUrl: "https://images.unsplash.com/photo-1559627755-e87f877f259d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'microtechnique',
    title: 'Microtechnique',
    description: "Solutions pour pièces miniaturisées et composants conducteurs avec un contrôle de dépôt précis à l'échelle micrométrique.",
    icon: Cpu,
    imageUrl: "https://images.unsplash.com/photo-1555664424-778a69022365?auto=format&fit=crop&w=600&q=80"
  }
];

export const QUALITY_STEPS: QualityStep[] = [
  { step: 1, title: "Réception", description: "Identification et analyse du matériau de base." },
  { step: 2, title: "Préparation", description: "Dégraissage et nettoyage chimique rigoureux." },
  { step: 3, title: "Traitement", description: "Application contrôlée des bains électrolytiques." },
  { step: 4, title: "Rinçage", description: "Rinçage en cascade pour éliminer tout résidu." },
  { step: 5, title: "Contrôle", description: "Mesure de l'épaisseur au micron et test d'adhérence." },
  { step: 6, title: "Certification", description: "Délivrance du certificat de conformité." },
];

export const COMMITMENTS: Commitment[] = [
  { id: 1, text: "Expertise suisse, précision et fiabilité dans chaque micron." },
  { id: 2, text: "Réactivité et flexibilité pour les petites et grandes séries." },
  { id: 3, text: "Conseils techniques personnalisés pour chaque matériau et application." },
  { id: 4, text: "Innovation continue dans le traitement galvanique et électrolytique." },
  { id: 5, text: "Engagement fort pour la durabilité et la réduction d'impact environnemental." },
];

export const COMPANY_DETAILS = {
  address: "Rue Alexis-Marie-Piaget 73, 2300 La Chaux-de-Fonds, Suisse",
  phone: "032 968 15 42",
  email: "galvatech@bluewin.ch",
  hours: "Lun-Ven: 07:30 - 12:00 / 13:30 - 17:00"
};