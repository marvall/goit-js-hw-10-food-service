import './style.scss';
import gallery from './menu.json';
import makeGallery from './templates/gallery-item.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const galleryDOM = document.querySelector('.js-menu');
const bodyDOM = document.querySelector('body');
const themCanger = document.querySelector('.theme-switch__toggle');

galleryDOM.insertAdjacentHTML('beforeend', makeGallery(gallery));
if (localStorage.getItem('setting')) {
  let setting = localStorage.getItem('setting');
  bodyDOM.classList.add(setting);
  if (setting === 'dark-theme') {
    themCanger.checked = true;
  }
}
themCanger.addEventListener('change', function () {
  bodyDOM.className = '';
  if (this.checked) {
    bodyDOM.classList.add(Theme.DARK);
    localStorage.setItem('setting', Theme.DARK);
  } else {
    bodyDOM.classList.add(Theme.LIGHT);
    localStorage.setItem('setting', Theme.LIGHT);
  }
});
