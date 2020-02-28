$('.owl-carousel').owlCarousel({
    loop: true,
    stagepadding: 5,
    margin: 5,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    autoplayHoverPause: true,
    lazyLoad: true,

    responsive: {
        0: {
            items: 1,


        },
        320: {
            items: 1,

        },

        425: {
            items: 1,

        },

        600: {
            items: 2,

        },
        1000: {
            items: 3,
            nav: true,
        }

    }
});