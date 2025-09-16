// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation animations
    initNavigationAnimations();
    
    // Hero section animations
    initHeroAnimations();
    
    // Scroll-triggered animations
    initScrollAnimations();
    
    // Interactive animations
    initInteractiveAnimations();
    
    // Portfolio modal functionality
    initPortfolioModal();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
});

// Navigation animations
function initNavigationAnimations() {
    // Animate navigation on page load
    gsap.fromTo('.header', 
        { y: -100, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            delay: 0.5 
        }
    );
    
    // Animate navigation items
    gsap.fromTo('.nav-menu li', 
        { y: -20, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.1,
            ease: "power2.out",
            delay: 1 
        }
    );
    
    // Animate lets talk button
    gsap.fromTo('.lets-talk-btn', 
        { scale: 0, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.6, 
            ease: "back.out(1.7)",
            delay: 1.3 
        }
    );
}

// Hero section animations
function initHeroAnimations() {
    // Create timeline for hero animations
    const heroTl = gsap.timeline({ delay: 0.2 });
    
    // Animate hero intro
    heroTl.fromTo('.hero-intro', 
        { x: -50, opacity: 0 },
        { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out" 
        }
    );
    
    // Animate hero title with split text effect
    heroTl.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out" 
        }, 
        "-=0.4"
    );
    
    // Animate hero description
    heroTl.fromTo('.hero-description', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out" 
        }, 
        "-=0.6"
    );
    
    // Animate CTA button
    heroTl.fromTo('.cta-button', 
        { scale: 0, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.6, 
            ease: "back.out(1.7)" 
        }, 
        "-=0.4"
    );
    
    // Animate hero image
    heroTl.fromTo('.hexagon-frame', 
        { scale: 0, rotation: -180, opacity: 0 },
        { 
            scale: 1, 
            rotation: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: "back.out(1.2)" 
        }, 
        "-=1"
    );
    
    // Animate floating elements
    heroTl.fromTo('.element', 
        { scale: 0, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power2.out" 
        }, 
        "-=0.6"
    );
    
    // Animate video badge
    heroTl.fromTo('.video-badge', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "back.out(1.2)" 
        }, 
        "-=0.4"
    );
    
    // Animate social sidebar
    gsap.fromTo('.social-link', 
        { x: -100, opacity: 0 },
        { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.1,
            ease: "power2.out",
            delay: 2 
        }
    );
    
    // Animate scroll indicator
    gsap.fromTo('.scroll-indicator', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out",
            delay: 2.5 
        }
    );
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Clients section animation
    gsap.fromTo('.clients-counter', 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.clients',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Counter animation
    ScrollTrigger.create({
        trigger: '.counter-number',
        start: "top 80%",
        onEnter: () => {
            const counter = { value: 0 };
            gsap.to(counter, {
                value: 80,
                duration: 2,
                ease: "power2.out",
                onUpdate: function() {
                    document.querySelector('.counter-number').textContent = Math.floor(counter.value) + '+';
                }
            });
        }
    });
    
    // About section animations
    gsap.fromTo('.about-image', 
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about',
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.about-content', 
        { x: 100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about',
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Animate features list items
    gsap.fromTo('.features-list li', 
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.features-list',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Services section animations
    gsap.fromTo('.services-header', 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.services',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.service-card', 
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.services-grid',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Portfolio section animations
    gsap.fromTo('.portfolio-header', 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.portfolio',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.portfolio-row', 
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.portfolio-masonry',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Individual portfolio image animations
    gsap.fromTo('.portfolio-image', 
        { scale: 0.8, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: '.portfolio-masonry',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Portfolio content animations
    gsap.fromTo('.portfolio-content-right, .portfolio-content-left', 
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.portfolio-masonry',
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Blog section animations
    gsap.fromTo('.blog-header', 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.blog',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.blog-card', 
        { y: 100, opacity: 0, scale: 0.9 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: '.blog-grid',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Contact section animations
    gsap.fromTo('.contact-info', 
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.contact',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.contact-form', 
        { x: 100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.contact',
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.contact-item', 
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.contact-details',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Interactive animations
function initInteractiveAnimations() {
    // Service card hover animations
    document.querySelectorAll('.service-card').forEach(card => {
        const icon = card.querySelector('.service-icon svg');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            gsap.to(icon, { rotation: 360, scale: 1.1, duration: 0.6, ease: "back.out(1.7)" });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(icon, { rotation: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
        });
    });
    
    // Portfolio item hover animations
    document.querySelectorAll('.portfolio-item.large').forEach(item => {
        const image = item.querySelector('.portfolio-image');
        
        item.addEventListener('mouseenter', () => {
            gsap.to(image, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
    });
    
    // Portfolio arrow hover animations
    document.querySelectorAll('.portfolio-arrow').forEach(arrow => {
        arrow.addEventListener('mouseenter', () => {
            gsap.to(arrow, { rotation: 45, scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
        });
        
        arrow.addEventListener('mouseleave', () => {
            gsap.to(arrow, { rotation: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
        });
    });
    
    // Button hover animations
    document.querySelectorAll('.cta-button, .lets-talk-btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
    });
    
    // Social link animations
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { x: 10, scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
        });
    });
    
    // Blog card hover animations
    document.querySelectorAll('.blog-card').forEach(card => {
        const image = card.querySelector('.blog-image');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -15, duration: 0.3, ease: "power2.out" });
            gsap.to(image, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
    });
    
    // Contact form animations
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, { scale: 1.02, duration: 0.2, ease: "power2.out" });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
    });
    
    // Submit button animation
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            gsap.to(submitBtn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        
        submitBtn.addEventListener('mouseleave', () => {
            gsap.to(submitBtn, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
    }
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero', {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Floating elements parallax
    gsap.to('.element-1', {
        y: -100,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    gsap.to('.element-2', {
        y: -150,
        rotation: -180,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Initialize parallax effects
initParallaxEffects();

// Marquee animation control
function initMarqueeControl() {
    const marquee = document.querySelector('.marquee-track');
    
    if (marquee) {
        // Pause animation on hover
        marquee.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });
        
        marquee.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    }
}

// Initialize marquee control
initMarqueeControl();

// Rocket icon continuous animation
gsap.to('.rocket-icon', {
    rotation: 15,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
});

// Text reveal animation for hero title
function splitText() {
    const title = document.querySelector('.hero-title');
    if (title) {
        const words = title.textContent.split(' ');
        title.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
        
        gsap.fromTo('.word', 
            { y: 100, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.1,
                ease: "power3.out",
                delay: 1.5 
            }
        );
    }
}

// Portfolio Modal functionality
function initPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Portfolio data
    const portfolioData = {
        dstudio: {
            title: 'DStudio',
            subtitle: 'Web Design Project',
            category: 'Web Design',
            client: 'Artboard Studio',
            date: 'August 20, 2023',
            designer: 'ThemeJunction'
        },
        quillow: {
            title: 'Quillow',
            subtitle: 'Mobile App Design',
            category: 'App Design',
            client: 'Creative Agency',
            date: 'July 15, 2023',
            designer: 'ThemeJunction'
        },
        creative: {
            title: 'Creative Studio',
            subtitle: 'Brand Identity',
            category: 'Branding',
            client: 'Startup Inc',
            date: 'June 10, 2023',
            designer: 'ThemeJunction'
        }
    };
    
    // Open modal
    function openModal(projectId) {
        const data = portfolioData[projectId];
        if (!data) return;
        
        // Update modal content
        modal.querySelector('.modal-title').textContent = data.title;
        modal.querySelector('.modal-subtitle').textContent = data.subtitle;
        modal.querySelector('.info-item:nth-child(1) .info-value').textContent = data.category;
        modal.querySelector('.info-item:nth-child(2) .info-value').textContent = data.client;
        modal.querySelector('.info-item:nth-child(3) .info-value').textContent = data.date;
        modal.querySelector('.info-item:nth-child(4) .info-value').textContent = data.designer;
        
        // Show modal with animation
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // GSAP animation for modal entrance
        gsap.fromTo(modal.querySelector('.modal-content'), 
            { scale: 0.7, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.5, 
                ease: "back.out(1.2)" 
            }
        );
    }
    
    // Close modal
    function closeModal() {
        gsap.to(modal.querySelector('.modal-content'), {
            scale: 0.7,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Event listeners
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-portfolio');
            openModal(projectId);
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Initialize text splitting
splitText();

// Loading animation
function showLoadingAnimation() {
    gsap.fromTo('body', 
        { opacity: 0 },
        { 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
        }
    );
}

// Show loading animation
showLoadingAnimation();