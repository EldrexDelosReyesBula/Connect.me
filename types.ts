import { LucideIcon } from 'lucide-react';

export enum CardVariant {
  ACADEMIC = 'ACADEMIC',
  PERSONAL = 'PERSONAL',
  NGL = 'NGL',
  WRITE_MESSAGE = 'WRITE_MESSAGE'
}

export interface LinkCardProps {
  variant: CardVariant;
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
