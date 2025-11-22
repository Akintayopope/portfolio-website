export interface ButtonProps {
  label?: string;
  bg?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "gradient";
}
