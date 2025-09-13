
let currentIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');


function openLightbox(element) {

    currentIndex = Array.from(galleryImages).indexOf(element);
    

    updateLightboxImage();
    lightboxOverlay.style.display = 'flex';
    

    document.addEventListener('keydown', handleKeyboardNavigation);
}

function closeLightbox() {
    lightboxOverlay.style.display = 'none';
    

    document.removeEventListener('keydown', handleKeyboardNavigation);
}


function updateLightboxImage() {
    const newImageSrc = galleryImages[currentIndex].getAttribute('data-full-src');
    lightboxImage.src = newImageSrc;
}


function changeImage(direction) {
    currentIndex += direction;

    
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0; 
    } else if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1; 
    }

    updateLightboxImage();
}


function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowRight') {
        changeImage(1); 
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1); 
    } else if (event.key === 'Escape') {
        closeLightbox(); 
    }
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️'; 
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙'; }
});


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
});