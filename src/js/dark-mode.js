// constants
const darkMode_icon = 'moon.png';
const lightMode_icon = 'sun.png';
const darkMode_logo = 'logo-preta.svg';
const lightMode_logo = 'logo-branca.svg';

// selectors
const theme_icon = document.querySelector("img.theme-icon");
const body = document.querySelector("body");
const logo = document.querySelector('.logo');

// functions
const srcPath = (folder, theme) => `./public/${folder}/${theme}`;

const updateSrc = (element, folder, fileMoonTheme, fileSunTheme) => {
    const currentSrc = theme_icon.getAttribute('src');
    const isDarkTheme = currentSrc === srcPath('dark-mode', darkMode_icon)

    element.setAttribute('src',
        isDarkTheme? srcPath(folder, fileMoonTheme) : srcPath(folder, fileSunTheme)
    );
};

const changeIcon = () => updateSrc(theme_icon, 'dark-mode', lightMode_icon, darkMode_icon);

const changeLogo = () => updateSrc(logo, 'logos', darkMode_logo, lightMode_logo);

const changeLocalStorage = () => {
    const currentSrc = theme_icon.getAttribute('src');
    const isDarkTheme = currentSrc === srcPath('dark-mode', darkMode_icon)
    
    isDarkTheme? localStorage.setItem('dark-mode', true) : localStorage.removeItem('dark-mode')
}

// handlers
const changeTheme = () => {
    body.classList.toggle("dark-mode");

    changeLocalStorage();
    changeIcon();
    changeLogo();
};

// state
const currentTheme = localStorage.getItem('dark-mode');
currentTheme && changeTheme();

// events
theme_icon.addEventListener("click", changeTheme);