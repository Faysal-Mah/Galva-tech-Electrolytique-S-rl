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
    id: 'ebavurage',
    title: 'L’ébavurage chimique et électrolytique',
    description: "L’ébavurage chimique et l’ébavurage électrolytique sont des procédés de finition de haute précision par dissolution contrôlée de la matière. Le premier assure un traitement homogène des pièces complexes, tandis que le second permet un ébavurage très localisé et précis, sans contrainte thermique ni mécanique, répondant aux exigences des applications industrielles les plus sensibles.",
    icon: Droplets,
    imageUrl: "img/ebavurage.png"
  },
  {
    id: 'passivation',
    title: 'La passivation',
    description: "C’est un traitement chimique, réalisé par immersion dans une solution oxydante ou un mince film d’oxyde protecteur est déposé sur la surface du produit traité. Ce film présente un haut degré de pureté et protège le substrat contre la corrosion. La passivation ne modifie ni les dimensions, ni la morphologie de la surface produit.",
    icon: ShieldCheck,
    imageUrl: "img/passivation.png"
  },
  {
    id: 'polissage',
    title: 'Le polissage électrolytique',
    description: "C’est un procédé qui permet de donner à la surface de la pièce un aspect clair et brillant tout en éliminant ces impuretés. On obtient une surface plus lisse par diminution de la rugosité et une bonne résistance à la corrosion.",
    icon: Sparkles,
    imageUrl: "img/polissage.png"
  },
  {
    id: 'decapage',
    title: 'Le décapage chimique',
    description: "C’est un traitement qui permet de dissoudre les impuretés et les défauts de surface engendrés par des opérations de fabrication (usinage, gravure, pliage, soudage). Il est également utilisé comme préparation de surface avant le microbillage ou le polissage électrolytique afin de travailler sur un matériau sain et décontaminé. Cette opération est systématiquement suivie par une passivation.",
    icon: FlaskConical,
    imageUrl: "img/decapage.png"
  },
  {
    id: 'tribofinition',
    title: 'La tribofinition',
    description: "Appelé aussi la trovalisation est une opération qui consiste à ébavurer et à polir la surface et les arêtes des pièces en supprimant les défauts de surfaces. Elle permet d’obtenir une surface qui procure au produit une meilleure finition et des performances mécaniques élevés. Une passivation est indispensable après la tribofinition afin d’éliminer le dépôt du mélange abrasif incrusté dans la matière.",
    icon: Orbit,
    imageUrl: "img/tribofinition.png"
  },
  {
    id: 'decontamination',
    title: 'Décontamination Chimique et Électrolytique : Une Pureté Certifiée',
    description: "Ce procédé élimine radicalement les impuretés et résidus d'usinage pour garantir une surface parfaitement saine. L'action combinée de l'immersion chimique et de l'électrolyse purifie les métaux en profondeur, assurant une résistance maximale à la corrosion et une passivité durable des composants les plus sensibles.",
    icon: Zap,
    imageUrl: "img/decontamination.png"
  },
  {
    id: 'sablage',
    title: 'Sablage Mécanique et Chimique : L’Excellence des Finitions',
    description: "Le sablage mécanique et le sablage chimique sont des procédés essentiels pour la préparation et l'esthétique des surfaces de précision. Le premier utilise la projection d'abrasifs pour uniformiser la matière et créer une accroche technique idéale. Le second, par immersion, assure un satinage d'une régularité absolue sur les pièces complexes ou fragiles. Ces technologies complémentaires garantissent des finitions haut de gamme, alliant durabilité et élégance visuelle pour les composants les plus exigeants.",
    icon: Wind,
    imageUrl: "img/sablage.png"
  }
];

export const SECTORS: SectorData[] = [
  {
    id: 'horlogerie',
    title: 'Horlogerie',
    description: "Les finitions métalliques pour boîtiers, bracelets et cadrans exigent une maîtrise totale. Nos procédés garantissent une brillance durable.",
    icon: Watch,
    imageUrl: "img/Horlogerie.png"
  },
  {
    id: 'medical',
    title: 'Médical et dentaire',
    description: "Nos traitements répondent aux exigences de biocompatibilité pour vis, implants, prothèses et instruments chirurgicaux.",
    icon: Activity,
    imageUrl: "img/Medical.png"
  },
  {
    id: 'aeronautique',
    title: 'Aéronautique',
    description: "Amélioration de la résistance à la fatigue et à la corrosion pour des pièces respectant les tolérances les plus strictes.",
    icon: Plane,
    imageUrl: "img/Aeronautique.png"
  },
  {
    id: 'microtechnique',
    title: 'Microtechnique',
    description: "Solutions pour pièces miniaturisées et composants conducteurs avec un contrôle de dépôt précis à l'échelle micrométrique.",
    icon: Cpu,
    imageUrl: "img/Microtechnique.png"
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