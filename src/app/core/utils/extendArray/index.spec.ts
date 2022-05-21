import { chunkArray, createArrayToElement } from './index';

describe('Extend Array - utils', () => {
  it('createArrayToElement: Should be array with elements that it not be null or undefined', () => {
    const exampleArray = ['str1', undefined, 'str2', null];

    const expected = ['str1', 'str2'];
    const result = createArrayToElement(exampleArray);

    expect(result).toEqual(expected);
    expect(result.length).toBe(2);
  });

  it('chunkArray: Should be array with 3 elements', () => {
    const exampleArray = ['str1', 'str2', 'str3', 'str4'];

    const expected = [['str1', 'str2', 'str3'], ['str4']];
    const result = chunkArray<string>(exampleArray, 3);

    expect(result).toEqual(expected);
    expect(result.length).toBe(2);
  });
});
