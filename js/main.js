const header = document.querySelector('#header');
let navTop = header.clientHeight;

function fixedNav() {
  if (window.scrollY >= navTop / 2) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixedNav);
