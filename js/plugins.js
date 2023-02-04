/*========== ORIPLEX PRE-LOADER ==========*/
window.addEventListener('load',function(){
  this.document.querySelector('.pre-loader').classList.add('loaded')
  setTimeout(function(){
    document.querySelector('.loaded').style.display = "none"
    document.querySelector('.loaded').style.visibility = "hidden"
    AOS.init(); // initialize animations
  },800);
});

/*========== SMOOTH SCROLL LINKS ==========*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
      });
  });
});

/*========== GALLERY BUTTON ACTIVATION ==========*/

document.addEventListener("DOMContentLoaded", function() {
  let galleryBtns = document.querySelectorAll('.gallery-btn');
  galleryBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
      galleryBtns.forEach(b => b.classList.remove('checked'));
      btn.classList.add('checked');
    });
  });
});

/*========== DROPDOWN & MOBILE MENU ACTIVATION ==========*/

const dropdownActivate = document.querySelector('.nav-item.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
dropdownActivate.addEventListener('click', () => {
	dropdownMenu.classList.toggle('active');
	dropdownActivate.classList.toggle('active');
});

const mobileActivate = document.querySelector('.mobile-toggler');
const mobileMenu = document.querySelector('.mobile-menu');
mobileActivate.addEventListener('click', () => {
	mobileMenu.classList.toggle('active');
	mobileActivate.classList.toggle('active');
});

const mobileDropdownActivate = document.querySelector('.nav-item.dropdown-mobile');
const mobileDropdownMenu = document.querySelector('.dropdown-ul-mobile');
mobileDropdownActivate.addEventListener('click', () => {
	mobileDropdownMenu.classList.toggle('active');
	mobileDropdownActivate.classList.toggle('active');
});

/*========== SPLASH IMAGE PARALLAX EFFECT ==========*/

const simpleParallax = (elem, modifier) => {
  let parallax = document.getElementsByClassName(elem);
  for (let i = 0; i < parallax.length; i++) {
    parallax[i].setAttribute(
      "style",
      "background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-position: center center;"
    );
  };
  const sp = () => {
    for (let i = 0; i < parallax.length; i++) {
      let x = parallax[i].getBoundingClientRect().top / modifier;
      let y = Math.round(x * 100) / 100;
      parallax[i].style.backgroundPosition = "center " + y + "px";
    };
    requestAnimationFrame(sp);
  };
  requestAnimationFrame(sp);
};

simpleParallax("parallax", 7);


/*========== TESTIMONIALS CAROUSEL NUMBER ==========*/

const slide01 = document.querySelector('.slide-01');
const slide02 = document.querySelector('.slide-02');
const slide03 = document.querySelector('.slide-03');

const page = document.querySelector('.splide__pagination__number')

document.addEventListener( 'DOMContentLoaded', function() {
  setInterval(function() { 
    if(slide01.classList.contains('is-visible')) {
      page.classList.add('slide-01-active');
      page.classList.remove('slide-02-active');
      page.classList.remove('slide-03-active');
    } else if(slide02.classList.contains('is-visible')) {
      page.classList.add('slide-02-active');
      page.classList.remove('slide-01-active');
      page.classList.remove('slide-03-active');
    } else if(slide03.classList.contains('is-visible')) {
      page.classList.add('slide-03-active');
      page.classList.remove('slide-01-active');
      page.classList.remove('slide-02-active');
    }
  }, 300);
});

/*========== CURRENT YEAR FOR THE COPYRIGHT ==========*/

var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;