import variables from './variables.js';

const close = () => {
  variables.closeModal.addEventListener('click', () => {
    variables.overlay.classList.remove('active');
    variables.modal.classList.remove('active');
    variables.postComment.innerHTML = '';
    variables.commentCount.innerHTML = 0;
  });
};

export default close;