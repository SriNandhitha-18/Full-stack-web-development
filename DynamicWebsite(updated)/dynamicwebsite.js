
function showDropdown() {
    document.getElementById('dropdown').style.display = 'block';
}
function hideDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}

// Carousel scroll animation
let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-img');
function showCarouselImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = (i === index) ? '1' : '0';
    });
}
function nextCarouselImage() {
    carouselIndex = (carouselIndex + 1) % images.length;
    showCarouselImage(carouselIndex);
}
if (images.length > 0) {
    showCarouselImage(carouselIndex);
    setInterval(nextCarouselImage, 2500);
}

document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Added to cart!');
    });
});

document.getElementById("link").addEventListener("click", function() {
    alert("You are redirected to the page");
});

