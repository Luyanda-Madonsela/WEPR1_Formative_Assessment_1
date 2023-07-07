import { selectSquare } from '../App';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.requireActual('../App').default,
  selectSquare: jest.fn(),
}));

it('resets the board to an empty state', () => {
  selectSquare();
  expect(selectSquare).toHaveBeenCalledTimes(1);

});