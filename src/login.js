import {context, main} from "./app.js";
import {login, logOut} from "./data/auth.js";
import { navTemplate} from "./templates/navTemplate.js";



export async function onLogin({email, password}){
    await login(email, password);

    context.showView('Catalog')
}

export async function onLogOut(){
    await logOut()

    context.renderNav();
      context.showView('Catalog');
}
