import commentAPI from './commentToAPI.js';
import date from './date.js';
import variables from './variables.js';

const commentEvent = () => {
  // eslint-disable-next-line consistent-return
  variables.submit.addEventListener('click', (e) => {
    e.preventDefault();
    const position = e.path[0].attributes[2].value;
    const id = parseInt(position, 10);
    if (!variables.text.value || !variables.textarea.value) {
      return null;
    }
    variables.postComment.innerHTML += `
      <li class="commentList">
        <div class="date">${date()}</div>
        <div class="user">${variables.text.value}:</div>
        <div>${variables.textarea.value}</div>
      <li>
    `;
    commentAPI.newComment(id, variables.text.value, variables.textarea.value);
    variables.addComment.reset();
    let sum = parseInt(variables.commentCount.innerHTML, 10);
    sum += 1;
    variables.commentCount.innerHTML = sum;
  });
};

export default commentEvent;