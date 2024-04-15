window.addEventListener('load', addEvents);

function addEvents(){
    document.querySelector('form').addEventListener('submit', register);
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
        window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
    }catch (e){
        alert(e.message)
    }
}
