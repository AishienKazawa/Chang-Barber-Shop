/* add active for navlinks */
const activePage = window.location.pathname;
const links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active-link");
  }
});

/* global variable */
let gallerySlider;
let gallerySlide;
let slideImage;
let previewBtn;
let priceList;
let priceItem;
let url = window.location.href;
let urlParts = url.split("/");

/* get the lightbox component */
const lightboxImages = document.querySelector(".lightbox-images");
const lightboxImage = document.getElementById("lightbox-image");

if (
  urlParts[urlParts.length - 1] == "price.html" ||
  urlParts[urlParts.length - 1] == "index.html" ||
  urlParts[urlParts.length - 1] == ""
) {
  for (const [key, values] of Object.entries(priceArray)) {
    if (values.data == "hairstyle") {
      tempArrayPrice.push(priceArray[key]);
    }
  }

  createPrice();
}

if (
  urlParts[urlParts.length - 1] == "about.html" ||
  urlParts[urlParts.length - 1] == "index.html" ||
  urlParts[urlParts.length - 1] == ""
) {
  createSlide();

  swiperGallery();

  imagePreview();
}

const categories = document.querySelectorAll(".catg-link .catg-item");

categories.forEach((category, i) => {
  category.addEventListener("click", () => {
    slider = false;

    /* remove the current active and set to the new */
    if (i < 5) {
      for (let i = 0; i < categories.length; i++) {
        categories[i].classList.remove("active");
      }
    } else {
      for (let i = 5; i < categories.length; i++) {
        categories[i].classList.remove("active");
      }
    }

    category.classList.add("active");

    let targetData = category.getAttribute("data-target");

    /* differentiate based on the pages and categories index */
    if (i < 5) {
      if (urlParts[urlParts.length - 1] == "price.html") {
        priceList = document.querySelector(".price-list");
        priceItem = document.querySelectorAll(".price-list > *");

        removeChildElem(priceItem, priceList);

        for (const [key, values] of Object.entries(priceArray)) {
          if (values.data == targetData) {
            tempArray.push(priceArray[key]);
          }
        }
      } else {
        removeChildElem(gallerySlide, gallerySlider);

        if (targetData == "all") {
          tempArray = [];
        } else {
          for (const [key, values] of Object.entries(galleryArray)) {
            if (values.data == targetData) {
              tempArray.push(galleryArray[key]);
              break;
            }
          }
        }

        slider = true;
      }
    } else {
      priceList = document.querySelector(".price-list");
      priceItem = document.querySelectorAll(".price-list > *");

      removeChildElem(priceItem, priceList);

      for (const [key, values] of Object.entries(priceArray)) {
        if (values.data == targetData) {
          tempArray.push(priceArray[key]);
        }
      }
    }

    /* create component */
    i < 5 && slider ? createSlide() : createPrice();

    /* apply animation again for childs created */
    gsap.to(".price-list", {
      alpha: 1,
    });
    gsap.from(".price-list > *", {
      y: 15,
      alpha: 0,
      stagger: 0.3,
    });

    /* destroy and initialize new swiper */
    swiperGalleryItem.destroy();
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

    /* set the lightbox animation again */
    imagePreview();
  });
});

/* reverse the the lightbox animation when close */
if (
  urlParts[urlParts.length - 1] == "" ||
  urlParts[urlParts.length - 1] == "index.html" ||
  urlParts[urlParts.length - 1] == "about.html"
) {
  lightboxImages.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lg.reverse();
  });
}

window.onload = function () {
  if (
    urlParts[urlParts.length - 1] == "index.html" ||
    urlParts[urlParts.length - 1] == ""
  ) {
    console.log(urlParts[urlParts.length - 1]);
    /* lightbox for video */
    const lightboxVideo = document.querySelector(".lightbox-video");
    const playBtn = document.querySelector(".pulse-button");
    const mobPlayBtn = document.querySelector(".mob-btn");

    playBtn.addEventListener("click", (e) => {
      lightboxVideo.classList.add("active");
    });

    mobPlayBtn.addEventListener("click", (e) => {
      lightboxVideo.classList.add("active");
    });

    lightboxVideo.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) return;

      lightboxVideo.style.animationName = "fade-out";

      lightboxVideo.addEventListener("animationend", () => {
        if (lightboxVideo.style.animationName == "fade-out") {
          lightboxVideo.classList.remove("active");
          lightboxVideo.style.animationName = "";
        }
      });
    });
  }
};
