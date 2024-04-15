
window.addEventListener('load', addEvents);

function addEvents(){
    document.querySelector('form').addEventListener('submit', login);
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

        event.target.reset;
        window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
    }catch (e){
        alert(e.message)
    }

}
function logOut() {
    sessionStorage.clear();
    window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
}


