/*========== ORIPLEX PRE-LOADER ==========*/
window.addEventListener('load',function(){
  this.document.querySelector('.pre-loader').classList.add('loaded')
  setTimeout(function(){
    document.querySelector('.loaded').style.display = "none"
    document.querySelector('.loaded').style.visibility = "hidden"
    AOS.init(); // initialize animations
  },400);
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

/*========== Splide Carousel ==========*/
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.testimonial-carousel', {
    arrowPath: 'M9.17434 2.27793C9.07097 2.47405 9.10909 2.71483 9.26799 2.86943L26.5067 19.6416C26.7084 19.8379 26.7084 20.1621 26.5067 20.3584L9.26799 37.1306C9.10909 37.2852 9.07097 37.5259 9.17434 37.7221L10.0638 39.4095C10.2193 39.7046 10.6147 39.7676 10.8542 39.5354L30.6298 20.3589C30.8324 20.1625 30.8324 19.8375 30.6298 19.641L10.8542 0.464649C10.6147 0.232435 10.2193 0.295371 10.0638 0.590461L9.17434 2.27793Z',
    direction:'ltr',
    type: 'loop',
    easing: 'cubic-bezier(.32,.56,.68,.86)',
    height: '16rem',
    width: '100%',
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
      99999: {
        height: '16rem'
      },
      850: {
        height: '21rem'
      },
      690: {
        height: '25rem'
      },
      500: {
        height: '32rem'
      },
      400: {
        height: '40rem'
      },
      350: {
        height: '45rem'
      },
      318: {
        height: '52rem'
      },
      282: {
        height: '60rem'
      }
    },
    interval: 8000,
    speed: 400
  }).mount();
} );

/*========== TOP SCROLL BUTTON ==========*/
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', checkScroll);
  function checkScroll() {
    if (window.scrollY >= window.innerHeight * 0.5) {
      document.querySelector('.scroll-top').classList.add('srolled-50vh');
    } else {
      document.querySelector('.scroll-top').classList.remove('srolled-50vh');
    };
  };
});

/*========== CURRENT YEAR FOR THE COPYRIGHT ==========*/
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;