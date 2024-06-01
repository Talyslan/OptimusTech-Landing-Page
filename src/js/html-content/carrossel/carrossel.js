// list object 
import carrossel from "./carrossel-dados.js";

// selectors
const carrossel_html = document.querySelector('#carrossel');

// function
const createCarrosselElement = ({ name, position, avatar, message }) => {
    return `
        <div class="item">
            <p>${message}</p>
            <div class="user">
                <img src="./public/people/${avatar}" alt="">
                <span>${name}</span>
                <span>${position}</span>
            </div>
        </div>
    `;
};

// inner content
carrossel.forEach(obj => carrossel_html.innerHTML += createCarrosselElement(obj));