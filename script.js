// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    var navLinks = document.querySelectorAll('.navbar a');
  
    document.getElementById('scroll-to-about').addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });
    }
  
    // Add click event to all nav links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Add mouseenter event to each section to highlight the corresponding nav link
    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('mouseenter', function () {
            removeActiveClasses();
            var activeLink = document.querySelector(`.navbar a[href="#${this.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        });

        // Add mouseleave event to each section to remove the highlight from the nav link
        section.addEventListener('mouseleave', function () {
            removeActiveClasses();
        });
    });
});
