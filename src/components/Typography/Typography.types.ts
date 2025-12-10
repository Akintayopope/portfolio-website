export interface TypographyProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  muted?: boolean;
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
}
