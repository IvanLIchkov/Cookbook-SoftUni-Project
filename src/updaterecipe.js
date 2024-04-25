import {addSubmitListener} from "./util/formUtil.js";
import {context, main} from "./app.js";
import {getRecipeById, updateRecipe} from "./data/data.js";

const updateRecipeSection = document.getElementById('editRecipe');
const updateRecipeForm = updateRecipeSection.querySelector('form');

addSubmitListener(updateRecipeForm, onUpdateRecipe);

export async function showUpdate(event) {
    await insertDataIntoForm(event)
    main.replaceChildren(updateRecipeSection);
}
async function onUpdateRecipe({ name, img, ingredients, steps}){
    await updateRecipe(sessionStorage.getItem('recipeForUpdateId'), name, img, ingredients, steps);
    context.showView('Catalog')
}

export async function insertDataIntoForm(event){
    const recipeIdForEdit = event.target.parentElement.getAttribute('recipe-id');
    const {name, img, ingredients, steps} = await getRecipeById(recipeIdForEdit);

    updateRecipeSection.querySelector('input[name="name"]').value = name;
    updateRecipeSection.querySelector('input[name="img"]').value = img;


    updateRecipeSection.querySelector('textarea[name="ingredients"]').value = ingredients.join('\n');
    updateRecipeSection.querySelector('textarea[name="steps"]').value = steps.join('\n');

    main.replaceChildren(updateRecipeSection)
    sessionStorage.setItem('recipeForUpdateId', recipeIdForEdit);
}
