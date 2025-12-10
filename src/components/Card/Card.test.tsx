import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders card title', () => {
  render(<Card title="My Card" />);
  expect(screen.getByText('My Card')).toBeInTheDocument();
});

test('disabled card has reduced opacity', () => {
  render(<Card title="Disabled" disabled />);

  // Query card by role instead of accessing container DOM
  const card = screen.getByRole('article');
  expect(card).toHaveStyle('opacity: 0.6');
});
