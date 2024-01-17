document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const mobileNav = document.querySelector('nav');
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const body = document.body;
  const iconMode = document.querySelector('#modeIcon');

  burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
  });

  // Close the mobile menu when a link is clicked
  mobileNav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      mobileNav.classList.remove('active');
    }
  });
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      iconMode.classList.add('at-sunny-bold');
      iconMode.classList.remove('at-moon-bold');
    } else {
      iconMode.classList.remove('at-sunny-bold');
      iconMode.classList.add('at-moon-bold');
    }
    
  });
});