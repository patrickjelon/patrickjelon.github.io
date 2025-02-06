/*========== ORIPLEX PRE-LOADER ==========*/
window.addEventListener('load',function(){
  this.document.querySelector('.pre-loader').classList.add('loaded')
  setTimeout(function(){
    document.querySelector('.loaded').style.display = "none"
    document.querySelector('.loaded').style.visibility = "hidden"
    AOS.init(); // initialize animations
  },600);
});

/*========== NAVBAR DOWN ON SCROLL ==========*/

  setInterval(function() {
    if(window.scrollY > 200) {
      document.querySelector('.navbar').style.transform = 'translateY(0)';
    } else {
      document.querySelector('.navbar').style.transform='translateY(-595px)';
    };
  }, 100);

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

/*========== GSAP ANIMATION  ==========*/

// animate when in viewport function
var isInViewport = function (element) {
  var bounding = element.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// onload gsap animation
document.addEventListener("DOMContentLoaded", function() {
  gsap.from(".landing-caption h1", {duration: 0.95, delay: 0.2, ease: "power2.out", y: -145, opacity: "0"});
  gsap.from(".landing-caption h3", {duration: 0.95, delay: 0.2, ease: "power2.out", y: 145, opacity: "0"});
  gsap.from(".landing-caption hr", {duration: 0.75, delay: 0.2, ease: "power2.out", width: "0"});
  gsap.from(".landing-caption .btn-theme-landing", {duration: 0.95, delay: 0.75, stagger: 0.25, ease: "power2.out", y: 185, opacity: "0"});
});