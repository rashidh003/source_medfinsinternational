
console.log("Developed by");
console.log("https://www.linkedin.com/in/mohammed-rashidh-999879253/");
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}

document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector(".expertise-link").addEventListener("mouseenter", () => {
        const dropdown = document.querySelector(".dropdown");
        dropdown.style.visibility = "visible";
        setTimeout(() => {
            dropdown.style.opacity = "1";
        }, 10);
    });

    document.querySelector(".drop-menu").addEventListener("mouseleave", () => {
        const dropdown = document.querySelector(".dropdown");
        dropdown.style.opacity = "0";
        setTimeout(() => {
            dropdown.style.visibility = "hidden"; 
        }, 300);
    });
    const dropDown = document.querySelector(".drop-down"); 
    const expertise = document.querySelector(".expertise");
    expertise.addEventListener("click", () => {
        dropDown.classList.toggle("flex");
    });

    const burger = document.querySelector(".burger");
    const navPart = document.querySelector(".nav-part");
    const xButton = document.querySelector(".x-button")

    burger.addEventListener("click", ()=>{
        navPart.classList.toggle("slideIn");
    })

    xButton.addEventListener("click", ()=>{
        navPart.classList.toggle("slideIn");
    })
    

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function typeWriting() {
        const element = document.querySelector('.type');
        if (isInViewport(element) && window.screen.width >= 767) {
            element.classList.add('typewriter');
            window.removeEventListener('scroll', typeWriting);
        }
    }

    if (window.location.pathname === '/') {
        window.addEventListener('scroll', typeWriting);
    }

})

