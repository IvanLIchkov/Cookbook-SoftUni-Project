import {header, main} from "./app.js";

import {createRecipePreview} from "./generateRecipe.js";

const homeSection = document.getElementById('showMyRecipes');

export async function showHome() {
    homeSection.innerHTML = ''

    const cards = await createRecipePreview();
    cards.forEach(c => homeSection.appendChild(c));

    navBarAuth();

    main.replaceChildren(homeSection)
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
