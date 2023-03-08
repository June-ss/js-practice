// menu function
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-links");
})


// back to top function
const toTopButton = document.getElementById("to-top-btn");

// when the user scrolls down, show the button
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display=  "none";
    }
}

// when the user clicks on the button, scroll to the top
toTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})