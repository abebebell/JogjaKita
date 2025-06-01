let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('navright').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
    }
});

document.getElementById('navleft').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

function updateSlider() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.getElementById('navleft').disabled = currentSlide === 0;
    document.getElementById('navright').disabled = currentSlide === totalSlides - 1;
}

const guestbookBtn = document.getElementById('guestbookBtn');
const guestbookModal = document.getElementById('guestbookModal');
const closeGuestbook = document.getElementById('closeGuestbook');

guestbookBtn.addEventListener('click', () => {
    guestbookModal.style.display = 'block';
});

closeGuestbook.addEventListener('click', () => {
    guestbookModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === guestbookModal) {
        guestbookModal.style.display = 'none';
    }
});

document.getElementById('guestbookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Terima kasih atas saran Anda!');
    this.reset();
    guestbookModal.style.display = 'none';
});

document.getElementById("exploreBtn").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  intro.style.opacity = 1;

  let fadeOut = setInterval(() => {
    if (!intro.style.opacity) {
      intro.style.opacity = 1;
    }
    if (intro.style.opacity > 0) {
      intro.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOut);
      intro.style.display = "none";
    }
  }, 50);
});

// Toggle responsive nav
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
