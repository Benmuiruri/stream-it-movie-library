const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      alert('I have been clicked');
    });
  });
};

export default movieModal;
