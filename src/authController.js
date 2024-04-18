import {main} from "./app.js";
import {loadHome} from './homeController.js';

const loginSection = document.getElementById('authController');
const registerSection = document.getElementById('register');

registerSection.querySelector('form').addEventListener('submit', register);

export function loadLoginEvents() {
    loginSection.querySelector('form').addEventListener('submit', authController);
    main.replaceChildren(loginSection);
}

async function authController(event){
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

export function loadRegister() {
    main.replaceChildren(registerSection);
}
async function register(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password, rePass} = Object.fromEntries(formData.entries());
    const url = 'http://localhost:3030/users/register'
    const options = {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email, password, rePass})
    };
    try{
        if (email === '' || password === '' || rePass === ''){
            throw Error('All fields are required!');
        }else if (password !== rePass){
            throw Error('Password and repeat must match!')
        }
        const response = await fetch(url, options);
        if (response.ok === false){
            throw await response.json();
        }
        const data = await response.json();
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('userId', data._id)
        await loadHome();
    }catch (e){
        alert(e.message)
    }
}
export function logOut() {
    sessionStorage.clear();
    loadHome();
}


