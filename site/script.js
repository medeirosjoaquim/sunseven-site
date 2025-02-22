// High contrast toggle functionality
const contrastToggle = document.getElementById('contrast-toggle');
const body = document.documentElement;

// Check for saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    contrastToggle.setAttribute('aria-pressed', savedTheme === 'high-contrast');
} else {
    // Set default theme
    body.setAttribute('data-theme', 'default');
    contrastToggle.setAttribute('aria-pressed', 'false');
}

contrastToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'default' ? 'high-contrast' : 'default';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update aria-pressed state
    contrastToggle.setAttribute('aria-pressed', newTheme === 'high-contrast');
    
    // Announce theme change to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = `Theme changed to ${newTheme}`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Nav bar background opacity on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 100) {
        nav.style.backdropFilter = 'blur(12px)';
    } else {
        nav.style.backdropFilter = 'blur(8px)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const parallaxWrapper = document.querySelector('.parallax-wrapper');
    const scrolled = window.pageYOffset;
    parallaxWrapper.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Initialize interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const contactButton = document.querySelector('.contact-button');
    
    ctaButton.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    contactButton.addEventListener('click', () => {
        alert('Contact form coming soon!');
    });
});
