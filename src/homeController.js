import {main} from "./app.js";
import{header} from "./app.js";
import {createElement} from "../util/createHtmlElement.js";
import {deleteRecipe, insertDataIntoForm} from "./recipeController.js";

const homeSection = document.getElementById('showMyRecipes');

export async function loadHome() {
    homeSection.innerHTML = ''
    const recipes = await getRecipes();

    const cards = recipes.map(createRecipePreview);
    cards.forEach(c => homeSection.appendChild(c));
    navBarAuth();
    main.replaceChildren(homeSection)
}
async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return Object.values(recipes);
}

export async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(await createRecipeCard(fullRecipe));
    }
}

async function createRecipeCard(recipe) {
    const userToken = sessionStorage.userId;
    const recipeOwnerId = recipe._ownerId;

    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );
    if (userToken === recipeOwnerId){
        const descriptionSection = result.querySelector(`.description`);
        const buttonsSection = createElement('div', descriptionSection,null,null,'buttonsSection', {'recipe-id': `${recipe._id}`});

        const editBtn = createElement('button',buttonsSection,'<i class="fa-solid fa-pen"></i> Edit', null, null, null, true);
        editBtn.addEventListener('click', insertDataIntoForm);

        const deleteBtn = createElement('button',buttonsSection,'<i class="fa-light fa-x"></i> Delete', null, null,null, true);
        deleteBtn.addEventListener('click', deleteRecipe)
    }
    return result;
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
function navBarAuth() {

    const userNav =  header.querySelector('#user');
    const guestNav =  header.querySelector('#guest');

    const accessToken = sessionStorage.getItem('accessToken');
    if (sessionStorage.getItem('accessToken')!== null){
        header.querySelector('#user').style.display = 'inline-block'
        header.querySelector('#guest').style.display = 'none'

    }else{
        header.querySelector('#user').style.display = 'none'
        header.querySelector('#guest').style.display = 'inline-block'
}
}

