import {main} from "./app.js";
import {addSubmitListener} from "./util/formUtil.js";
import {register} from "./data/auth.js";

const registerSection = document.getElementById('register');
const registerForm = registerSection.querySelector('form');

addSubmitListener(registerForm, onRegister);
let context = null;

export function showRegister(newContext) {
    main.replaceChildren(registerSection);
    context = newContext;
}

async function onRegister({email, password, rePass}){
    await register(email, password, rePass);
    registerForm.reset();
    context.showView('Catalog');
}
