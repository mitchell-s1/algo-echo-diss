// mobile nav toggle
const toggle = document.getElementById('mobile-toggle');
const nav = document.querySelector('nav ul');
toggle.addEventListener('click', () => nav.classList.toggle('show'));