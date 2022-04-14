// @ts-ignore
// const URL =
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// const appID = 'z8ysUFZMtLxIv6OBwEl9';
// const endPoint = `${URL}/apps/${appID}/comments/`;

const postComment = async (buttonId, userName, userComment) => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/z8ysUFZMtLxIv6OBwEl9/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: buttonId,
        username: userName.value,
        comment: userComment.value,
      }),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    },
  );
  return res.text();
};

const getComments = async (button) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/z8ysUFZMtLxIv6OBwEl9/comments?item_id=${button}`,
  );
  return response.json();
};

const displayComments = (commentsDiv, comments) => {
  if (comments.length >= 1) {
    commentsDiv.innerHTML = '';
    comments.forEach((comment) => {
      // Create comment container to hold thumnail div and main comment div
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      // Create comment thumnail div
      const userThumbnail = document.createElement('div');
      userThumbnail.className = 'author-thumbnail';
      // a inside thumnail div
      const thumbnailLink = document.createElement('a');
      thumbnailLink.className = 'user-name-link';
      thumbnailLink.href = '#';
      // text inside a tag
      const thumbnailContent = document.createElement('span');
      thumbnailContent.textContent = 'U';
      // put text inside a tag
      thumbnailLink.appendChild(thumbnailContent);
      // put a tag inside thumnail div
      userThumbnail.appendChild(thumbnailLink);
      // create main comment div
      const commentMain = document.createElement('div');
      commentMain.className = 'comment-main';
      commentMain.innerHTML = `
       <div id="comment-header">
          <div id="header-author">
             <h3>
              <a href="" id="author-text">
                <span>${comment.username}</span>
              </a>
             </h3>
             <a href="" id="comment-date">
                <span>${comment.creation_date}</span>
             </a>
          </div>
       </div>
       <div id="comment-text">
          <p>${comment.comment}</p>
       </div>
      `;
      // append both thumnail div and main comment div inside comment container
      commentContainer.append(userThumbnail, commentMain);
      // append individual comment containers into the comments div
      commentsDiv.appendChild(commentContainer);
    });
  }
};

export { postComment, getComments, displayComments };
