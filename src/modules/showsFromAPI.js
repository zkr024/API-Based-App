import variables from './variables.js';

const loadShows = async () => {
  const answer = await fetch(`${variables.tvAPI}`);
  const data = await answer.json();
  return data;
};

export default loadShows;