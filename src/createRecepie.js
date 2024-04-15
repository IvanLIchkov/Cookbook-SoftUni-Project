window.addEventListener('load', loadEvents)

function loadEvents() {
    document.querySelector('form').addEventListener('submit', createNewRecipe)
}

async function createNewRecipe(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/data/recipes'

    const formData = new FormData(event.target);
    let {name, img, ingredients, steps} = Object.fromEntries(formData.entries());
    ingredients = ingredients.split('\n')
    steps = steps.split('\n')
    const options = {
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
           'X-Authorization': `${sessionStorage.accessToken}`
        },
        body: JSON.stringify({name, img, ingredients, steps})
    };
    try{
        if (name === '' || img === '' || ingredients === '' || steps === ''){
            throw Error('All fields are required');
        }
        const response = await fetch(url, options);
        if (response.ok === false){
            throw await response.json();
        }
        window.location.replace('http://localhost:63342/Cookbook-SoftUni-Project/index.html')
    }catch (e){
        alert(e.message)
    }
}
