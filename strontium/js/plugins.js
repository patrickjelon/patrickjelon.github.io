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

/*========== HAMBURGER MENU ACTIVATION ==========*/

const navIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.menu-wrap');
navIcon.addEventListener('click', () => {
	navIcon.classList.toggle('active');
	navMenu.classList.toggle('active');
});

/*========== CURRENT YEAR FOR THE COPYRIGHT ==========*/
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;