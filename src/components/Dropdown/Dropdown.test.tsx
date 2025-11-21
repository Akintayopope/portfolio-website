import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('renders dropdown with options', () => {
  render(<Dropdown label="Country" options={['Canada', 'USA']} id="country" />);
  expect(screen.getByLabelText('Country')).toBeInTheDocument();
});

test('disabled dropdown has styles', () => {
  render(<Dropdown label="Country" options={['Canada']} disabled />);
  const select = screen.getByLabelText('Country');
  expect(select).toHaveStyle('opacity: 0.6');
});
