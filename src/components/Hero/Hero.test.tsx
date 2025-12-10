import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders hero title', () => {
  render(<Hero title="Test Hero" backgroundImage="test.jpg" />);
  expect(screen.getByText('Test Hero')).toBeInTheDocument();
});

test('disabled hero has opacity styling', () => {
  const { container } = render(
    <Hero title="Disabled Hero" backgroundImage="test.jpg" disabled />
  );

  const heroWrapper = container.firstChild as HTMLElement;
  expect(heroWrapper).toHaveStyle('opacity: 0.5');
});
