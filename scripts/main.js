window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-toggler').addEventListener('click', () => {
        $('.header_nav').slideToggle();
        console.log(1)
    });

    
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            center: true,
            loop: true
        });
    });
});