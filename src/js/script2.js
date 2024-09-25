'use strict';

const maxImages = 9;
const loadImage = () => {
  const imageNumber = parseInt(document.getElementById('imageNumber').value);

  if (imageNumber >= 1 && imageNumber <= maxImages) {
    document.getElementById('selectedImage').src = `./images/pic${imageNumber}.jpg`;
    alert(`Вы выбрали изоброжение номер ${imageNumber}`);
  } else {
    alert(`введите число от 1 до ${maxImages}`);
  }
};

document.getElementById('loadImageBtn').addEventListener('click', loadImage);
