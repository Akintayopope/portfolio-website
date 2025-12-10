export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;

  // EXISTING VARIANTS + NEW circle variant
  variant?: "primary" | "secondary" | "gradient" | "circle";

  // NEW: size support
  size?: "sm" | "md" | "lg";

  // Anchor support
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
}
