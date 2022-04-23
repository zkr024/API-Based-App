/**
 * @jest-environment jsdom
 */

import showCounter from '../showCounter.js';
import variables from '../variables.js';

jest.mock('../variables.js');

describe('update the counter based on number of cards', () => {
  it('display the correct number of cards', () => {
    const array = [1, 2, 3, 4, 5];
    expect(showCounter(array)).toEqual(array.length);
  });

  it('returns null if no array is added', () => {
    const array = '';
    expect(showCounter(array)).toEqual(null);
  });

  it('updates the innerHTML of count', () => {
    const array = ['play', 2, 'study', 4, 'read'];
    expect(showCounter(array)).toEqual(variables.count.innerHTML = 5);
  });
});