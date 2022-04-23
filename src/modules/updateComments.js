const updateComments = (comment, position) => {
  if (comment.length) {
    let details = '';
    comment.forEach((message) => {
      details += `
        <li class="commentList">
          <div class="date">${message.creation_date}</div>
          <div class="user">${message.username}:</div>
          <div>${message.comment}</div>
        <li>
      `;
    });
    position.innerHTML = details;
  }
};

export default updateComments;