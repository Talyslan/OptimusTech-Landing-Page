// TEMPLATE LITERALS

// object and list object
import vagas from './vagas-dados.js';

// functions
const template_vagaCargosAbertos = (array) => {
    let string = '';

    for (const obj of array) {
        string += `
            <div class="cargos__abertos__item">
                <div>
                    <span>${obj.title}</span>

                    <div>
                        <span>Período: ${obj.period}</span>
                        <span>Faixa salarial: R$${obj.remuneration},00</span>
                    </div>
                </div>
            </div>`;
    }

    return string;
};

const template = (key, value) => {
    return `
    <article class="cargos">
        <h3>${key}</h3>

        <div class="cargos__abertos">
           ${template_vagaCargosAbertos(value)}
        </div>

    </article>
    `;
};

// selector
const html_vagas = document.querySelector('#vagas');

// inner content
Object.keys(vagas).forEach(key => html_vagas.innerHTML += template(key, vagas[key]));