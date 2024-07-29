//  for slideshowslideshow

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
    let slides = document.getElementsByClassName("fact-slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
const messages = [
    "Let's celebrate World Water Conservation Day on 22nd March",
    "Save water, secure the future.",
    "Every drop counts!",
    "Water is life, let's protect it.",
    "Conserve water, conserve life.",
    "Be the change you want to see in the water world."
];

let current = 0;

function updateTicker() {
    const tickerMessage = document.getElementById('ticker-message');
    tickerMessage.classList.add('hidden'); // Hide the current message

    setTimeout(() => {
        tickerMessage.textContent = messages[current]; // Update the message
        tickerMessage.classList.remove('hidden'); // Show the new message
        current = (current + 1) % messages.length; // Update the index
    }, 500); // Timeout to ensure smooth transition
}

// Update the ticker every 5 seconds
setInterval(updateTicker, 5000);

let currentIndex = 0;

function showNextSlide() {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds
