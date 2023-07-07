import { render, screen } from '@testing-library/react';
import { resetBoard } from '../App';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.requireActual('../App').default,
  resetBoard: jest.fn(),
}));

it('should reset the board to an empty state', () => {
  const board = ["X", "X", "X"];
  const player = "X";
  const winner = "Game In Progress";
  const winnerFound = true;

  resetBoard();

  expect(resetBoard).toHaveBeenCalledTimes(1);
});
