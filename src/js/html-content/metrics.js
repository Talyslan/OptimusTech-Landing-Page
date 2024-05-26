// object list
const metrics = [
    {
        number_data: '400+',
        text_title: 'Projetos concluidos',
        text_support: 'Nós ajudamos a construir mais de 400 projetos incríveis.'
    },
    {
        number_data: '100+',
        text_title: 'Colaboradores',
        text_support: 'Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes.'
    },
    {
        number_data: '20k',
        text_title: 'Downloads',
        text_support: 'Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.'
    },
    {
        number_data: '500+',
        text_title: 'Reviews 5 estrelas',
        text_support: 'Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.'
    }
];

// function
const metricCreateElement = ({number_data, text_title, text_support}) => {
    // creating tags HTML
    const div = document.createElement('div');
    const elements = [
        {tagHTML: 'h3', content: number_data},
        {tagHTML: 'span', content: text_title},
        {tagHTML: 'p', content: text_support}
    ]
    
    // creating and adding elements in div
    elements.forEach( ({ tagHTML, content }) => {
        const element = document.createElement(tagHTML);
        element.textContent = content;
        div.appendChild(element)
    });

    return div;
};

// selector
const html_metrics = document.querySelector('#metrics'); 

// inner content
metrics.map(obj => html_metrics.appendChild(metricCreateElement(obj)));