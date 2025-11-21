import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInput } from './Text';

test('renders text input visibly via label', () => {
  render(<TextInput label="Username" />);
  const input = screen.getByLabelText('Username');
  expect(input).toBeInTheDocument();
});

test('applies disabled styling correctly', () => {
  render(<TextInput label="Disabled field" disabled />);
  const input = screen.getByLabelText('Disabled field');
  expect(input).toHaveStyle({
    background: '#e5e7eb',
    cursor: 'not-allowed',
  });
});
