// Typing Effect
var typed = new Typed('#typed', {
  strings: ["Hi, I'm Brandon"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 500,
  loop: true
});

const slides = document.querySelectorAll('.home-project-slide');
let currentSlide = 0;

// Function to change slides automatically
function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Remove 'active' from current slide
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide, or loop back to the first
    slides[currentSlide].classList.add('active'); // Add 'active' to the new slide
}

// Initialize the first slide
slides[currentSlide].classList.add('active');

// Set interval to cycle through slides every 5 seconds
setInterval(showNextSlide, 5000); // 5000 ms = 5 seconds