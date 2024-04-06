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


    var contactform = document.querySelector('form');
    contactform.addEventListener('submit', function(event){
        event.preventDefault();
        alert("Information submitterd");

        contactform.reset();
        
    });
    
  document.querySelectorAll('.skill-tag').forEach(function(tag) {
    var tooltip = tag.querySelector('.skill-tooltip');

    function toggleTooltip() {
       
        document.querySelectorAll('.skill-tooltip').forEach(function(otherTooltip) {
            if (otherTooltip !== tooltip) {
                otherTooltip.style.visibility = 'hidden';
                otherTooltip.style.opacity = 0;
            }
        });

      
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        } else {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
        }
    }

   
    tag.addEventListener('click', toggleTooltip);
    tag.addEventListener('touchstart', toggleTooltip);
});

});
