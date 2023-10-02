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
    if (isInViewport(element)) {
        element.classList.add('typewriter');
        window.removeEventListener('scroll', typeWriting);
    }
}

window.addEventListener('scroll', typeWriting);