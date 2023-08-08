$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    autoplay:true,
    lazyLoad:true,
    smartSpeed:1400,
    stagePadding:130,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1,
            stagePadding:0,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


jQuery(document).ready(function () {
	jQuery('.top-header-right').meanmenu({
        meanMenuContainer : '#mobile-menu',
        menaScreenWidth: 868,
    });
});