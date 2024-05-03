import {context, header, main} from "./app.js";

import {loadRecipes} from "./generateRecipe.js";
import { navTemplate} from "./templates/navTemplate.js";

const homeSection = document.getElementById('showMyRecipes');

export async function showHome() {

    const cards = await loadRecipes();

    context.renderNav();
}


