// TEMPLATE LITERALS

// object and list object
import vagas from './vagas-dados.js';

// functions
const template_vagaCargosAbertos = (array) => {
    let string = '';

    for (const obj of array) {
        string += `
            <div class="vagas__cargos__abertos__item">
                <span>${obj.title}</span>

                <div class="informacoes">
                    <span>${obj.period}</span>
                    <span>${obj.remuneration}</span>
                </div>
            </div>`;
    }

    return string;
};

const template = (key, value) => {
    return `
    <article class="vagas__cargos">
        <h3>${key}</h3>

        <div id="vagas__cargos__abertos">
           ${template_vagaCargosAbertos(value)}
        </div>

    </article>
    `;
};

// selector
const html_vagas = document.querySelector('#vagas');

// inner content
Object.keys(vagas).forEach(key => html_vagas.innerHTML += template(key, vagas[key]));