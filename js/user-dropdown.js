import {isLoggedIn} from './auth.js'

const userBtn = document.getElementById('user-btn');
const userDropdown = document.getElementById('user-dropdown');
const userLinks = userDropdown.querySelectorAll('a');

userBtn.addEventListener('click', () => {
  userDropdown.style.display = (userDropdown.style.display === 'flex') ? 'none' : 'flex';
});

window.addEventListener('click', (event) => {
  if (!userDropdown.contains(event.target) && !userBtn.contains(event.target)) {
    userDropdown.style.display = 'none';
  }
});

userLinks.forEach((link) => {
  if (isLoggedIn()) {
    link.href = '#';
  } else {
    link.href = 'login.html';
  }
});
