// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        device: document.getElementById('device').value,
        problem: document.getElementById('problem').value
    };
    
    // In a real application, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Спасибо за заявку, ${formData.name}!\n\nМы свяжемся с вами по телефону ${formData.phone} в ближайшее время.`);
    
    // Reset form
    contactForm.reset();
    
    // Optional: You can integrate with email service or API here
    // Example: sendEmail(formData);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and advantage items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .advantage-item, .gallery-item, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize charts
    initCharts();
});

// Initialize Charts
function initCharts() {
    // Services Chart (Doughnut)
    const servicesCtx = document.getElementById('servicesChart');
    if (servicesCtx) {
        new Chart(servicesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Телевизоры', 'Холодильники', 'Стиральные машины', 'Микроволновки', 'Посудомойки', 'Кондиционеры'],
                datasets: [{
                    label: 'Количество ремонтов',
                    data: [28, 22, 18, 12, 10, 10],
                    backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(251, 146, 60, 0.8)',
                        'rgba(34, 197, 94, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        padding: 12
                    }
                }
            }
        });
    }

    // Yearly Chart (Line)
    const yearlyCtx = document.getElementById('yearlyChart');
    if (yearlyCtx) {
        new Chart(yearlyCtx, {
            type: 'line',
            data: {
                labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                datasets: [{
                    label: 'Ремонтов в месяц',
                    data: [320, 380, 410, 450, 480, 520, 550, 530, 490, 460, 420, 380],
                    borderColor: 'rgba(255, 255, 255, 0.9)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBorderColor: 'rgba(255, 255, 255, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }
}

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('8')) {
            value = '7' + value.slice(1);
        }
        if (value.startsWith('7')) {
            let formatted = '+7';
            if (value.length > 1) {
                formatted += ' (' + value.slice(1, 4);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.slice(4, 7);
            }
            if (value.length >= 7) {
                formatted += '-' + value.slice(7, 9);
            }
            if (value.length >= 9) {
                formatted += '-' + value.slice(9, 11);
            }
            e.target.value = formatted;
        }
    });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});
