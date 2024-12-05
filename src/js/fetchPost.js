'use strict';

export function fetchPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Post not found');
      }
      return response.json();
    });
}
