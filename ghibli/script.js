// https://ghibliapi.herokuapp.com/
// https://ghibliapi.herokuapp.com/films  - array of object in JSON


const app = document.querySelector('#root');
const container = document.createElement('div');
const PATH = "https://ghibliapi.herokuapp.com/films";

container.setAttribute('class', 'container');

app.appendChild(container);

/*  XMLHttpRequest */

//Create a request varaible and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint

request.open( 'GET', PATH, true );

request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status <  400) {
        data.forEach(movie => {

            const cart = document.createElement('div');
            cart.setAttribute('class', 'cart');

            const title = document.createElement('h1');
            title.setAttribute('class', 'title');
            title.textContent = movie.title;

            const desc = document.createElement('p');
            desc.setAttribute('class', 'desc');
            movie.description = movie.description.substring(0, 300) //limit ot 300 characters

            desc.textContent = `${movie.description}...`;

            container.appendChild(cart);

            cart.appendChild(title);
            cart.appendChild(desc);

        })
    } else {
        const errorMessage = docuemnt.createElement('div');
        errorMessage.textContent = 'Is not working!';
        app.appendChild(errorMessage);
    }

    
}

// Send request

request.send();