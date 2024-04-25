import {main} from "./app.js";
import {addSubmitListener} from "./util/formUtil.js";
import {createRecipe} from "./data/data.js";

const createRecipeSection = document.getElementById('createRecipe');
const createRecipeForm = createRecipeSection.querySelector('form');

addSubmitListener(createRecipeForm,onCreateRecipe);

let context = null;

export function showCreateRecipe(newContext) {
    main.replaceChildren(createRecipeSection);
    context = newContext;
}

async function onCreateRecipe({name, img, ingredients, steps}) {
    await createRecipe(name, img, ingredients, steps)
    createRecipeForm.reset()
    context.showView('Catalog');
}
