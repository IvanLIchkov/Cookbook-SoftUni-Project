import {html} from '../../node_modules/lit-html/lit-html.js'
import {onSubmit} from "../util/utilForm.js";
import {onUpdate} from "../loadRecipeForUpdate.js";

export const updateRecipeTemplate = (recipe) => html`
	<section id="editRecipe">
		<main>
			<article>
				<h2>Edit Recipe</h2>
				<form @submit="${(event) => onSubmit(event, onUpdate)}">
					<label>Name: <input type="text" name="name" placeholder="Recipe name" value="${recipe.name}"></label>
					<label>Image: <input type="text" name="img" placeholder="Image URL"  value="${recipe.img}"></label>
                    <label class="ml">Ingredients:
	                    <textarea name="ingredients" placeholder="Enter ingredients on separate lines" >${recipe.ingredients.join('\n')}</textarea>
                    </label>
					<label class="ml">Preparation: 
                        <textarea name="steps" placeholder="Enter preparation steps on separate lines">${recipe.steps.join('\n')}</textarea>
                    </label>
					<input type="submit" value="Update Recipe">
				</form>
			</article>
		</main>
	</section>
`;
