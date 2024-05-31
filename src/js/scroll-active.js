// Scrolled Nav Style
// handlers
const scrolled = () => {
    const header = document.querySelector("header");
    
    if (window.scrollY > 0)
        header.classList.add("scroll-active")
    else
        header.classList.remove("scroll-active")
};

// event
window.addEventListener("scroll", scrolled);