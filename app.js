$(function () {
    let slider = $(".slider-track");
    slider.slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        isAutoplay: true,
        directionAutoplay: 'next',
        delayAutoplay: 5000,
        isPauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    lightbox.option({
        'disableScrolling': true,
        'resizeDuration': 0,
        'wrapAround': true,
        'fadeDuration': 0,
        'imageFadeDuration': 0,
    });
    AOS.init({
        // Global settings:
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 100,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
//    Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click",function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});
