document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll('.resume-section');
    const contentDiv = document.getElementById('content');
    const highlightText = document.getElementById('highlight-text');

    const highlights = [
        "Welcome to my resume!",
        "GPA: 3.857 (unweighted), 4.524 (weighted)",
        "SAT: 1530 (superscore)",
        "AP Scholar with Distinction (2024)",
        "Over 170 hours of volunteer service",
        "Co-founder of Muslim Student Association"
    ];

    let highlightIndex = 0;

    function changeHighlight() {
        highlightText.style.opacity = 0; // Fade out
        setTimeout(() => {
            highlightText.textContent = highlights[highlightIndex];
            highlightText.style.opacity = 1; // Fade back in
            highlightIndex = (highlightIndex + 1) % highlights.length;
        }, 500); // Smooth transition without flicker
    }

    setTimeout(() => changeHighlight(), 1000); // Ensure the first text loads properly
    setInterval(changeHighlight, 4000); // Change highlight every 4 seconds

    // Toggle the dropdown menu with smooth transitions
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('expanded');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500); // Wait for transition to complete
        } else {
            menu.style.display = 'flex'; // Ensure the menu is visible before starting animation
            setTimeout(() => {
                menu.classList.add('show');
            }, 10); // Delay to allow for display change
        }
    });

    // Smooth scroll and show section content on click
    document.querySelectorAll('#menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Hide all sections initially
            sections.forEach(section => section.classList.add('hidden'));

            // Show the clicked section
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.remove('hidden');

            // Show content div
            contentDiv.style.display = 'block';

            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Close the menu
            menu.classList.remove('show');
            menuToggle.classList.remove('expanded');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500); // Wait for transition to complete
        });
    });
});
