import { elegibleDate } from './index';

describe('Date - utils', () => {
  describe('elegibleDate', () => {
    it('Should be date with the format yyyy-mm-dd ', () => {
      const date = new Date('05-20-2022');

      const result = elegibleDate(date);
      const expected = '2022-05-20';

      expect(result).toBe(expected);
    });
  });
});
