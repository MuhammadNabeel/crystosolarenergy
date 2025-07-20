// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
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

// Scroll to contact function
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  
  // Simple validation
  if (!name || !email || !phone) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Phone validation (basic Pakistani format)
  const phoneRegex = /^(\+92|0)?[0-9]{10}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    alert('Please enter a valid Pakistani phone number.');
    return;
  }
  
  // Simulate form submission
  const submitButton = this.querySelector('.submit-button');
  const originalText = submitButton.textContent;
  
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    alert('Thank you for your inquiry! We will contact you within 24 hours to discuss your technology needs and schedule a consultation.');
    this.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 2000);
});

// Intersection Observer for scroll animations
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

// Add animation styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.service-card, .benefit-item, .stat');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Add loading animation for solar panels
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel, index) => {
    panel.style.animationDelay = `${index * 0.2}s`;
  });
});

// Utility function to handle WhatsApp contact
function contactWhatsApp() {
  const phoneNumber = '+923001234567';
  const message = 'Hello CrystoSolarEnergy! I am interested in your energy and technology solutions.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Add WhatsApp functionality to social link
document.addEventListener('DOMContentLoaded', () => {
  const whatsappLink = document.querySelector('.social-link[aria-label="WhatsApp"]');
  if (whatsappLink) {
    whatsappLink.addEventListener('click', (e) => {
      e.preventDefault();
      contactWhatsApp();
    });
  }
});