// Simple interaction: fake form submission
const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thanks! Your message was received (demo).';
  status.style.color = '#e6fb08ff';
  form.reset();
});