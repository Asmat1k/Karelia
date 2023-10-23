export function initSwiper() {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    spaceBetween: 30,
    autoHeight: true,
    centeredSlides: true,
    // loop: true,
  });
}