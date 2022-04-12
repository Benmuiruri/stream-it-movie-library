const movieModal = async (commentButtons, sampleMovies) => { //eslint-disable-line
  commentButtons.forEach((button, i) => { //eslint-disable-line
    button.addEventListener('click', async () => {
      alert('I have been clicked');
    });
  });
};

export default movieModal;
