const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})

const closeLi = document.querySelectorAll('.close-li');
closeLi.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    })
})

// dark and light mode toggle
const colorToggleButton = document.querySelector('.theme-toggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}
  
  colorToggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    // Save theme
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
});

// Animations with ScrollReveal
ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.reveal-right', {
    origin: 'right',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});
ScrollReveal().reveal('.reveal-left', {
    origin: 'left',
    distance: '30px',
    duration: 700,
    easing: 'ease-in-out',
    reset: false
});