import { postComment, getComments } from './comments-handler.js';
import { displayComments, countComments } from './display-comments.js';

const isVisible = 'is-visible';

const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      const modal = document.createElement('article');
      modal.className = 'modal';

      const popUpDiv = document.createElement('div');
      popUpDiv.className = 'modal-dialog';
      modal.classList.add(isVisible);
      modal.appendChild(popUpDiv);

      const movieImgDiv = document.createElement('div');
      const movieImg = document.createElement('img');
      const buttonDiv = document.createElement('div');
      const movieDownloadBtn = document.createElement('button');
      const movieWatchBtn = document.createElement('button');
      movieImgDiv.className = 'movieCard';
      movieImg.className = 'movieCard-img';
      movieImg.src = `${sampleMovies[i].image.original}`;
      buttonDiv.className = 'buttonDiv';
      movieDownloadBtn.className = 'popUp-button';
      movieDownloadBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i>Download';
      movieWatchBtn.className = 'popUp-button';
      movieWatchBtn.innerHTML = 'Watch Now';
      movieImgDiv.appendChild(movieImg);
      buttonDiv.appendChild(movieDownloadBtn);
      buttonDiv.appendChild(movieWatchBtn);
      movieImgDiv.appendChild(buttonDiv);
      popUpDiv.appendChild(movieImgDiv);

      const movieContentDiv = document.createElement('div');
      const movieTitle = document.createElement('h1');
      const movieGenre = document.createElement('h2');
      const movieReleaseDate = document.createElement('h2');
      const movieNetwork = document.createElement('h1');
      const downloadSubtitle = document.createElement('a');
      const ratingStar = document.createElement('i');
      const movieRating = document.createElement('span');
      const movieSummary = document.createElement('p');
      movieContentDiv.className = 'movieContent';
      movieTitle.textContent = `${sampleMovies[i].name}`;
      movieTitle.className = 'popUp-title';
      movieGenre.innerHTML = `${sampleMovies[i].genres[0]}`;
      movieGenre.className = 'popUp-Genre';
      movieReleaseDate.innerHTML = `${sampleMovies[i].premiered}`;
      movieReleaseDate.className = 'popUp-releaseDate';
      movieNetwork.innerHTML = '';
      movieNetwork.className = '';
      downloadSubtitle.href = '#';
      downloadSubtitle.innerHTML = '<i class="fa-solid fa-angles-down"></i> Download Subtitles';
      downloadSubtitle.className = 'subtitle-button';
      ratingStar.classList.add('fa-solid');
      ratingStar.classList.add('fa-star');
      ratingStar.classList.add('overlay-star');
      movieRating.className = 'movie-overlay-rating';
      if (sampleMovies[i].rating.average) {
        movieRating.innerHTML = `${sampleMovies[i].rating.average} / 10`;
      } else {
        movieRating.innerHTML = '0 / 10';
      }
      movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
        0,
        200,
      )}......`;
      movieSummary.className = 'popUp-summary';
      movieContentDiv.appendChild(movieTitle);
      movieContentDiv.appendChild(movieGenre);
      movieContentDiv.appendChild(movieReleaseDate);
      movieContentDiv.appendChild(downloadSubtitle);
      movieContentDiv.appendChild(ratingStar);
      movieContentDiv.appendChild(movieRating);
      movieContentDiv.appendChild(movieSummary);
      popUpDiv.appendChild(movieContentDiv);

      const closeModalBtn = document.createElement('button');
      closeModalBtn.innerHTML = '';
      closeModalBtn.className = 'close-proj-modal';
      popUpDiv.appendChild(closeModalBtn);
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
      });

      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      document.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      // Comments
      const commentSection = document.createElement('section');
      commentSection.className = 'comment-section';
      const formDiv = document.createElement('div');
      formDiv.className = 'add-comment';
      const formHeaderDiv = document.createElement('div');
      formHeaderDiv.className = 'add-comment-header';
      const formHeader = document.createElement('h2');
      const formIcon = document.createElement('i');
      formIcon.classList.add('fa-solid');
      formIcon.classList.add('fa-message');
      formHeader.innerHTML = 'Add your comment';
      formHeaderDiv.append(formIcon, formHeader);
      const commentForm = document.createElement('form');
      commentForm.className = 'add-comment-form';

      const userName = document.createElement('input');
      userName.className = 'user-name';
      userName.placeholder = 'Username...';
      const userComment = document.createElement('textarea');
      userComment.className = 'user-comment';
      userComment.placeholder = 'Share your comments ...';
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Submit Comment';
      commentBtn.id = `movie_cmt_${sampleMovies[i].id}`;
      commentForm.append(userName, userComment, commentBtn);
      formDiv.append(formHeaderDiv, commentForm);

      const commentsDiv = document.createElement('div');
      commentsDiv.className = 'display-comments';
      const comments = await getComments(commentBtn.id);
      const commentsCount = document.createElement('h3');
      commentsCount.className = 'comments-count';
      commentsDiv.append(commentsCount);
      countComments(commentsCount, comments);
      displayComments(commentsDiv, comments);

      commentBtn.addEventListener('click', async (e) => {
        const resMsg = document.createElement('span');
        if (userName.value === '' || userComment.value === '') {
          e.preventDefault();
          resMsg.className = 'error-msg';
          resMsg.innerText = 'Please fill out your Username and add a comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
        } else {
          e.preventDefault();
          resMsg.className = 'success-msg';
          resMsg.innerText = 'Successfully added your comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
          await postComment(commentBtn.id, userName, userComment);
          const myComments = await getComments(commentBtn.id);
          countComments(commentsCount, myComments);
          displayComments(commentsDiv, myComments);
          commentForm.reset();
        }
      });

      commentSection.append(formDiv, commentsDiv);
      popUpDiv.appendChild(commentSection);
      const readMore = document.createElement('button');
      readMore.innerHTML = 'Read More';
      readMore.className = 'readMoreBtn';
      movieContentDiv.appendChild(readMore);
      readMore.addEventListener('click', () => {
        if (readMore.innerHTML === 'Read More') {
          readMore.innerHTML = 'Read Less';
          movieSummary.innerHTML = `${sampleMovies[i].summary}`;
        } else {
          readMore.innerHTML = 'Read More';
          movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
            0,
            400,
          )}......`;
        }
      });
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
    });
  });
};
export default movieModal;
