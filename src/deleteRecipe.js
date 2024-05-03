import{deleteRecipe} from "./data/data.js";
import {context} from "./app.js";
import {updateRecipes} from "./generateRecipe.js";

export async function onDeleteRecipe(event){
    const recipeIdForDelete = event.target.closest('[recipe-id]').getAttribute('recipe-id');

    await deleteRecipe(recipeIdForDelete);
    await updateRecipes()
    context.showView('Catalog')
}
