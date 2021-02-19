$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        responsiveClass: true,
        responsive:{
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            960: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })
});

