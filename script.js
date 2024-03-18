document.addEventListener('DOMContentLoaded', function () {

    var navLinks = document.querySelectorAll('.navbar a');
  
    document.getElementById('scroll-to-about').addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    function removeActiveClasses() {
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active');
        });
    });

    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('mouseenter', function () {
            removeActiveClasses();
            var activeLink = document.querySelector(`.navbar a[href="#${this.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        });

        section.addEventListener('mouseleave', function () {
            removeActiveClasses();
        });
    });
});
