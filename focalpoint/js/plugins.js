/*========== ORIPLEX PRE-LOADER ==========*/
window.addEventListener('load',function(){
  this.document.querySelector('.pre-loader').classList.add('loaded')
  setTimeout(function(){
    document.querySelector('.loaded').style.display = "none"
    document.querySelector('.loaded').style.visibility = "hidden"
    AOS.init(); // initialize animations
  },600);
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

function menuToggle() {
  document.querySelector('.mobile-ul').classList.toggle("js-navbar-toggled");
  document.querySelector('.navbar-toggle').classList.toggle("js-navbar-toggled");
}

/*========== MOBILE MENU ==========*/

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', checkScroll);
  function checkScroll() {
    if (window.scrollY >= window.innerHeight * 0.1) {
      document.querySelector('.navbar').classList.add("bg-xdark");
      document.querySelector('.navbar-toggle').classList.add("toggle-light");
      document.querySelector('.navbar').classList.add("bg-xdark");
      document.querySelector('.navbar-brand').classList.add("color-light");
      let aElement = document.querySelectorAll('.add');
      aElement.forEach((el) => {
        el.classList.add('li-light');
      });
      let svgElement = document.querySelectorAll('.add2');
      svgElement.forEach((el) => {
        el.classList.add('svg-light');
      });
    } else {
      document.querySelector('.navbar').classList.remove("bg-xdark");
      document.querySelector('.navbar-toggle').classList.remove("toggle-light");
      document.querySelector('.navbar-brand').classList.remove("color-light");
      let aElement = document.querySelectorAll('.add');
      aElement.forEach((el) => {
        el.classList.remove('li-light');
      });
      let svgElement = document.querySelectorAll('.add2');
      svgElement.forEach((el) => {
        el.classList.remove('svg-light');
      });
    };
  };
  });

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', checkScroll);
  function checkScroll() {
    if (window.scrollY >= window.innerHeight * 0.6) {
      document.querySelector('body').classList.add("bg-dark");
      document.querySelector('.about-title').classList.add("color-light");
      document.querySelector('.products-heading h2').classList.add("color-light");
    } else {
      document.querySelector('body').classList.remove("bg-dark");
      document.querySelector('.about-title').classList.remove("color-light");
      document.querySelector('.products-heading h2').classList.remove("color-light");
    };
  };
  });

/*========== TOP SCROLL BUTTON ==========*/


/*========== CURRENT YEAR FOR THE COPYRIGHT ==========*/
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;