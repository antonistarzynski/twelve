const img = document.querySelector('.img');
const artist = document.querySelector('.short').textContent;//

img.classList.add('background');
img.style.backgroundImage = `url(../assets/artists/${artist}.jpeg)`;

const description = document.querySelector('.description')
