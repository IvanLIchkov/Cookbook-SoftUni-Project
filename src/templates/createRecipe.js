import {html} from '../../node_modules/lit-html/lit-html.js'
import {onSubmit} from "../util/utilForm.js";
import {onCreateRecipe} from "../createRecipe.js";

export const createRecipeTemplate = html`
	<section id="createRecipe">
		<main>
			<article>
				<h2>New Recipe</h2>
				<form @submit="${(event) => onSubmit(event, onCreateRecipe)}">
					<label>Name: 
                        <input type="text" name="name" placeholder="Recipe name">
                    </label>
					<label>Image: 
                        <input type="text" name="img" placeholder="Image URL">
                    </label>
					<label class="ml">Ingredients: 
                        <textarea name="ingredients" placeholder="Enter ingredients on separate lines"></textarea>
                    </label>
					<label class="ml">Preparation: 
                        <textarea name="steps" placeholder="Enter preparation steps on separate lines"></textarea>
                    </label>
					<input type="submit" value="Create Recipe">
				</form>
			</article>
		</main>
	</section>
`;
