// Simple contact form submission handling (front-end only)
// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Thank you for your message!';
  this.reset();
});

// Toggle hamburger menu
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
}

// Smooth scroll and close menu on link click
document.querySelectorAll('#nav-links li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth',
      });
    }
    // Close menu on mobile
    document.getElementById('nav-links').classList.remove('active');
  });
});

// Highlight active section
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('#nav-links li a');
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
