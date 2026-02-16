// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') 
      ? 'rotate(45deg) translateY(10px)' 
      : 'rotate(0) translateY(0)';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') 
      ? 'rotate(-45deg) translateY(-10px)' 
      : 'rotate(0) translateY(0)';
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('active') && 
      !e.target.closest('.nav-links') && 
      !e.target.closest('.menu-toggle')) {
    navLinks.classList.remove('active');
    
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(0) translateY(0)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0) translateY(0)';
  }
});

// Active Navigation Link
function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksAll = document.querySelectorAll('.nav-links a');
  
  navLinksAll.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Call on page load
setActiveLink();

// Smooth Scrolling for Anchor Links
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

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const sections = document.querySelectorAll('.section');
  
  cards.forEach(card => {
    observer.observe(card);
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // If validation passes, you would normally submit to a backend
    // For now, we'll just show a success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
  });
}

// Navbar Background on Scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});

// Tech Tags Filter (for Projects Page)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter projects
    projectCards.forEach(card => {
      const tags = card.dataset.tags.split(',');
      
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Copy to Clipboard (for contact info)
function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = 'var(--color-blue)';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 2000);
  });
}

// Add copy buttons to contact cards if they exist
document.querySelectorAll('.contact-card').forEach(card => {
  const copyable = card.querySelector('[data-copy]');
  if (copyable) {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.className = 'btn btn-secondary';
    copyBtn.style.marginTop = '1rem';
    copyBtn.style.fontSize = '0.85rem';
    copyBtn.style.padding = '0.5rem 1rem';
    
    copyBtn.addEventListener('click', () => {
      copyToClipboard(copyable.textContent, copyBtn);
    });
    
    card.appendChild(copyBtn);
  }
});

// Loading Animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-dark-blue);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.visibility = 'visible';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopButton.addEventListener('mouseenter', () => {
  backToTopButton.style.transform = 'translateY(-5px)';
  backToTopButton.style.background = 'var(--color-blue)';
});

backToTopButton.addEventListener('mouseleave', () => {
  backToTopButton.style.transform = 'translateY(0)';
  backToTopButton.style.background = 'var(--color-dark-blue)';
});

console.log('Portfolio website loaded successfully! 🚀');