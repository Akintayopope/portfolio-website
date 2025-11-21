import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Image } from './Image';

test('renders image', () => {
  render(<Image src="test.jpg" alt="Test Image" />);
  expect(screen.getByAltText('Test Image')).toBeInTheDocument();
});

test('disabled image has opacity styling', () => {
  render(<Image src="test.jpg" alt="Test Image" disabled />);
  const img = screen.getByAltText('Test Image');
  expect(img).toHaveStyle('opacity: 0.5');
});
