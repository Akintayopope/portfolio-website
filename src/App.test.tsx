import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navbar brand or hero text', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Change this to ANY text that actually appears on your homepage or navbar
  expect(screen.getByText(/akintayo/i)).toBeInTheDocument();
});
