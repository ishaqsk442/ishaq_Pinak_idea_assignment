// Add hover event to all elements with the 'card' class
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Reset rotation to 0 on mouse enter
        anime.set(card, { rotate: '0turn' });

        // Apply the rotation animation
        anime({
            targets: card,
            rotate: '1turn',  // This rotates the card 360 degrees
            duration: 1000,   // Duration of animation (1 second)
            easing: 'easeInOutQuad'  // Easing function
        });
    });
});