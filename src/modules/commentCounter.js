const commentCounter = (array, position) => {
  if (array) {
    position.innerHTML = `${array.length}`;
  } else {
    position.innerHTML = 0;
  }
  return position.innerHTML;
};

export default commentCounter;