import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button visibly', () => {
  render(<Button label="Click Me" />);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test('disabled button has greyed style', () => {
  render(<Button label="Click Me" disabled />);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toHaveStyle({
    background: '#c9cdd3',
    cursor: 'not-allowed',
  });
});
