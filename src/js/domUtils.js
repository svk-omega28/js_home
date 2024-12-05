'use strict';

export function displayError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

export function renderPost(container, post) {
  container.innerHTML = `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button id="load-comments">Load Comments</button>
    </div>
  `;
}

export function renderComments(container, comments) {
  const commentsElement = document.createElement('div');
  commentsElement.classList.add('comments');
  commentsElement.innerHTML = comments.map(comment => `
    <div class="comment">
      <h3>${comment.name}</h3>
      <p>${comment.body}</p>
      <small>${comment.email}</small>
    </div>
  `).join('');
  container.appendChild(commentsElement);
}

export function clearContainer(container) {
  container.innerHTML = '';
}
