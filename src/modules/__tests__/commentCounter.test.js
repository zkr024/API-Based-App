/**
 * @jest-environment jsdom
 */

import commentCounter from '../commentCounter.js';

document.body.innerHTML = '<div id="commentCount"></div>';

describe('update the counter based on number of comments per card', () => {
  it('update the correct amount of comments', () => {
    const count = document.getElementById('commentCount');
    const array = [1, 2, 3, 4, 5];
    const string = String(array.length);
    expect(commentCounter(array, count)).toEqual(string);
  });

  it('add a 0 if there\'re no comments', () => {
    const count = document.getElementById('commentCount');
    const array = [];
    expect(commentCounter(array, count)).toEqual('0');
  });

  it('update the innerHTML of the counter', () => {
    const count = document.getElementById('commentCount');
    const array = ['one', 'two', 'three', 'four'];
    expect(commentCounter(array, count)).toEqual(count.innerHTML = '4');
  });
});
