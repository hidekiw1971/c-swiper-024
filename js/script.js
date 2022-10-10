jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const swiper = new Swiper(".swiper", {
    loop: true,
    loopedSlides: 4, // loopさせるスライドの枚数を設定。
    slidesPerView: 4, // 表示させるスライドの枚数を設定。
    centeredSlides: true, // activeSlideをセンターリングする。
    slideToClickedSlide: true, // activeSlideになる。
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // この中であればWordpressでも「$」が使用可能になる
});
