import {main} from "./app.js";
import {loadHome} from './loadHome.js';

const loginSection = document.getElementById('login');
export function loadLoginEvents() {
    loginSection.querySelector('form').addEventListener('submit', login);
    main.replaceChildren(loginSection);
}

async function login(event){
  event.preventDefault();
    const url = 'http://localhost:3030/users/login';

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries());

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email, password})
    };
    try {
        if (email === '' || password === ''){
            return alert('All fields are required!')
        }
        const response = await fetch(url, options);
        if (response.ok === false){
            throw await response.json()
        }
        const data = await response.json();

        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);


        event.target.reset();
        loadHome()
    }catch (e){
        alert(e.message)
    }

}
export function logOut() {
    sessionStorage.clear();
    loadHome();
}


