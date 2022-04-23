import variables from './variables.js';

const getLikesFromAPI = async () => {
  const response = await fetch(`${variables.urlAPI}apps/${variables.keyAPI}likes`);
  const result = await response.json();
  return result;
};

export default getLikesFromAPI;