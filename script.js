document.addEventListener("DOMContentLoaded", function() {
    // Get all the anchor links in the navbar
    var navLinks = document.querySelectorAll('.nav-list li a');

    // Loop through each anchor link
    navLinks.forEach(function(link) {
        // Add click event listener to each link
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior

            // Get the target section ID from the href attribute of the link
            var targetId = this.getAttribute('href').substring(1);

            // Get the target section element
            var targetSection = document.getElementById(targetId);

            // Scroll to the target section using smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
