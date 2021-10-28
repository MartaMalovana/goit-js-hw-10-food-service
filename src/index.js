import './sass/main.scss';
import element from './templates/menu_element.hbs';
import ingredients from './menu.json';

const menuElements = function () {
    return ingredients.map(element).join();
};

const menuListRef = document.querySelector('ul.js-menu');
menuListRef.innerHTML = menuElements();

const themeInput = document.querySelector('input.theme-switch__toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
body.classList.add(`${Theme.LIGHT}`);

const onInputThemeChange = function () {
  if(body.classList.contains(`${Theme.LIGHT}`)) {
    console.log(55);
    body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  }; body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);    

};

themeInput.addEventListener('change', onInputThemeChange);