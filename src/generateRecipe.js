import { getRecipes} from "./data/data.js";
import {showCatalog} from "./templates/catalogTemplate.js";
import {context} from "./app.js";

let recipes = await getRecipes()

export async function loadRecipes() {
   context.render(showCatalog(recipes));
}

export async function  updateRecipes(){
   recipes = await getRecipes()
}
