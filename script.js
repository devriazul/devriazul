document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const revealElements = document.querySelectorAll('.reveal');

    // Handle Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        highlightNavLink();
        revealOnScroll();
    });

    // Highlight Active Nav Link on Scroll
    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        
        document.querySelectorAll('section[id]').forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    // Reveal Elements on Scroll
    function revealOnScroll() {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    // Smooth Scroll for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetEmoji = document.querySelector(targetId);
            
            if (targetEmoji) {
                window.scrollTo({
                    top: targetEmoji.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open (implementation can be added later)
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic UI feedback - in a real scenario, this would send an AJAX request
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! This is a demo portfolio, so no email was actually sent.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Initial check for reveal
    revealOnScroll();
});

// Subtle background movement effect
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
