document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for 3D hero section
    const hero3d = document.getElementById('hero-3d');
    const floatingCards = document.querySelectorAll('.floating-card');
    const sphere = document.querySelector('.sphere-core');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        if (hero3d) {
            hero3d.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        }

        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 15;
            card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });

        if (sphere) {
            sphere.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    });

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('section, .feature-card, .timeline-item, .kpi-block');
    
    // Add initial reveal class
    revealElements.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
    });

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Nav background blur on scroll
    const nav = document.querySelector('.nav-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(5, 5, 10, 0.95)';
        } else {
            nav.style.padding = '0';
            nav.style.background = 'rgba(5, 5, 10, 0.8)';
        }
    });
});
