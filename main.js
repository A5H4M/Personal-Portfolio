    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#4f46e5' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4f46e5',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
// Typed.js initialization with updated roles
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: [
            'Cybersecurity Enthusiast',
            'ERP Professional',
            'SAP S/4HANA Administrator',
            'Network Administrator',
            'Technical Support Engineer',
            'Technical Support Quality Analyst',
            'Data Analyst',
            'HRMS Project Coordinator'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        cursorChar: '|',
        fadeOut: true,
        smartBackspace: true
    });
});

    // Enhanced smooth scrolling with offset calculation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Advanced scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
        observer.observe(el);
    });

    // Enhanced contact form with validation and animation
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = this;
        const fields = ['name', 'email', 'message'];
        let isValid = true;

        // Validate each field with animation
        fields.forEach(field => {
            const input = document.getElementById(field);
            const value = input.value.trim();

            if (!value) {
                isValid = false;
                input.classList.add('border-red-500');
                input.classList.add('animate-shake');
                setTimeout(() => input.classList.remove('animate-shake'), 500);
            } else {
                input.classList.remove('border-red-500');
            }

            // Special validation for email
            if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                isValid = false;
                input.classList.add('border-red-500');
            }
        });

        if (isValid) {
            // Add success animation
            form.classList.add('opacity-50', 'pointer-events-none');
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
                form.classList.remove('opacity-50', 'pointer-events-none');
            }, 1000);
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('backdrop-blur-lg');
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('backdrop-blur-lg');
            nav.classList.remove('shadow-lg');
        }
    });
    // Advanced scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add appropriate animation class based on data attribute
                const animation = entry.target.dataset.animation;
                const delay = entry.target.dataset.delay;
                
                if (delay) {
                    entry.target.classList.add(delay);
                }
                
                entry.target.classList.add(animation);
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, options);

    // Observe elements with scroll-animation class
    document.querySelectorAll('.scroll-animation').forEach(el => {
        observer.observe(el);
    });

    // Parallax scroll effect
    let parallaxElements = document.querySelectorAll('.parallax-scroll');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Smooth section reveal
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        sectionObserver.observe(section);
    });

    // Progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
});

var swiper = new Swiper('.swiper-container', {
    loop: true, // التكرار التلقائي للصور
    autoplay: {
        delay: 3000, // تغيير الصورة كل 3 ثواني
        disableOnInteraction: false, // لا يتوقف عند التفاعل
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block'); // يظهر القائمة كـ block عند التبديل
}