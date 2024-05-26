// CREATE ELEMENT: outra opção de fazer a mesma coisa

// object list
import metrics from './metrics-dados.js';

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