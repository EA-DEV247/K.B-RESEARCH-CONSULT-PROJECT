document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
        
        // Change icon based on menu state
        if (mainMenu.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });
    
    // Close menu when a link is clicked (for single-page navigation)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && window.innerWidth <= 768) {
            mainMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});
