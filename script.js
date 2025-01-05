'use strict'

const menuButtons = document.querySelectorAll('.menu-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

menuButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
    // Remove 'active' class from all buttons, then add it to the clicked button
        menuButtons.forEach((button) => button.classList.remove('active'));
        btn.classList.add('active');

    // Get the category from the button's data attribute
        const category = btn.getAttribute('data-category');

    // Show/Hide portfolio cards based on the selected category
        portfolioCards.forEach((card) => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block'; // Show matching cards
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });
    });
});