// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
}

// Fade-in animation on scroll
const elements = document.querySelectorAll('.fade-in');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
  if (backToTop && window.scrollY > 300) {
    backToTop.classList.add('show');
  } else if (backToTop) {
    backToTop.classList.remove('show');
  }
}

// Scroll event
window.addEventListener('scroll', function () {
  checkScroll();
  toggleBackToTop();
});

// Run on page load
checkScroll();
toggleBackToTop();