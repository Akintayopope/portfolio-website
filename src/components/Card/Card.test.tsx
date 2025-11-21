import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders card title', () => {
  render(<Card title="My Card" />);
  expect(screen.getByText('My Card')).toBeInTheDocument();
});

test('disabled card has reduced opacity', () => {
  const { container } = render(<Card title="Disabled" disabled />);
  const root = container.firstChild as HTMLElement;
  expect(root).toHaveStyle('opacity: 0.6');
});
