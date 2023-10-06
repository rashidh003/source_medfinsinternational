
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "enquiry@medfinsinternational.com",
        Password : "25DF615BEFD05E5AFF9E2E3448A1210C54B6",
        To : 'info@medfinsinternational.com',
        From : document.getElementById('email').value,
        Subject : "new contact form enquiry",
        Body : "Message: "+document.getElementById("message").value
    }).then(
        console.log("sent")
    );
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

    if (window.location.pathname === '/index.html') {
        window.addEventListener('scroll', typeWriting);
    }

})

