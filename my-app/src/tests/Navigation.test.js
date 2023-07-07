import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

it('should render the game header', () => {
  render(<Navigation />);
  const header = screen.getByText('TIC-TAC-TOE');
  expect(header).toBeInTheDocument();
});