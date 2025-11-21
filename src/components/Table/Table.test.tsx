import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table', () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>,
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('disabled table has opacity', () => {
  const { container } = render(
    <Table disabled>
      <tbody>
        <tr>
          <td>Disabled</td>
        </tr>
      </tbody>
    </Table>,
  );
  const table = container.querySelector('table');
  expect(table).toHaveStyle('opacity: 0.6');
});
