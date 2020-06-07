import './style.css';
import sendRequest from './js/handler';
import swiper from './js/slider';

const searchInputBox = document.querySelector('body > main > form > div > input');
const searchForm = document.querySelector('body > main > form');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');
let word;
let page;

const setCursorOnLoad = () => {
  searchInputBox.focus();
  searchInputBox.select();
};

function submitForm(e) {
  e.preventDefault();
  if (searchInputBox.value.length > 0) {
    word = searchInputBox.value;
    page = 1;
    loader.classList.remove('hidden');
    sendRequest(word, page).then((result) => {
      if (result.length > 0) {
        swiper.removeAllSlides();
        swiper.appendSlide(result);
      } else {
        errorMessage.innerHTML = 'Nothing found';
      }
      loader.classList.add('hidden');
    });
  }
}

function getMore() {
  page += 1;
  sendRequest(word, page).then((result) => {
    if (result.length > 0) {
      swiper.appendSlide(result);
    } else {
      // errorMessage.innerHTML = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setCursorOnLoad();
  loader.classList.remove('hidden');
  sendRequest('home').then((result) => {
    swiper.appendSlide(result);
    loader.classList.add('hidden');
  });
  searchForm.addEventListener('submit', (e) => submitForm(e));
  swiper.on('reachEnd', () => getMore());
});
