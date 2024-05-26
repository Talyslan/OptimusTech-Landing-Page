// CREATE ELEMENT: outra opção de fazer a mesma coisa
import vagas from './vagas-dados.js';

// function
// CT = Create Element
const CT_vagaInformacao = ({ period, remuneration }) => {
    // creating tags HTML
    const div = document.createElement('div');
    const span_period = document.createElement('span');
    const span_remuneration = document.createElement('span');
    
    //Adding content
    span_period.textContent = period;
    span_remuneration.textContent = remuneration;
    div.appendChild(span_period);
    div.appendChild(span_remuneration);

    return div;
};

const CT_vagaItem = (obj) => {
    // creating tags HTML
    const span_title = document.createElement('span');
    const div = document.createElement('div');

    //Adding content
    span_title.textContent = obj.title;
    div.appendChild(span_title)
    div.appendChild(CT_vagaInformacao(obj))

    return div;
};

const CT_vagaCargosAbertos = (array) => {
    // creating tags HTML
    const div = document.createElement('div')

    //Adding content
    for (const obj of array) {
        div.appendChild(CT_vagaItem(obj))
    }

    return div;
}

const CT_vagasCargos = (key, value) => {
    // creating tags HTML
    const article = document.createElement('article');
    const h3 = document.createElement('h3')
    const div = document.createElement('div')

    //Adding content
    h3.textContent = key;
    div.appendChild(CT_vagaCargosAbertos(value))
    article.appendChild(h3)
    article.appendChild(div)

    return article;
};

// selector
const html_vagas = document.querySelector('#vagas');

// inner content
Object.keys(vagas).forEach(key => html_vagas.appendChild(CT_vagasCargos(key, vagas[key])));