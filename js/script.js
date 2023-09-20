async function getUsers(){

    // const url = 'http://localhost:3000/users?name=Clara';

    const url = 'https://webb23nodejstest-52630b9d106d.herokuapp.com/users'
    const response = await fetch(url);
    const users = await response.json();

    console.log(users);
}

// getUsers();

const form = document.querySelector('form');
form.addEventListener('submit', event=>{
    event.preventDefault();


    const newUser = {
        name: document.querySelector('input').value,
        admin: document.querySelector('select').value
    };

    // console.log(newUser);    
    postUser(newUser);
})

async function postUser(user){
    const url = 'https://webb23nodejstest-52630b9d106d.herokuapp.com/users';

    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    }

    const response = await fetch(url, options);
    const message = await response.json();

    console.log(message)
}