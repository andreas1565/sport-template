document.addEventListener('DOMContentLoaded', function () {
  const navButton = document
    .querySelector('#burger')
    .addEventListener('click', toggleNavDisplay);

  function toggleNavDisplay(event) {
    // prevent hyperlink from running
    event.preventDefault();

    // get the resonsive-nav container
    var responsiveNav = document.querySelector('.responsivemenu');

    responsiveNav.classList.toggle('active');
    // toggle the showNav CSS on the responsive nav container
    // if the showNav class is there, it is removed; else it is added
    // with a single property: toggle
  }
});
