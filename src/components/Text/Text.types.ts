export interface TextInputProps {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?: (v: string) => void;
}
