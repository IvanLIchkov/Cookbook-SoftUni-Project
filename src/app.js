
import {showHome} from "./home.js";
import {showLogin, onLogOut} from "./login.js";
import {showRegister} from "./register.js";
import {showCreateRecipe} from "./createRecipe.js";
import {showUpdate} from "./updaterecipe.js";

export const main = document.querySelector('main');
export const header = document.querySelector('header');

const views = {
 'Catalog': showHome,
 'Login': showLogin,
 'Register': showRegister,
 'Logout': onLogOut,
 'Create Recipe': showCreateRecipe,
    'Update': showUpdate
}

document.querySelector('nav').addEventListener('click',(event) => {
 if (event.target.tagName === 'A'){
  const buttonContent = event.target.textContent;
    showView(buttonContent);
 }
})

export let context = {
  showView
}

showView('Catalog')

function showView(viewName){
  const view = views[viewName];
  if (typeof  view == 'function'){
   view(context)
  }
}
