// Function to update gallery position based on current image index
function updateGallery() {
    const windowWidth = window.innerWidth;
    let totalImageWidth = 0;

    images.forEach((image, index) => {
        if (index < currentImageIndex) {
            totalImageWidth += image.offsetWidth + (0.02 * windowWidth); // 2vw as margin between images
        }
    });

    const leftMargin = (windowWidth - images[currentImageIndex].offsetWidth) / 2 - totalImageWidth;
    document.querySelector('.images').style.transform = `translateX(${leftMargin}px)`;
}

// Function to show the next image
function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateGallery();
    }
}

// Function to show the previous image
function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateGallery();
    }
}

// Get all images and arrow buttons
const images = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Variable to keep track of the current image index
let currentImageIndex = 0;

// Add event listeners to arrow buttons
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Update gallery position when window is resized
window.addEventListener('resize', updateGallery);

// Initial call to update gallery position
updateGallery();
