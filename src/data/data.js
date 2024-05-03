import {del, get, post, put} from "./api.js";

export async function getRecipes() {
    return await get('/data/recipes');
}
export async function getRecipeById(id) {
    return await get('/data/recipes/' + id);
}
export async function createRecipe(name, img, ingredients, steps){
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    return await post('/data/recipes/', {name, img, ingredients, steps})
}

export async function updateRecipe(recipeId, name, img, ingredients, steps){
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    return await put('/data/recipes/'+ recipeId, {name, img, ingredients, steps})
}

export async function deleteRecipe(recipeId){
    return await del('/data/recipes/' + recipeId);
}
