import {isLoggedIn} from './auth.js'

const starLinks = document.querySelectorAll('.star-rating a');

starLinks.forEach((link, index) => {
  if (isLoggedIn()) {
    link.href = '#';
  } else {
    link.href = 'login.html';
  }

  // TODO
  // Update star icon style on focus
  link.addEventListener('focus', () => {
    for (let i = 0; i <= index; i++) {
      starLinks[i].classList.add('lit');
    }
  });

  // Reset star icon style on blur
  link.addEventListener('blur', () => {
    starLinks.forEach(starLink => {
      starLink.classList.remove('lit');
    });
  });
});
