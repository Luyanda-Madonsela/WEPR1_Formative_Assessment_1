import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders game header', () => {
  render(<Navigation />);
  const linkElement = screen.getByText('TIC-TAC-TOE');
  expect(linkElement).toBeInTheDocument();
});