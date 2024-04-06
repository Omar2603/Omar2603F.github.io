document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar a');

    document.getElementById('scroll-to-about').addEventListener('click', function () {
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

    var contactform = document.querySelector('form');
    contactform.addEventListener('submit', function (event) {
        alert("Information submitted");
    });

    document.querySelectorAll('.skill-tag').forEach(function (tag) {
        tag.addEventListener('click', function (e) {
            document.querySelectorAll('.skill-tag.active').forEach(function (activeTag) {
                if (activeTag !== tag) {
                    activeTag.classList.remove('active');
                }
            });
            tag.classList.toggle('active');
            e.stopPropagation(); 
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.skill-tag.active').forEach(function (tag) {
            tag.classList.remove('active');
        });
    });

    document.querySelectorAll('.skill-tag').forEach(function (tag) {
        tag.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});
