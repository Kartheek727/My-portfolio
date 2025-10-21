
document.addEventListener('DOMContentLoaded', function () {
  
  // ===== THEME SWITCHER =====
  const themeToggleButtons = document.querySelectorAll('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Function to apply the selected theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Set initial theme based on preference or saved value
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');
  }
  
  // Add click listener to all theme toggle buttons
  themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the 'dark' class on the html element
      document.documentElement.classList.toggle('dark');
      
      // Update the theme in localStorage
      const isDarkMode = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  });

  // ===== STICKY NAVBAR =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== MOBILE MENU TOGGLE =====
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileMenuButton.classList.toggle('open');
    });
    
    // Close mobile menu when a link is clicked
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuButton.classList.remove('open');
        });
    });
  }

  // ===== ANIMATED SMOOTH SCROLLING =====
  const allNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if(targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
