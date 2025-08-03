{/* <script> */}
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Loading overlay
        window.addEventListener('load', function() {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 500);
                }, 1000);
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
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

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de soumission
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check me-2"></i>Message envoyé !';
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-success');
                
                setTimeout(() => {
                    alert('شكرا لك! Merci pour votre demande ! Notre équipe G2S vous contactera dans les plus brefs délais.');
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-primary');
                    this.reset();
                }, 2000);
            }, 2000);
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-section::before');
            const speed = scrolled * 0.5;
        });

        // Counter animation for stats (if needed)
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current);
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all service cards
        document.querySelectorAll('.service-card, .process-card').forEach(card => {
            observer.observe(card);
        });
    {/* </script> */}