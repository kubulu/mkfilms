// Add interactive 3D tilt effect to the logo
document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logo-container');
    const logo = document.getElementById('main-logo');

    if (logoContainer && logo) {
        logoContainer.addEventListener('mousemove', (e) => {
            const rect = logoContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg
            const rotateY = ((x - centerX) / centerX) * 15;  // Max 15 deg

            logo.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            logo.style.transition = 'none';
        });

        logoContainer.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
            logo.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        });
    }

    // Add gentle parallax effect to background glows
    const glows = document.querySelectorAll('.glow');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        glows.forEach((glow, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            // Apply slight transform based on mouse position
            glow.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});
