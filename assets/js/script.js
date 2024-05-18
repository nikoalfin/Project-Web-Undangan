// const cardForm = document.getElementById("card-comment");

function openCard() {
  document.getElementById("card-invitation").classList.toggle("hidden");
  document.getElementById("navbar-invitation").classList.toggle("opacity-100");
  document.getElementById("btn-open").classList.toggle("opacity-0");
  document.getElementById("1").style.transform = "translate-y(-100px)";
  //   transform: translate(70px);
}

let slideIndex = 1;

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function toggleFullScreen() {
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  let cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

// music
let audio = document.getElementById("myAudio");
audio.play();

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
