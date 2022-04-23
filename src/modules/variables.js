class Variables {
  intro = document.getElementById('container');

  count = document.getElementById('count');

  refresh = document.getElementById('refresh');

  keyAPI = 'g3mf0gMCPpCVVbKGzPbE/';

  urlAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  tvAPI = 'https://api.tvmaze.com/shows';

  modal = document.querySelector('.modal');

  overlay = document.getElementById('overlay');

  modalImg = document.querySelector('.modal-image');

  cardName = document.querySelector('.cardName');

  genres = document.querySelector('.genres');

  languages = document.querySelector('.languages');

  cardSummary = document.querySelector('.cardSummary');

  closeModal = document.querySelector('.close-button');

  postComment = document.querySelector('.postComment');

  text = document.getElementById('text');

  textarea = document.getElementById('textarea');

  submit = document.querySelector('.submit');

  commentCount = document.getElementById('commentCount');

  addComment = document.querySelector('.addComment');
}

const variables = new Variables();

export default variables;