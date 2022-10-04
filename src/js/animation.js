gsap.registerPlugin(ScrollTrigger);

let mapCover;
let lg;

/* On scroll */
ScrollTrigger.matchMedia({
  /* tablet animation */
  "(min-width: 800px) and (max-width: 992px)": () => {
    const footerTablet = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-280 center",
      },
    });

    footerTablet.from(".footer-container > *", {
      y: 15,
      alpha: 0,
      stagger: {
        amount: 1,
      },
    });
  },

  /* minimum small screen */
  "(min-width: 320px)": () => {
    const sections = document.querySelectorAll(
      "section:not(.about, .hero, .footer, .mv)"
    );

    /* hero pages */
    gsap.to(".hero-content", {
      alpha: 1,
      delay: 1,
    });

    /* navbar */
    gsap.from(".navbar", {
      alpha: 0,
      delay: 0.5,
    });

    /* section titles */
    sections.forEach((el) => {
      const title = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "120 center",
        },
      });

      const secTitle = el.querySelectorAll(".sec-title");

      title.from(secTitle, {
        y: 15,
        alpha: 0,
      });
    });

    /* footer */
    const footer = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-120 center",
      },
    });

    footer.from(".footer-container > *", {
      y: 15,
      alpha: 0,
      stagger: {
        amount: 1,
      },
    });

    /* hero animation */
    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html"
    ) {
      gsap.fromTo(
        ".hero-ls .headings > *",
        {
          alpha: 0,
          x: -20,
        },
        {
          alpha: 1,
          x: 0,
          stagger: 0.5,
          delay: 1,
        }
      );

      gsap.from(".pulse-button", {
        alpha: 0,
        delay: 2.6,
      });

      gsap.fromTo(
        ".hero-touch",
        {
          alpha: 0,
          x: -100,
        },
        {
          alpha: 1,
          x: 0,
          delay: 3.3,
        }
      );
    }

    /* animation for different pages */
    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html"
    ) {
      const blog = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog",
          start: "120 center",
        },
      });

      blog.from(".swiper-blog-slider > *", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
      });
    }

    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html" ||
      urlParts[urlParts.length - 1] == "about.html"
    ) {
      /* lightbox fade in/out */
      lg = gsap.timeline({
        onReverseComplete: function () {
          lightboxImages.classList.remove("active");
        },
        paused: true,
      });

      lg.fromTo(
        ".lightbox-images",
        {
          alpha: 0,
          duration: 0.2,
        },
        { alpha: 1, display: "block" }
      );

      const about = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "120 center",
        },
      });

      about
        .from(".about-ls > *", {
          y: 15,
          alpha: 0,
          stagger: {
            amount: 1,
          },
        })
        .from(
          ".about-rs > *",
          {
            y: 15,
            alpha: 0,
            stagger: {
              amount: 1,
            },
          },
          "<"
        );
      const gallery = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "120 center",
        },
      });

      gallery
        .from(".gallery-catg-nav", {
          y: 15,
          alpha: 0,
        })
        .from(".swiper", {
          y: 15,
          alpha: 0,
        });

      const mission = gsap.timeline({
        scrollTrigger: {
          trigger: ".mv",
          start: "120 center",
        },
      });

      mission.from(".mv-content > *", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
      });

      const team = gsap.timeline({
        scrollTrigger: {
          trigger: ".team",
          start: "120 center",
        },
      });

      team.from(".team-row  > *", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
      });
    }

    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html" ||
      urlParts[urlParts.length - 1] == "price.html"
    ) {
      const price = gsap.timeline({
        scrollTrigger: {
          trigger: ".price",
          start: "120 center",
        },
      });

      price
        .from(".price-catg-nav", {
          y: 15,
          alpha: 0,
          delay: 0.3,
        })
        .from(".price-list > *", {
          y: 15,
          alpha: 0,
          stagger: 0.3,
        })
        .from(".price-container > .btn", {
          y: 15,
          alpha: 0,
        });
    }

    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html" ||
      urlParts[urlParts.length - 1] == "services.html"
    ) {
      const testimonial = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial",
          start: "120 center",
        },
      });

      testimonial
        .from(".swiper-testimonial-slide > *", {
          y: 15,
          alpha: 0,
          stagger: {
            amount: 1,
          },
        })
        .from(".swiper-testimonial-np", {
          y: 15,
          alpha: 0,
        });
    }

    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html" ||
      urlParts[urlParts.length - 1] == "about.html" ||
      urlParts[urlParts.length - 1] == "price.html"
    ) {
      const cta = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta",
          start: "120 center",
        },
      });

      cta.from(".cta-content-row > *", {
        y: 15,
        alpha: 0,
        stagger: 0.3,
      });
    }

    if (
      urlParts[urlParts.length - 1] == "" ||
      urlParts[urlParts.length - 1] == "index.html" ||
      urlParts[urlParts.length - 1] == "about.html" ||
      urlParts[urlParts.length - 1] == "services.html"
    ) {
      const service = gsap.timeline({
        scrollTrigger: {
          trigger: ".service",
          start: "120 center",
        },
      });

      service.from(".service-items > *", {
        y: 15,
        alpha: 0,
        stagger: 0.3,
        delay: 0.3,
      });
    }

    if (urlParts[urlParts.length - 1] == "services.html") {
      const wh = gsap.timeline({
        scrollTrigger: {
          trigger: ".wh",
          start: "120 center",
        },
      });

      wh.from(".wh-content  > p", {
        y: 15,
        alpha: 0,
        delay: 0.3,
      }).from(".working-hours  > *", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
      });
    }

    if (urlParts[urlParts.length - 1] == "price.html") {
      const plan = gsap.timeline({
        scrollTrigger: {
          trigger: ".plan",
          start: "120 center",
        },
      });

      plan.from(".plan-card  > *", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
        delay: 0.3,
      });
    }

    if (urlParts[urlParts.length - 1] == "contact.html") {
      gsap.fromTo(
        ".get-in-touch-content",
        {
          alpha: 0,
        },
        {
          alpha: 1,
          delay: 1,
        }
      );

      const mapHover = document.querySelector(".map-container");

      mapHover.addEventListener("mouseover", () => {
        mapCover.play();
      });
      mapHover.addEventListener("mouseleave", () => {
        mapCover.reverse();
      });

      const mapContainer = gsap.timeline({
        scrollTrigger: {
          trigger: ".map-container",
          start: "120 center",
        },
      });

      mapContainer.from("#map", {
        y: 15,
        alpha: 0,
        stagger: {
          amount: 1,
        },
        delay: 0.3,
      });

      mapCover = gsap.fromTo(
        ".map-cover",
        {
          alpha: 1,
        },
        { alpha: 0, display: "none" }
      );
    }
  },
});

/* loading screen */
let loaded = false;

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector("#loading-wrapper");

  gsap.fromTo(
    loaderContainer,
    {
      alpha: 1,
    },
    { alpha: 0, display: "none" }
  );

  document.body.classList.remove("no-scroll");
});
