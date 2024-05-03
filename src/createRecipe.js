import {context, main} from "./app.js";
import {createRecipe} from "./data/data.js";
import {createRecipeTemplate} from "./templates/createRecipe.js";
import {loadRecipes, updateRecipes} from "./generateRecipe.js";


export async function showCreateRecipe() {
    context.render(createRecipeTemplate);
}

export async function onCreateRecipe({name, img, ingredients, steps}) {
    await createRecipe(name, img, ingredients, steps)
    await updateRecipes();
    await loadRecipes()
}
