'use strict';

const maxImages = 9;

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * maxImages) + 1;
  return `./images/pic${randomIndex}.jpg`;
};

document.getElementById('randomImage').src = getRandomImage();
