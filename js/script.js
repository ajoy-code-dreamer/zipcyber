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
  // ==== package slider ====
$(".package_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    swipeToSlide: true,
    nextArrow: ".package_next_arrow",
    prevArrow: ".package_prev_arrow",
    infinity:true,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
  // ==== package slider ====
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
