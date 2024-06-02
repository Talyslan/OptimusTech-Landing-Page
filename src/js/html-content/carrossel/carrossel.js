// list object 
import carrossel from "./carrossel-dados.js";

// selectors
const carrossel_html = document.querySelector('#carrossel');

// function
const createCarrosselElement = ({ name, position, avatar, message, classe}) => {
    return `
        <div class="item ${classe}">
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

// rolagem automática
// selectors

const labelList = document.querySelectorAll('label');
let count = 1;
let time = 5000;
// function 
const rolagem = () => {
    count++
    if (count > labelList.length) count = 1

    document.querySelector(`#radio${count}`).checked = true;
}

// set interval
setInterval(rolagem, time);