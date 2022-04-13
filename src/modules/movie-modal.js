const isVisible = 'is-visible';

const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      // Create movie modal
      const modal = document.createElement('article');
      modal.className = 'modal';
      // Create div inside modal
      const insideDiv = document.createElement('div');
      insideDiv.className = 'modal-dialog';
      modal.classList.add(isVisible);
      modal.appendChild(insideDiv);
      // Create image inside div
      const movieImgDiv = document.createElement('div');
      const movieImg = document.createElement('img');
      movieImgDiv.className = 'movie-image';
      movieImg.src = `${sampleMovies[i].image.medium}`;
      movieImgDiv.appendChild(movieImg);
      insideDiv.appendChild(movieImgDiv);

      // Close button
      const closeModalBtn = document.createElement('button');
      closeModalBtn.innerHTML = 'X';
      closeModalBtn.className = 'close-proj-modal';
      movieImgDiv.appendChild(closeModalBtn);
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
      });

      // Add modal to body
      document.body.appendChild(modal);
    });
  });
};

export default movieModal;
