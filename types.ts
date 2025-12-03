import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: number;
  title: string;
  icon: LucideIcon;
  bgColor: string;
  linkText?: string;
}

export interface CategoryItem {
  id: number;
  label: string;
  icon: LucideIcon;
}

export interface CourseItem {
  id: number;
  title: string;
  students?: number;
  image: string;
  category?: string;
  price?: string;
  description?: string;
  instructor?: string;
  rating?: number;
  duration?: string;
  lessons?: number;
  language?: string;
  level?: string;
}