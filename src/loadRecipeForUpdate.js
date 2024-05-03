// import {addSubmitListener} from "./util/utilForm.js";
import {context, main} from "./app.js";
import {getRecipeById, updateRecipe} from "./data/data.js";
import {updateRecipeTemplate} from "./templates/updateRecipeTemplate.js";
import {updateRecipes} from "./generateRecipe.js";

// const updateRecipeSection = document.getElementById('editRecipe');
// const updateRecipeForm = updateRecipeSection.querySelector('form');
//
// addSubmitListener(updateRecipeForm, onUpdateRecipe);

let recipeId;

export async function loadRecipeForUpdate(event) {
     recipeId = event.target.closest('[recipe-id]').getAttribute('recipe-id');
    const recipeById = await getRecipeById(recipeId);
    await context.render(updateRecipeTemplate(recipeById))
}

export async function onUpdate({name, img, ingredients, steps}){
    const response = await updateRecipe(recipeId,name, img, ingredients, steps);
    await updateRecipes()
    context.showView('Catalog');
}
