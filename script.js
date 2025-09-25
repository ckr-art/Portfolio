// Smooth scroll is already handled by CSS scroll-behavior
// Additional JS can be used for animation (fade-in effect)

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease';
        } else {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
        }
    });
});
