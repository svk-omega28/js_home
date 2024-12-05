'use strict';

import { fetchPostById } from './fetchPost.js';
import { fetchCommentsByPostId } from './fetchComments.js';
import { validatePostId } from './validateInput.js';
import { displayError, renderPost, renderComments, clearContainer } from './domUtils.js';

document.getElementById('find-post').addEventListener('click', () => {
  const postId = document.getElementById('post-id').value;
  const postContainer = document.getElementById('post-container');

  clearContainer(postContainer);

  if (!validatePostId(postId)) {
    displayError(postContainer, 'Please enter a valid Post ID (1-100).');
    return;
  }

  fetchPostById(postId)
    .then(post => {
      renderPost(postContainer, post);

      document.getElementById('load-comments').addEventListener('click', () => {
        fetchCommentsByPostId(postId)
          .then(comments => renderComments(postContainer, comments))
          .catch(err => displayError(postContainer, `Error loading comments: ${err.message}`));
      });
    })
    .catch(err => {
      displayError(postContainer, `Error loading post: ${err.message}`);
    });
});
