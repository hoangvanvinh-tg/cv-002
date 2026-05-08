// ===================================
// DARK MODE TOGGLE FUNCTIONALITY
// ===================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeIcon();
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Update icon
    updateThemeIcon();
});

// Update theme icon based on current theme
function updateThemeIcon() {
    const icon = themeToggle.querySelector('.theme-icon');
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Toggle light mode');
    } else {
        icon.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    }
}

// ===================================
// PORTFOLIO MODAL
// ===================================

const modal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-overlay');

// Portfolio item data
const portfolioData = {
    'Thiết kế Bookmark': {
        image: 'https://via.placeholder.com/600x400/ff7a00/ffffff?text=Thiết+kế+Bookmark',
        description: 'A creative bookmark design project showcasing modern aesthetics and practical functionality.'
    },
    'Thiết kế Mô Hình 3D': {
        image: 'https://via.placeholder.com/600x400/ffa94d/ffffff?text=Thiết+kế+3D',
        description: '3D modeling and visualization project demonstrating advanced rendering techniques and design principles.'
    },
    'UI Design System': {
        image: 'https://via.placeholder.com/600x400/ffd43b/333333?text=UI+Design',
        description: 'Complete design system project including components, guidelines, and design patterns for consistency.'
    },
    'Digital Illustration': {
        image: 'https://via.placeholder.com/600x400/ff7a00/ffffff?text=Digital+Art',
        description: 'Creative digital artwork and illustrations showcasing artistic skills and creative expression.'
    }
};

// Open modal on portfolio item click
document.querySelectorAll('.btn-overlay').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const item = e.target.closest('.portfolio-overlay');
        const title = item.querySelector('h3').textContent;
        
        if (portfolioData[title]) {
            const data = portfolioData[title];
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = data.description;
            modal.style.display = 'block';
        }
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and other elements
document.querySelectorAll('.skill-card, .hobby-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===================================
// HIRE ME BUTTON FUNCTIONALITY
// ===================================

const hireButtons = document.querySelectorAll('.btn-primary[role="button"], button:contains("Hire Me")');
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Hire Me')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Scroll to contact section
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// ===================================
// RIPPLE EFFECT ON BUTTONS (Optional Enhancement)
// ===================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripples = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripples.style.width = ripples.style.height = size + 'px';
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple');
        
        this.appendChild(ripples);
        
        setTimeout(() => ripples.remove(), 600);
    });
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c✨ Welcome to Hoàng Văn Vinh\'s Portfolio ✨', 'color: #ff7a00; font-size: 16px; font-weight: bold;');
console.log('%cDesigned with passion and built with code', 'color: #ffa94d; font-size: 12px;');
console.log('%c🎨 UI/UX Design & Development Portfolio', 'color: #ffd43b; font-size: 12px;');
