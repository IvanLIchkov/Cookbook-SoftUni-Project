import {del, get, post, put} from "./api.js";

export async function getRecipes() {
    return get('/data/recipes');
}
export async function getRecipeById(id) {
    return get('/data/recipes/' + id);
}
export async function createRecipe(name, img, ingredients, steps){
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    return post('/data/recipes/', {name, img, ingredients, steps})
}

export async function updateRecipe(recipeId, name, img, ingredients, steps){
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    return put('/data/recipes/'+ recipeId, {name, img, ingredients, steps})
}

export function deleteRecipe(recipeId){
    return del('/data/recipes/' + recipeId);
}
