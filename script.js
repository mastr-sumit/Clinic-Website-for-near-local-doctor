// =====================
// APPOINTMENT FORM
// =====================
document.getElementById('submitBtn').addEventListener('click', function () {
  const name = document.querySelector('input[placeholder="Your full name"]').value.trim();
  const phone = document.querySelector('input[placeholder="Your mobile number"]').value.trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number to book an appointment.');
    return;
  }

  this.textContent = '✅ Appointment Requested!';
  this.style.background = '#16a34a';
  this.disabled = true;

  setTimeout(() => {
    alert(`Thank you, ${name}! We will call you at ${phone} shortly to confirm your appointment.\n\nFor urgent queries, please call: 08401364261`);
  }, 300);
});

// =====================
// SMOOTH NAV HIGHLIGHT
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#c9a84c';
    }
  });
});

// =====================
// SCROLL REVEAL ANIMATION
// =====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .review-card, .highlight-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
