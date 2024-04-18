
import {loadLoginEvents, logOut} from "./authController.js";
 import {loadHome} from "./homeController.js";
 import {loadRegister} from "./authController.js";
import {loadCreateRecipe} from "./recipeController.js";

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
