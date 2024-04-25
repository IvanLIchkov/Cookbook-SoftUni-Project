import{deleteRecipe} from "./data/data.js";
import {context} from "./app.js";

export async function onDeleteRecipe(event){
    const recipeIdForDelete = event.target.parentElement.getAttribute('recipe-id');

    await deleteRecipe(recipeIdForDelete);
    context.showView('Catalog')
}
