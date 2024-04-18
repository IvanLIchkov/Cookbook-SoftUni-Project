
import {loadLoginEvents, logOut} from "./login.js";
 import {loadHome} from "./loadHome.js";
 import {loadRegister} from "./register.js";
import {loadCreateRecipe} from "./createRecipe.js";

export const main = document.querySelector('main');
export const header = document.querySelector('header');

const [loginLink, registerLink] = header.querySelectorAll('div#guest a');
const [createRecipeLink, logoutLink] = header.querySelectorAll('div#user a');

header.querySelector('nav a').addEventListener('click', loadHome)
loginLink.addEventListener('click', loadLoginEvents)
registerLink.addEventListener('click', loadRegister)
 logoutLink.addEventListener('click', logOut)
createRecipeLink.addEventListener('click', loadCreateRecipe)
document.querySelectorAll('section').forEach(s => s.remove());
 loadHome()
