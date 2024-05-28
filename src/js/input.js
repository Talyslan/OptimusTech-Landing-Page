// selectors
const input = document.querySelector('#email__input');
const span = input.parentNode.children[0];
input.value = ''

// handlers
const focusIn = ({ target }) => {
    span.classList.add('active');
};

const focusOut = ({ target }) => {    
    if(!target.value) {
        span.classList.remove('active');
    } 
};

// events
input.addEventListener('focus', focusIn);
input.addEventListener('focusout', focusOut);