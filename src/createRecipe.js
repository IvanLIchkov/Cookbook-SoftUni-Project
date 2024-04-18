import {main} from "./app.js";
import {getRecipeById} from "./loadHome.js";

const createRecipeSection = document.getElementById('createRecipe');
const updateRecipeSection = document.getElementById('editRecipe');

createRecipeSection.querySelector('form').addEventListener('submit', createNewRecipe);
updateRecipeSection.querySelector('form').addEventListener('submit', updateRecipe)
export function loadCreateRecipe() {
    main.replaceChildren(createRecipeSection);
}
async function updateRecipe(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/data/recipes/' + sessionStorage.getItem('recipeForUpdateId');
    try{
        const response = await fetch(url, generateOptions(event.target));
        if (response.ok === false){
            throw await response.json();
        }
        window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
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


async function createNewRecipe(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/data/recipes'

    try{
        const response = await fetch(url, generateOptions(event.target));
        if (response.ok === false){
            throw await response.json();
        }
        window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
    }catch (e){
        alert(e.message)
    }
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
