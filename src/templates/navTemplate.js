import {html} from '../../node_modules/lit-html/lit-html.js'
import {context} from "../app.js";


export const navTemplate = (sessionStorage) => html`
	<h1>My Cookbook</h1>
		<nav @click="${(event) => controlNavMenu(event)}">
			<a>Catalog</a>
			<div>
                ${sessionStorage.getItem('accessToken') === null ? html`
	                <a href="#">Login</a>
                    <a href="#">Register</a>
                `: html`
	                <a href="#">Create Recipe</a>
	                <a id="logoutBtn" href="#">Logout</a>
                `}
			</div>
		</nav>`;

function controlNavMenu(event) {
    if (event.target.tagName === 'A') {
        const buttonContent = event.target.textContent;
        context.showView(buttonContent);
    }
}

