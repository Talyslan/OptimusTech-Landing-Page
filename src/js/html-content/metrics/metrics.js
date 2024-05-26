// TEMPLATE LITERALS

// object list
import metrics from './metrics-dados.js';

// function
const metricCreateElement = ({number_data, text_title, text_support}) => {
    return `
    <div>
        <h3>${number_data}</h3>
        <span>${text_title}</span>
        <p>${text_support}</p>
    </div>
    `;
};

// selector
const html_metrics = document.querySelector('#metrics'); 

// inner content
metrics.map(obj => html_metrics.innerHTML += metricCreateElement(obj));