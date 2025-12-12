import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string; // Added image URL field
}

export interface SectorData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface QualityStep {
  step: number;
  title: string;
  description: string;
}

export interface Commitment {
  id: number;
  text: string;
}