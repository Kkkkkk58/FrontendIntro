let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const captions = document.getElementsByClassName("slide-caption")
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n <= 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; ++i) {
    captions[i].style.display = "none";
  }
  for (i = 0; i < dots.length; ++i) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  captions[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
