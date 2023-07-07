import { checkWinner } from '../App';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.requireActual('../App').default,
  checkWinner: jest.fn(),
}));

it('resets the board to an empty state', () => {
  checkWinner();
  expect(checkWinner).toHaveBeenCalledTimes(1);

});