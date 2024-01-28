document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const mobileNav = document.querySelector('nav');
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const body = document.body;
  const moon = document.querySelector('.moon');
  const sunny = document.querySelector('.sunny');
  const header = document.querySelector('.header');

  burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    header.classList.toggle('active');
  });

  // Close the mobile menu when a link is clicked
  mobileNav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      mobileNav.classList.remove('active');
      header.classList.remove('active');
    }
  });
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      moon.classList.toggle('hidden');
      sunny.classList.toggle('hidden');
    } else {
      moon.classList.toggle('hidden');
      sunny.classList.toggle('hidden');
    }
    
  });
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    body.classList.toggle('dark-mode');
    moon.classList.toggle('hidden');
    sunny.classList.toggle('hidden');
  } else {
    body.classList.remove('dark-mode');
    moon.classList.toggle('hidden');
    sunny.classList.toggle('hidden');
  } 
});