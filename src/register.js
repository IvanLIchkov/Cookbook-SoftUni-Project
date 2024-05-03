import {context, main} from "./app.js";
// import {addSubmitListener} from "./util/utilForm.js";
import {register} from "./data/auth.js";
import {render} from '../node_modules/lit-html/lit-html.js'
import {registerTemplate} from "./templates/registerTemplate.js";
import { navTemplate} from "./templates/navTemplate.js";


// const registerSection = document.getElementById('register');
// const registerForm = registerSection.querySelector('form');
//
// addSubmitListener(registerForm, onRegister);

export function showRegister() {
    context.render(registerTemplate)
}

export async function onRegister({email, password, rePass}){
    await register(email, password, rePass);
    // registerForm.reset();
    context.showView('Catalog');
    context.renderNav()
}
