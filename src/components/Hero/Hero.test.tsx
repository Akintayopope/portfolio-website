import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders hero title', () => {
  render(<Hero title="Test Hero" backgroundImage="test.jpg" />);
  expect(screen.getByText('Test Hero')).toBeInTheDocument();
});

test('disabled hero has opacity styling', () => {
  render(<Hero title="Disabled Hero" backgroundImage="test.jpg" disabled />);

  const hero = screen.getByRole('region');
  expect(hero).toHaveStyle('opacity: 0.5');
});
