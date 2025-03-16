document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Change menu icon when toggled
        if (navLinks.classList.contains('active')) {
            menuIcon.innerHTML = "✖"; // Close icon
        } else {
            menuIcon.innerHTML = "☰"; // Hamburger icon
        }
    });

    // Close menu when a link is clicked (for better user experience)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuIcon.innerHTML = "☰"; // Reset icon
        });
    });
});
