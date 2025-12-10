export interface DropdownProps {
  type?: 'form' | 'menu';
  label?: string;
  options?: string[];
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}
