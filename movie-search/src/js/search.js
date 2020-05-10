import sendRequest from './handler';

const searchInputBox = document.querySelector('body > main > form > div > input');
// eraseButton = document.querySelector('body > main > form > div > i.fa.fa-times.icon.delete');
const searchForm = document.querySelector('body > main > form');
const setCursorOnLoad = () => {
  searchInputBox.focus();
  searchInputBox.select();
};


function submitForm(e) {
  e.preventDefault();
  if (searchInputBox.value.length > 0) {
    sendRequest(searchInputBox.value);
  }
}

export default function setSearchBox() {
  setCursorOnLoad();
  searchForm.addEventListener('submit', (e) => submitForm(e));
}
