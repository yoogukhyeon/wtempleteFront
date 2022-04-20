$(document).ready(function(){
    //visual swiper
    var swiper = new Swiper('.visual-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay:7000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    on: {
      init: function () {
        $(".swiper-btn").removeClass("animate");
        $(".swiper-btn").eq(0).addClass("animate");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-btn").removeClass("animate");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-btn").eq(0).addClass("animate");
      }
    }
    });
    
})