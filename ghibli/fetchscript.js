// https://ghibliapi.herokuapp.com/
// https://ghibliapi.herokuapp.com/films  - array of object in JSON

const app = document.querySelector('#root');
const container = document.createElement('div');
const PATH = "https://ghibliapi.herokuapp.com/films";

container.setAttribute('class', 'container');

app.appendChild(container);



fetch(PATH)
    .then((response) => {
    return  response.json();
    })
    .then((data) => {
        //work with JSON data here
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
    })
    .catch((err) => {
        //do something foe an error here
        const errorMessage = docuemnt.createElement('div');
        errorMessage.textContent = 'Is not working!';
        app.appendChild(errorMessage);
    });
