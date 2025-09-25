// Smooth fade-in for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section, .project-box, .box');
    const options = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
