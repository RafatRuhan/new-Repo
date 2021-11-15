//*NAVIGATION BAR
// selector
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-link');
const navLinks = document.querySelectorAll('.nav-link li');

// function
const navSlide = () => {
    burger.addEventListener('click',
        () => {
            nav.classList.toggle('nav-active');
            // animate links
            navLinks.forEach((item, index) => {
                if (item.style.animation) {
                    item.style.animation = ''
                } else {
                    item.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 +.2}s`;
                }
                console.log(item, index);
            });
            burger.classList.toggle('toggle');
        });
}
navSlide();

// *HEADER PARALLAX
const parallax = document.querySelector('header');
window.addEventListener('scroll', () =>{
    let offset =window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .7 + "px";
});

//*EXPERIENCE SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    const slides = document.querySelectorAll('.mySlides');
    const title = document.querySelectorAll('.exp');
    console.log(slides);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < title.length; i++) {
        title[i].className = title[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = "block";
    title[slideIndex - 1].className += " active";
}



//*SERVICE MODAL
// selector
const modalTrigger = document.querySelectorAll('.modal-trigger');
const modalBg = document.querySelector('.modal-bg');
const closing = document.querySelector('.modal-closing');
// opening function
modalTrigger.forEach( (box) => {
   box.addEventListener('click', () => {
       modalBg.classList.add ('modal-bg-active');
   });
});
// closing-function
closing.addEventListener('click', () => {
    modalBg.classList.remove ('modal-bg-active');
});


// *PROJECT SPLIT SCREEN PARALLAX
function splitScroll() {
    const controller = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
      duration: "100%",
      triggerElement: ".project-title",
      triggerHook: 0
    })
  
      .setPin(".project-title")
      .addTo(controller);
  }
  
  splitScroll();

