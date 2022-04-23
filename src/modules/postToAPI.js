import variables from './variables.js';

/* eslint-disable class-methods-use-this */
class LikeCounter {
  // eslint-disable-next-line camelcase
  newLike(item_id) {
    fetch(`${variables.urlAPI}apps/${variables.keyAPI}likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.text());
  }
}

const likeCounter = new LikeCounter();

export default likeCounter;