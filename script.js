document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // GSAP animations
    gsap.from(".navbar", {duration: 1, y: -50, opacity: 0, ease: "bounce"});
    gsap.from(".nav-link", {duration: 1, opacity: 0, stagger: 0.2, ease: "power2.inOut"});
    gsap.from(".brand-logo", {duration: 1, opacity: 0, x: -50, ease: "power2.inOut"});
    gsap.from(".hero-section h1", {duration: 1.5, opacity: 0, y: 50, ease: "power2.out"});
    gsap.from(".btn", {duration: 1, opacity: 0, scale: 0.5, ease: "back.out(1.7)", stagger: 0.2});

    // Sci-fi animation for cards
    gsap.from(".card", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: 0.2,
        onComplete: function() {
            gsap.to(".card", {
                duration: 0.8,
                boxShadow: "0px 0px 20px 5px rgba(0, 255, 153, 0.6)",
                repeat: -1,
                yoyo: true
            });
        }
    });
});
