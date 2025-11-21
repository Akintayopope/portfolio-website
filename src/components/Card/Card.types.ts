import type React from 'react';
export interface CardProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
