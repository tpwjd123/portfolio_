// GSAP 애니메이션 및 JavaScript 기능

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initScrollAnimations();
    initProgressBars();
    initCounters();
    initSmoothScroll();
    initPortfolioSwiper();
});

// GSAP 초기 애니메이션 설정
function initAnimations() {
    // 헤더 애니메이션
    gsap.from('.header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    // 히어로 타이틀 애니메이션
    gsap.timeline()
        .from('.hello', {
            duration: 1.2,
            x: -100,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.video-badge', {
            duration: 1,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .from('.motion', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.8');

    // 히어로 이미지 애니메이션
    gsap.from('.hero-img', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // 툴팁 애니메이션
    gsap.from('.tooltip', {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });

    // 네임 태그 애니메이션
    gsap.from('.name-tag', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.2
    });

    // 히어로 설명 애니메이션
    gsap.from('.hero-description', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });
}

// 스크롤 기반 애니메이션
function initScrollAnimations() {
    // 섹션별 fade-in 애니메이션
    const sections = document.querySelectorAll('.skills, .about, .services, .portfolio');
    
    sections.forEach(section => {
        gsap.from(section.children, {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 스킬 아이템 애니메이션
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 1,
            y: 60,
            opacity: 0,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 서비스 아이템 애니메이션
    gsap.utils.toArray('.service-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 1,
            y: 60,
            opacity: 0,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

}

// 프로그레스 바 애니메이션
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        
        gsap.to(bar, {
            width: progress + '%',
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// 숫자 카운터 애니메이션
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        
        gsap.to(counter, {
            duration: 2,
            textContent: target,
            roundProps: 'textContent',
            ease: 'power3.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// 부드러운 스크롤
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 100
                    },
                    ease: 'power3.out'
                });
            }
        });
    });
}

// 브랜드 마퀴 애니메이션 개선
function enhanceBrandMarquee() {
    const track = document.querySelector('.brands-track');
    if (track) {
        // 마우스 호버 시 일시정지
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
}

// 패럴랙스 효과
function initParallax() {
    gsap.utils.toArray('.hero-img').forEach(img => {
        gsap.to(img, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// 호버 애니메이션 개선
function initHoverAnimations() {
    // 스킬 아이템 호버
    gsap.utils.toArray('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // 서비스 아이템 호버
    gsap.utils.toArray('.service-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

}

// 버튼 클릭 애니메이션
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.lets-talk-btn, .learn-more-btn, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 클릭 효과
            gsap.to(this, {
                duration: 0.1,
                scale: 0.95,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
        });
    });
}

// 스크롤 진행률 표시 (선택사항)
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #8B5CF6, #06B6D4);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 모든 추가 애니메이션 초기화
document.addEventListener('DOMContentLoaded', function() {
    enhanceBrandMarquee();
    initParallax();
    initHoverAnimations();
    initButtonAnimations();
    initScrollProgress();
});

// 반응형 처리
function handleResize() {
    // 화면 크기에 따른 애니메이션 조정
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        // 모바일에서는 일부 애니메이션 간소화
        gsap.set('.tooltip', { display: 'none' });
    } else {
        gsap.set('.tooltip', { display: 'flex' });
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // 초기 실행

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트 최적화
const optimizedScroll = debounce(() => {
    // 스크롤 관련 작업
}, 10);

window.addEventListener('scroll', optimizedScroll);

