function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 
 /* document.addEventListener('DOMContentLoaded', function(){
    var options = {
        strings: ["Full Stack Developer", "Cyber Security Ethusiast"],
        typeSpeed: 100, // Typing speed in milliseconds
        backSpeed: 100, // Backspacing speed in milliseconds
        loop: true // Whether to loop the animation
    };

    var typed = new Typed('.section__text__p2', options);
});
