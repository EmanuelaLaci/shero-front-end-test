const productGrid = document.querySelector('.product-grid'); // Carousel container
const products = document.querySelectorAll('.product'); // Each product in the carousel

let currentIndex = 0; // Track the current index
let visibleProducts = getVisibleProducts(); // Number of products visible in the grid
const totalProducts = products.length; // Total number of products

// Function to determine visible products based on screen width
function getVisibleProducts() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        return 1; // Mobile: Show 1 product
    } else if (screenWidth < 1024) {
        return 2; // Tablet: Show 2 products
    } else {
        return 4; // Desktop: Show 4 products
    }
}

// Update carousel position
function updateCarousel() {
    const productWidth = products[0].offsetWidth + 20; // Width of each product including margin
    const maxIndex = totalProducts - visibleProducts; // Max index the carousel can slide to
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex); // Restrict index within bounds
    productGrid.style.transform = `translateX(-${currentIndex * productWidth}px)`; // Slide the carousel
}

// Update visible products and carousel on window resize
window.addEventListener('resize', () => {
    visibleProducts = getVisibleProducts();
    updateCarousel();
});

// Initialize the carousel
updateCarousel();
