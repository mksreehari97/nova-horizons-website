document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    // Basic mobile menu toggle functionality
    if (menuToggle && desktopNav) {
        menuToggle.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                if (desktopNav.style.display === 'block') {
                    desktopNav.style.display = 'none';
                } else {
                    desktopNav.style.display = 'block';
                    desktopNav.style.position = 'absolute';
                    desktopNav.style.top = '80px';
                    desktopNav.style.left = '0';
                    desktopNav.style.width = '100%';
                    desktopNav.style.backgroundColor = '#FFFFFF';
                    desktopNav.style.padding = '20px';
                    desktopNav.style.borderBottom = '1px solid #E5E7EB';
                    desktopNav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

                    const ul = desktopNav.querySelector('ul');
                    ul.style.flexDirection = 'column';
                    ul.style.gap = '20px';
                }
            }
        });
    }

    // Handle window resize to reset menu styles
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && desktopNav) {
            desktopNav.style.display = 'block';
            desktopNav.style.position = 'static';
            desktopNav.style.padding = '0';
            desktopNav.style.boxShadow = 'none';
            desktopNav.style.borderBottom = 'none';

            const ul = desktopNav.querySelector('ul');
            ul.style.flexDirection = 'row';
            ul.style.gap = '32px';
        } else if (window.innerWidth <= 768 && desktopNav) {
            desktopNav.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing sticky nav and mobile menu code should remain here...

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isActive = item.classList.contains('active');

            // Close all other accordion items (optional: remove this loop if you want multiple open at once)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Swap icon between hamburger and 'X'
            const icon = menuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Hero Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Safety check in case slides don't exist on the page
    if (slides.length > 0) {
        const totalSlides = slides.length;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, 5000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const counterElement = document.getElementById('slide-counter');
    let currentSlide = 0;
    const totalSlides = slides.length; // Will be 2 based on the HTML

    // Simple Auto-Slider function
    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Increment slide index, loop back to 0 if at end
        currentSlide = (currentSlide + 1) % totalSlides;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');

        // Update the counter text (e.g., "01 /04" -> "02 /04")
        // Note: Assuming total slides is conceptually 4 per the screenshot design, 
        // but we dynamically update the first number.
        let displayNum = currentSlide + 1;
        counterElement.innerHTML = `0${displayNum} <span class="gray-text">/04</span>`;
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});