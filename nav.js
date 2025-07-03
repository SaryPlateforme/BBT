const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
const icon = document.querySelector("#icon");

hamburger.addEventListener('click', function() {
  nav.classList.toggle('d-none');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // Anciennement fa-times
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});
