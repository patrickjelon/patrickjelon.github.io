/*========== ORIPLEX PRE-LOADER ==========*/
window.addEventListener('load',function(){
  this.document.querySelector('.pre-loader').classList.add('loaded')
  document.querySelector('html').classList.add('html-loaded')
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

/*========== LANDING PAGE PHONE MOVE EFFECT ==========*/

document.addEventListener("mousemove", shake);
function shake(e){
  this.querySelectorAll('.img-shake').forEach(layer => {
    const speed = layer.getAttribute('data-shake-speed')

    const x = (window.innerWidth - e.pageX*speed)/70;
    const y = (window.innerHeight - e.pageY*speed)/70;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

/*========== GALLERY BUTTON ACTIVATION ==========*/

document.addEventListener("DOMContentLoaded", function() {
  let galleryBtns = document.querySelectorAll('.sort-btn');
  galleryBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
      galleryBtns.forEach(b => b.classList.remove('checked'));
      btn.classList.add('checked');
    });
  });
});

/*========== AOS FIX ANIMATION ACTIVATION CHANGING ON BROWSER RESIZE ==========*/

let aosFix = 0;
    window.addEventListener('scroll', function() {
    aosFix <= 10 ? aosFix++ : AOS.refresh();
    });


/*========== CURRENT YEAR FOR THE COPYRIGHT ==========*/
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;


/*========== FORM VALIDATION CONSTRAINTS ==========*/

var constraints = {
  name: {
    presence: true,
    length: {maximum: 120, tooLong: "is too long."}
  },
  email: {
    presence: true,
    email: true
  },
  tel: {
    presence: {message: "^Phone can't be blank."},
    length: {is: 16, wrongLength: "^Please enter a valid phone number."}
  },
  message: {
    presence: true
  }
}

 // Hook up the form so we can prevent it from being posted
 var form = document.querySelector("form.contact-form");
      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        handleFormSubmit(form);
      });

      // Hook up the inputs to validate on the fly
      var inputs = document.querySelectorAll("input, textarea") // if things suddenly stop working remove textarea
      for (var i = 0; i < inputs.length; ++i) {
        inputs.item(i).addEventListener("change", function(ev) {
          var errors = validate(form, constraints) || {};
          showErrorsForInput(this, errors[this.name])
        });
      }

      //  handleFormSubmit was here

      // Updates the inputs with the validation errors
      function showErrors(form, errors) {
        // We loop through all the inputs and show the errors for that input
        _.each(form.querySelectorAll("input[name], textarea[name]"), function(input) {
          // Since the errors can be null if no errors were found we need to handle
          // that
          showErrorsForInput(input, errors && errors[input.name]);
        });
      }

      // Shows the errors for a specific input
      function showErrorsForInput(input, errors) {
        // This is the root of the input
        var formGroup = closestParent(input.parentNode, "form-input")
          // Find where the error messages will be insert into
          , messages = formGroup.querySelector(".error-message");
        // First we remove any old messages and resets the classes
        resetFormGroup(formGroup);
        // If we have errors
        if (errors) {
          // we first mark the group has having errors
          formGroup.classList.add("has-error");
          // then we append all the errors
          _.each(errors, function(error) {
            addError(messages, error);
          });
        } else {
          // otherwise we simply mark it as success
          formGroup.classList.add("has-success");
        }
      }

      // Recusively finds the closest parent that has the specified class
      function closestParent(child, className) {
        if (!child || child == document) {
          return null;
        }
        if (child.classList.contains(className)) {
          return child;
        } else {
          return closestParent(child.parentNode, className);
        }
      }

      function resetFormGroup(formGroup) {
        // Remove the success and error classes
        formGroup.classList.remove("has-error");
        formGroup.classList.remove("has-success");
        // and remove any old messages
        _.each(formGroup.querySelectorAll(".help-block.error"), function(el) {
          el.parentNode.removeChild(el);
        });
      }

      // Adds the specified error with the following markup
      // <p class="help-block error">[message]</p>
      function addError(messages, error) {
        var block = document.createElement("p");
        block.classList.add("help-block");
        block.classList.add("error");
        block.innerText = error;
        messages.appendChild(block);
      }

/*========== CONTACT FORM PHONE NUMBER INPUT MASKING ==========*/

const isNumericInput = (event) => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
      (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      (
          // Allow Ctrl/Command + A,C,V,X,Z
          (event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
      )
};

const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if(!isNumericInput(event) && !isModifierKey(event)){
      event.preventDefault();
  }
};

const formatToPhone = (event) => {
  if(isModifierKey(event)) {return;}

  const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
  const areaCode = input.substring(0,3);
  const middle = input.substring(3,6);
  const last = input.substring(6,10);

  if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
  else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
  else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const inputElement = document.getElementById('phoneNumber');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


/*========== ON 990PX REFRESH PAGE ==========*/
var ww = window.innerWidth, limit = 990;
var refresh = function() {
  ww = window.innerWidth;
  var w = ww < limit ? (location.reload(true)) :  ( ww > limit ? (location.reload(true)) : ww=limit );
}
var tOut;
window.onresize = function() {
  var resW = window.innerWidth;
  clearTimeout(tOut);
  if ( (ww > limit && resW < limit) || (ww < limit && resW > limit) ) {
    tOut = setTimeout(refresh, 100);
  }
};

/*========== HOMEPAGE SLIDERS ==========*/

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#testimonial-slider', {
    'height'  : '24rem',
    'type'    : 'loop',
    'pagination' : 'false',
    'rewind'  : 'true',
    'speed' : 1000,
    'easing' : 'cubic-bezier(.4,0,0,1)',
    'breakpoints' : {
      940: {
        'height' : '22rem',
      },
      765: {
        'height' : '25rem',
      },
      576: {
        'height' : '33rem',
      },
      371: {
        'height' : '37rem',
      },
      320: {
        'height' : '45rem',
      }
    },
    'arrowPath' : 'x'
  }).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#filler-carousel', {
    autoWidth : true,
    perPage  : 2,
    focus    : 1,
    trimSpace: false,
    pagination: false,
    arrows : false,
    gap : '11em',
    easing : 'cubic-bezier(.4,0,0,1)',
    drag : 'free',
    
    breakpoints : {
      1415: {
      focus : 0,
      },
      965 : {
        trimSpace : false,
        focus : 'center',
        perPage : 1,
        start : 1,
        flickMaxPages : 1,
        drag : true,
      }
    }
  }).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#filler-carousel-mobile', {
    autoWidth: true,
    trimSpace : false,
    focus : 'center',
    perPage : 1,
    flickMaxPages : 1,
    drag : true,
    pagination: false,
    arrows : false,
    gap : '14em',
    easing : 'cubic-bezier(.4,0,0,1)',

    breakpoints : {
      492: {
        gap: '11em'
      }
    }
  }).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.caption-splide', {
    pagination: false,
    arrows : false,
    'type' : 'loop',
    'width' : '450px',
    'drag' : true,
    'autoplay' : true,
    easing : 'cubic-bezier(.4,0,0,1)',
    speed : 1000,
    interval : 3500
  }).mount();
});

