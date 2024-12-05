'use strict';

export function fetchCommentsByPostId(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Comments not found');
      }
      return response.json();
    });
}
