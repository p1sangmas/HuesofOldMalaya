document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter');
    const phrases = ["Colorizing History", "Reviving the Past"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        const displayedText = currentPhrase.substring(0, currentCharIndex);

        typewriterElement.textContent = displayedText;

        if (!isDeleting && currentCharIndex < currentPhrase.length) {
            currentCharIndex++;
            setTimeout(type, 50); // Typing speed
        } else if (isDeleting && currentCharIndex > 0) {
            currentCharIndex--;
            setTimeout(type, 30); // Deleting speed
        } else {
            isDeleting = !isDeleting;

            if (!isDeleting) {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }

            setTimeout(type, 1000); // Pause before switching
        }
    }

    type();
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            }
        });
    });
    
    // Hero image slider
    const slider = document.querySelector('.slider');
    const beforeImage = document.querySelector('.slider-image.before');

    slider.addEventListener('input', function() {
        const sliderValue = slider.value; // Get the slider's value (0 to 100)
        beforeImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`; // Adjust the clip-path
    });
    
    // Gallery image sliders
    const gallerySliders = document.querySelectorAll('.image-comparison .slider');

    gallerySliders.forEach(slider => {
        const beforeImage = slider.parentElement.querySelector('.before');

        slider.addEventListener('input', function() {
            const sliderValue = this.value; // Get the slider's value (0 to 100)
            beforeImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`; // Adjust the clip-path
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});