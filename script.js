// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Category switching functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const vehicleCategories = document.querySelectorAll('.vehicle-category');

    if (categoryTabs.length > 0 && vehicleCategories.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs and categories
                categoryTabs.forEach(t => t.classList.remove('active'));
                vehicleCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding category
                const targetCategory = this.getAttribute('data-category');
                const targetSection = document.getElementById(targetCategory);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // Modal functionality for vehicle images and videos
    const modal = document.getElementById('vehicleModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalImg = document.getElementById('modalImg');
    const modalVid = document.getElementById('modalVid');
    const closeBtn = document.querySelector('.close');

    if (modal) {
        // Open modal when clicking on vehicle items
        document.querySelectorAll('.vehicle-item').forEach(item => {
            item.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                const src = this.getAttribute('data-src');
                
                if (type === 'image') {
                    modalImage.style.display = 'block';
                    modalVideo.style.display = 'none';
                    modalImg.src = src;
                    modalImg.alt = this.querySelector('h3').textContent;
                } else if (type === 'video') {
                    modalVideo.style.display = 'block';
                    modalImage.style.display = 'none';
                    modalVid.src = src;
                }
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        // Close modal when clicking on close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Close modal when clicking outside of it
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        
        // Stop video playback
        if (modalVid) {
            modalVid.pause();
            modalVid.currentTime = 0;
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .service-card, .contact-card, .vehicle-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .category-card, .vehicle-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            console.log('Form submitted');
        });
    });

    // Add search functionality (if needed)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const vehicleItems = document.querySelectorAll('.vehicle-item');
            
            vehicleItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Add lazy loading for images (performance optimization)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next category
                navigateCategory(1);
            } else {
                // Swipe right - previous category
                navigateCategory(-1);
            }
        }
    }

    function navigateCategory(direction) {
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            const tabs = Array.from(categoryTabs);
            const currentIndex = tabs.indexOf(activeTab);
            const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
            tabs[nextIndex].click();
        }
    }

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            navigateCategory(-1);
        } else if (e.key === 'ArrowRight') {
            navigateCategory(1);
        }
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Handle scroll events here
        }, 100);
    });

    // Add error handling for images
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
            this.alt = 'Image not available';
        });
    });

    // Add loading states for better UX
    const loadingStates = {
        show: function(element) {
            element.style.opacity = '0.6';
            element.style.pointerEvents = 'none';
        },
        hide: function(element) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        }
    };

    // Export functions for global use
    window.PremiumAuto = {
        loadingStates,
        closeModal,
        navigateCategory
    };
});
