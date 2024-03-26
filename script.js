window.onload = function () {
    const navbar = document.getElementById('top_nav');

    // Change background color on scroll
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#daac00";
        }
    };

    // Change font color on hover
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = 'black';
        });
        link.addEventListener('mouseout', function () {
            this.style.color = 'white'; 
        });
    });
};
