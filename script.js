// Smooth scrolling for navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    form.reset();
});

// Image animation on scroll
const heroimage= document.querySelector('.hero-image');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});
// Mock database (simulating data from SQL tables)
const mockDatabase = {
    services: [
        { id: 1, title: 'Residential Construction', description: 'Custom homes built with precision and care.' },
        { id: 2, title: 'Commercial Projects', description: 'Offices and retail spaces designed for success.' },
        { id: 3, title: 'Renovations', description: 'Transform your space with modern upgrades.' }
    ],
    unemployment_stats: [
        { id: 1, category: 'General', rate: 7.3, year: 2024, description: 'Taux de chômage de la population active au T4 2024.' },
        { id: 2, category: 'Youth', rate: 17.2, year: 2023, description: 'Taux de chômage des jeunes (15-24 ans) en moyenne en 2023.' }
    ],
    contacts: []
};

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Form submission handling (save to mock database)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate saving to contacts table
    mockDatabase.contacts.push({
        id: mockDatabase.contacts.length + 1,
        name: data.name,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString()
    });
    
    console.log('Contact saved:', mockDatabase.contacts[mockDatabase.contacts.length - 1]);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    form.reset();
});

// Image animation on scroll
const hero = document.querySelector('.hero-image');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});

// Load services dynamically
document.addEventListener('DOMContentLoaded', () => {
    const serviceGrid = document.getElementById('service-grid');
    mockDatabase.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceGrid.appendChild(card);
    });

    // Load unemployment stats dynamically
    const statsContainer = document.getElementById('stats-container');
    mockDatabase.unemployment_stats.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <h3>${stat.category} (${stat.year})</h3>
            <div class="progress-bar">
                <div class="progress" data-percent="${stat.rate}"></div>
            </div>
            <p>${stat.description}</p>
        `;
        statsContainer.appendChild(card);
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
            bar.style.width = `${percent}%`;
        }, 500);
    });
});



const scrollContainer = document.querySelector('.project-grid');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


