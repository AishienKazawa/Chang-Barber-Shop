let swiperGalleryItem;

function swiperGallery() {
  swiperGalleryItem = new Swiper(".swiper-gallery", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 600,
    loop: true,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      560: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return swiperGalleryItem;
}

let swiperTestimonialItem = new Swiper(".swiper-testimonial", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperBlogItem = new Swiper(".swiper-blog", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
  },
});
