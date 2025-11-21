import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('Label renders correctly', () => {
  render(<Label text="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('Label disabled state applies styles', () => {
  render(<Label text="Disabled" disabled />);
  const label = screen.getByText('Disabled');
  expect(label).toHaveStyle('opacity: 0.6');
});
