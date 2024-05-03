
import {showHome} from "./home.js";
import {onLogOut} from "./login.js";
import {showRegister} from "./register.js";
import {showCreateRecipe} from "./createRecipe.js";
import {render} from '../node_modules/lit-html/lit-html.js'
import {showLogin} from "./templates/loginTemplate.js";
import {navTemplate} from "./templates/navTemplate.js";

export const main = document.querySelector('main');
export const header = document.querySelector('header');

const views = {
 'Catalog': showHome,
 'Login': showLogin,
 'Register': showRegister,
 'Logout': onLogOut,
 'Create Recipe': showCreateRecipe
}


export let context = {
  showView,
    render: renderView,
    renderNav: renderNavView
}

showView('Catalog')

function showView(viewName){
  const view = views[viewName];
  if (typeof  view == 'function'){
   view(context)
  }
}

function renderView(content){
    render(content,main);
}
function renderNavView() {
    render(navTemplate(sessionStorage), header);
}
