import { checkDraw } from '../App';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.requireActual('../App').default,
  checkDraw: jest.fn(),
}));

it('resets the board to an empty state', () => {
  checkDraw();
  expect(checkDraw).toHaveBeenCalledTimes(1);

});