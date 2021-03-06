'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const contact = document.getElementById('contact-link');
  const close = document.getElementById('contact-close');
  const modal = document.getElementById('contact-modal');
  // const background = document.getElementbyId('contact-background');

  contact.onclick = function(){
    modal.classList.add('is-active');
    // document.getElement('html').classlist.add('is-clipped');
  };

  close.onclick = function () {
    modal.classList.toggle('is-active');
  }

  // background.onclick = function () {
  //   modal.classList.toggle('is-active');
  // }

});
