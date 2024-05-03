import {html} from '../../node_modules/lit-html/lit-html.js'
import {context} from "../app.js";
import {onSubmit} from "../util/utilForm.js";
import {onLogin} from "../login.js";

export const loginTemplate = html`
	<section id="authController">
		<main>
			<article>
				<h2>Login</h2>
				<form @submit=${(event) => onSubmit(event, onLogin)}>
					<label>E-mail: <input type="text" name="email"></label>
					<label>Password: <input type="password" name="password"></label>
					<input type="submit" value="Login">
				</form>
			</article>
		</main>
	</section>`;

export function showLogin(){
    context.render(loginTemplate)
}
