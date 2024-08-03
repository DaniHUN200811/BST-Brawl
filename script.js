document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        fetch('/submit-form', {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
        .then(response => response.text())
        .then(data => {
            responseMessage.textContent = data;
            form.reset();
        })
        .catch(error => {
            console.error('Hiba:', error);
            responseMessage.textContent = 'Hiba történt az üzenet elküldése közben.';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.querySelector('.back-button');
    backButton.addEventListener('mouseover', function() {
        backButton.style.color = '#0056b3'; // Sötétebb kék szín
    });
    backButton.addEventListener('mouseout', function() {
        backButton.style.color = '#007bff'; // Eredeti kék szín
    });
});

let currentIndex = 0;

const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

function changeImage(step) {
    currentIndex = (currentIndex + step + totalImages) % totalImages;
    showImage(currentIndex);
}

// Inicializálás: mutassuk meg az első képet
// Function to show the slide of a specific carousel
function showSlide(carouselId, index) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    if (slides.length === 0) return; // Ellenőrizzük, hogy vannak-e slide-ok

    let currentSlide = parseInt(document.querySelector(`#${carouselId}`).dataset.currentSlide) || 0;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector(`#${carouselId} .carousel-slides`).style.transform = `translateX(${offset}%)`;
    
    // Store the current slide index
    document.querySelector(`#${carouselId}`).dataset.currentSlide = currentSlide;
}

// Function to move to the next slide
function nextSlide(carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    let currentSlide = parseInt(document.querySelector(`#${carouselId}`).dataset.currentSlide) || 0;
    showSlide(carouselId, currentSlide + 1);
}

// Function to move to the previous slide
function prevSlide(carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    let currentSlide = parseInt(document.querySelector(`#${carouselId}`).dataset.currentSlide) || 0;
    showSlide(carouselId, currentSlide - 1);
}

// Initial setup for all carousels







