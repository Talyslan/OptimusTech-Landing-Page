// selectors
const linksList = document.querySelectorAll('.link');

// handlers
const alert = () => {
    window.alert('Página em andamento!');
}

// events
linksList.forEach(linkHTML => linkHTML.addEventListener('click', alert));