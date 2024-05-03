import {html, render} from '../../node_modules/lit-html/lit-html.js'
import {loadRecipes} from "../generateRecipe.js";
import {getRecipes} from "../data/data.js";
import {loadRecipeForUpdate} from "../loadRecipeForUpdate.js";
import {onDeleteRecipe} from "../deleteRecipe.js";

const recipes = await getRecipes()

export const showCatalog =(recipes) => html`
	<section id="showMyRecipes">
		${recipes.map(templatePreviewRecipe)}
	</section>
`

const templatePreviewRecipe = (recipe)  => html`
	${
			recipe.showFullCard ? html`
    
        <article @click="${() =>  toggleCard(recipe)}">
        <h2>${recipe.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${recipe.img}">
            </div>
			<div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
            </ul>
        </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${recipe.steps.map(s => html`<p>${s}</p>`)}
	        ${sessionStorage.userId === recipe._ownerId ? buttonsTemplate(recipe) : null}
        </div>
    </article>` : html`
	<article @click="${() =>  toggleCard(recipe)}" class="preview">
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}" alt="Recipe img">
        </div>
    </article>` 
}`;

async function toggleCard(recipe) {
	recipe.showFullCard = !recipe.showFullCard;
	await loadRecipes();

}

const buttonsTemplate = (recipe) => html`
    <div id="buttonsSection" recipe-id="${recipe._id}">
		<button @click="${(event) => loadRecipeForUpdate(event)}">
			<i class="fa-solid fa-pen"></i> Edit
		</button>
		<button @click="${(event) => onDeleteRecipe(event)}">
			<i class="fa-light fa-x"></i> Delete
		</button>
    </div>
`
