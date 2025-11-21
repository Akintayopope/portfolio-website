import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';

test('renders radio button', () => {
  render(<Radio label="Test Option" name="test" value="1" />);
  expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
});

test('disabled radio has disabled styling', () => {
  render(<Radio label="Disabled Option" name="test" value="1" disabled />);
  const radio = screen.getByLabelText('Disabled Option');
  expect(radio).toHaveStyle('opacity: 0.6');
});
