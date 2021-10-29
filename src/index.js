import './sass/main.scss';
import element from './templates/menu_element.hbs';
import ingredients from './menu.json';

const menuElements = function () {
    return ingredients.map(element).join('');
};

const menuListRef = document.querySelector('ul.js-menu');
menuListRef.innerHTML = menuElements();

const themeInput = document.querySelector('input.theme-switch__toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const getThemeFromLocalStorage = function () {
  if(localStorage.getItem('current_theme')) {
    body.classList = localStorage.getItem('current_theme');
  } else {
    body.classList.add(`${Theme.LIGHT}`);
  };
  
  if(body.classList.contains(`${Theme.DARK}`)) {
        themeInput.checked = true;
      };
};
getThemeFromLocalStorage();

const onInputThemeChange = function () {
  if(body.classList.contains(`${Theme.LIGHT}`)) {
    body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  } else {
    body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
    
  };
  localStorage.setItem('current_theme', body.classList);
};

themeInput.addEventListener('change', onInputThemeChange);