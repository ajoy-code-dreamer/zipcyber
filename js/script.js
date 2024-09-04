// ===== jQuery operation =====
$(function(){
    // ==== banner slider ====
    $('.banner_slider_wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        swipeToSlide:true,
        nextArrow: ".banner_next_arrow",
        prevArrow: ".banner_prev_arrow",
    });
    // ==== banner slider ====
    
    
})
// ===== jQuery operation =====

// ==== type js ====
var typed3 = new Typed('.typed', {
    strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
});
// ==== type js ====