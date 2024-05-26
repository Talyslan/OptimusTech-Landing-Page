// object and list object
const vagas = {
    'Design': [
        {
            title: 'Productor Designer',
            period: 'Full-time',
            remuneration: 7000
        },
        {
            title: 'UX Designer',
            period: 'Full-time',
            remuneration: 6000
        }
    ],
    'Desenvolvimento de Software': [
        {
            title: 'Desenvolvedor(a) iOS',
            period: 'Full-time',
            remuneration: 8000
        },
        {
            title: 'Desenvolvedor(a) Front-end',
            period: 'Full-time',
            remuneration: 7000
        },
        {
            title: 'Desenvolvedor(a) Back-end',
            period: 'Full-time',
            remuneration: 8000
        }
    ]
};

/*
<section id="vagas">

    <article class="vagas__cargos">
        <h3>Design</h3>

        <div id="vagas__cargos__abertos">
            <div class="vagas__cargos__abertos__item">
                <span>Product Designer</span>

                <div class="informacoes">
                    <span>Full time</span>
                    <span>Faixa salarial: R$1200,00</span>
                </div>
            </div>
        </div>

    </article>

</section>
*/

// function
const vagainformacoesCreateElement = (obj) => {
    const span_period = document.createElement('span');
    const span_remuneration = document.createElement('span');

    const obj = Object.keys(obj);

    obj.forEach(element => {
            
    });
}; 

const vagaCreateElement = (obj) => {
    // creating tags HTML
    const article = document.createElement('article');
    const elements = [
        {tagHTML: 'h3', content: number_data},
        {tagHTML: 'div', content: text_title}
    ]
    
    // creating and adding elements in div
    elements.forEach( ({ tagHTML, content }) => {
        const element = document.createElement(tagHTML);
        element.innerHTML = content;
        article.appendChild(element)
    });

    return article;
};

// selector
const html_vagaas = document.querySelector('#vagas'); 

// inner content
// metrics.map(obj => html_metrics.appendChild(metricCreateElement(obj)));