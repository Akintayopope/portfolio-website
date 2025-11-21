export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}
