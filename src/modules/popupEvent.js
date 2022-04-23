import likes from './likeEvent.js';
import close from './closeModal.js';
import commentAPI from './commentToAPI.js';
import updateComments from './updateComments.js';
import commentCounter from './commentCounter.js';
import variables from './variables.js';

const popup = async () => {
  const cards = await likes();
  const comment = document.querySelectorAll('.comment');
  comment.forEach((button) => {
    button.addEventListener('click', (e) => {
      const idPosition = e.path[2].childNodes[3].childNodes[3].childNodes[1].attributes[0].value;
      const idNumber = parseInt(idPosition, 10);
      cards.forEach((card) => {
        if (card.id === idNumber) {
          variables.cardName.innerHTML = card.name;
          variables.genres.innerHTML = `Genres: ${card.genres}`;
          variables.languages.innerHTML = `Language: ${card.language}`;
          variables.cardSummary.innerHTML = card.summary;
          variables.modalImg.attributes[1].value = card.image.medium;
          variables.submit.id = `${card.id}`;
          variables.modal.classList.add('active');
          variables.overlay.classList.add('active');

          const update = async () => {
            const dataAPI = await commentAPI.getFromAPI(idNumber);
            if (dataAPI) {
              updateComments(dataAPI, variables.postComment);
              commentCounter(dataAPI, variables.commentCount);
            }
          };
          update();
        }
      });
    });
  });
  close();
};

export default popup;