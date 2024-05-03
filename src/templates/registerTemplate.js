import {html} from '../../node_modules/lit-html/lit-html.js'
import {onSubmit} from "../util/utilForm.js";
import {onRegister} from "../register.js";

export const registerTemplate = html`
	<main>
		<article>
			<h2>Register</h2>
			<form @submit="${(event) => onSubmit(event, onRegister)}">
				<label>E-mail: <input type="text" name="email"></label>
				<label>Password: <input type="password" name="password"></label>
				<label>Repeat: <input type="password" name="rePass"></label>
				<input type="submit" value="Register">
			</form>
		</article>
	</main>
`
