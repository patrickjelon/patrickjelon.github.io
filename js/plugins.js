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

/*========== Splide Carousel ==========*/
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#testimonial-slider', {
    height: '18rem',
    width: '50%',
    breakpoints: {
      996: {
        height: '20rem',
        width: '70%'
      },
      780: {
        height: '25rem',
        width: '85%'
      },
      550: {
        height: '30rem',
        width: '95%'
      },
      425: {
        height: '35rem',
        width: '95%'
      },
      310: {
        height: '38rem',
        width: '95%'
      }
    },
    type: 'loop',
    arrowPath: 'M36.4717 20L23.9267 30.3917L25 31.6667L40 19.1317L25 6.66667L23.925 7.94L36.4733 18.3333H0V20H36.4717Z',
    autoplay: 'true',
    interval: 4500,
    speed : 1000,
    easing : 'cubic-bezier(.4,0,0,1)'
  }).mount();
  });

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

/*========== MOBILE MENU ==========*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuToggle() {
  document.querySelector('#navbar-offcanvas').classList.toggle("js-navbar-toggled");
  document.querySelector('.navbar-toggle').classList.toggle("js-navbar-toggled");
}

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', checkScroll);
  function checkScroll() {
    if (window.scrollY >= 50) {
      document.querySelector('.navbar').classList.add('scrolled');
      document.querySelector('.navbar-toggle').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
      document.querySelector('.navbar-toggle').classList.remove('scrolled');
    };
  };
});

/*========== Navbar Up On Scroll ==========*/
// Hide Nav on on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').classList.remove('nav-up');
    document.querySelector('.navbar-toggle').classList.remove('nav-up');
  } else {
    document.querySelector('nav').classList.add('nav-up');
    document.querySelector('.navbar-toggle').classList.add('nav-up');
  }
  prevScrollpos = currentScrollPos;
}


/*========== Square Booking Modal ==========*/
const triggers = document.querySelectorAll("[data-modaltrigger]");
const dialogs = document.querySelectorAll("dialog");

triggers.forEach(function (el) {
  el.addEventListener("click", () => {
    const getTarget = el.getAttribute("data-target");
    const target = document.querySelector(`[data-name="${getTarget}"]`);
    if (target.hasAttribute("open")) {
      target.close();
      // Return to scrolling if user closes modal with button
      // window.onscroll = function(){}; 
    } else {
      target.showModal();
      // Bar user from scrolling while modal is open
      // scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
      // scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
      // window.onscroll = function() { 
      //   window.scrollTo(scrollLeft, scrollTop); 
      // }; 
    };
  });
});

/* Check for click in backdrop */
dialogs.forEach(function (el) {
  el.addEventListener("click", ({target:dialog}) => {
    if (dialog.nodeName === 'DIALOG') {
      dialog.close('dismiss')
      // window.onscroll = function(){}; 
    }
  });
});