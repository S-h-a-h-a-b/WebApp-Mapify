// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navButtons = document.querySelector('.nav-buttons');

// Auth functions
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    
    if (token) {
        // User is logged in
        navButtons.innerHTML = `
            <button class="btn" onclick="handleLogout()">Logout</button>
        `;
    } else {
        // User is not logged in
        navButtons.innerHTML = `
            <a href="login.html"><button class="btn">Login</button></a>
            <a href="signup.html"><button class="btn">Signup</button></a>
        `;
    }
}

function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/';
}

// Mobile menu functionality
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change menu icon
    const menuIcon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
    } else {
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        const menuIcon = menuBtn.querySelector('i');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }
});

// Close menu when clicking a nav link
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const menuIcon = menuBtn.querySelector('i');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    });
});

// Initialize auth status when page loads
document.addEventListener('DOMContentLoaded', checkAuthStatus);