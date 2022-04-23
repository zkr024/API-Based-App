import variables from './variables.js';

class CommentAPI {
  newComment(item, name, message) {
    fetch(`${variables.urlAPI}apps/${variables.keyAPI}comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: item,
        username: name,
        comment: message,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.text())
      .then(this.getFromAPI(item));
  }

  // eslint-disable-next-line consistent-return
  getFromAPI = async (id) => {
    try {
      const response = await fetch(`${variables.urlAPI}apps/${variables.keyAPI}comments?item_id=${id}`);
      if (response.status === 200) {
        const result = await response.json();
        return result;
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

const commentAPI = new CommentAPI();

export default commentAPI;