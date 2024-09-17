// ===== jQuery operation =====
$(function () {
  // ==== banner slider ====
$(".banner_slider_wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    swipeToSlide: true,
    nextArrow: ".banner_next_arrow",
    prevArrow: ".banner_prev_arrow",
    infinity:true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    });
  // ==== banner slider ====
  // ==== counter operation ====
  $('.counting').counterUp({
    delay: 20,
    time: 2000
  });
  // ==== counter operation ====
});
// ===== jQuery operation =====

// ==== type js ====
var typed = new Typed(".typed", {
    strings: [
    "Welcome to Zip Cyber",
    "BTRC registered ISP",
    "The best internet service in this Area",
    "Connect Faster - Live Better.",
],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
});
// ==== type js ====
