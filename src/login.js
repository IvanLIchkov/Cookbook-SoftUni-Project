import {context, main} from "./app.js";
import {login, logOut} from "./data/auth.js";
import {addSubmitListener} from "./util/formUtil.js";

const loginSection = document.getElementById('authController');

const loginForm = loginSection.querySelector('form');
addSubmitListener(loginForm, onLogin);


export function showLogin() {
    main.replaceChildren(loginSection);
}
async function onLogin({email, password}){
    await login(email, password);
    loginForm.reset();
    context.showView('Catalog')
}

export function onLogOut(){
    logOut()
    context.showView('Catalog');
}
