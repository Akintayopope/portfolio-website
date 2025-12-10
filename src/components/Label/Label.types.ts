export interface LabelProps {
  text?: string; // optional — allows <Label text="API" />
  children?: React.ReactNode; // optional — allows <Label>API</Label>
  disabled?: boolean;
  variant?: 'default' | 'soft' | 'outlined';
  className?: string;
}
