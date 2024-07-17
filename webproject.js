// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
window.addEventListener('scroll', function() {
  var welcomeSection = document.getElementById('welcome');
  var navigation = document.getElementById('navbar');
  
  // Check if the welcome section is in view
  var isInView = window.scrollY >= welcomeSection.offsetTop;
  
  // Add or remove the sticky class based on if the welcome section is in view
  if (isInView) {
    navigation.classList.add('nav-sticky');
  } else {
    navigation.classList.remove('nav-sticky');
  }
});

document.querySelectorAll('#ContactUs a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

  /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc.
  $('.smoothScroll').click(function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();
      
      // Check if the location and hostname match
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          // Get the target element
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          
          // Animate scroll if the target exists
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 800); // Adjust the scroll speed here (e.g., 800 milliseconds)
          }
      }
  });
});
