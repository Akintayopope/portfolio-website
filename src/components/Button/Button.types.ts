export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "gradient";
}

export {};
