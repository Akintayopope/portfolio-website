import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import App from './App';

test('renders app without crashing', () => {
  const router = createMemoryRouter([{ path: '*', element: <App /> }], {
    initialEntries: ['/'],
  });

  const { container } = render(<RouterProvider router={router} />);
  expect(container).toBeInTheDocument();
});
