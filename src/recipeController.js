import {main} from "./app.js";
import {getRecipeById, loadHome} from "./homeController.js";

const createRecipeSection = document.getElementById('createRecipe');
const updateRecipeSection = document.getElementById('editRecipe');

createRecipeSection.querySelector('form').addEventListener('submit', createNewRecipe);
updateRecipeSection.querySelector('form').addEventListener('submit', updateRecipe)
export function loadCreateRecipe() {
    main.replaceChildren(createRecipeSection);
}
async function createNewRecipe(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/data/recipes/'

    try{
        const response = await fetch(url, generateOptions(event.target));
        if (response.ok === false){
            throw await response.json();
        }
        await loadHome()
    }catch (e){
        alert(e.message)
    }
}
async function updateRecipe(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/data/recipes/' + sessionStorage.getItem('recipeForUpdateId');
    try{
        const response = await fetch(url, generateOptions(event.target));
        if (response.ok === false){
            throw await response.json();
        }
        await loadHome()
    }catch (e){
        alert(e.message)
    }
    sessionStorage.removeItem('recipeForUpdateId');
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

export function deleteRecipe(event) {

    const recipeId = event.target.parentElement.getAttribute('recipe-id');
    const url = 'http://localhost:3030/data/recipes/' + recipeId;

    const options = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${sessionStorage.getItem('accessToken')}`
        }
    };

    const response = fetch(url, options)
        .then(res => res.json())
        .then(loadHome)
        .catch(err => alert(err.message));
}
function generateOptions(eventTarget) {
    const formType = eventTarget.querySelector('input[type=submit]').value;
    const formData = new FormData(eventTarget);
    let {name, img, ingredients, steps} = Object.fromEntries(formData.entries());
    if (name === '' || img === '' || ingredients === '' || steps === ''){
        throw Error('All fields are required');
    }
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    const options = {
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': `${sessionStorage.accessToken}`
        },
        body: JSON.stringify({name, img, ingredients, steps})
    };
    if (formType === 'Update Recipe'){
        options["method"] = 'put';
    }
    return options;
}
