/* Fake Data */
const galleryArray = [
  { name: "hairstyle", total: 8, data: "hairstyle" },
  { name: "mustachestyle", total: 8, data: "mustache" },
  { name: "facial", total: 5, data: "facial" },
  { name: "beardstyle", total: 7, data: "beards" },
];

const priceArray = [
  {
    name: "Buzz Cut",
    description:
      "A short man hair cut that can be achieved by simply buzzing all of your hair off with the help of a hair clipper, hence the name.",
    price: 134,
    data: "hairstyle",
  },
  {
    name: "French Crop",
    description:
      "It features a long textured fringe while the hair on top is cut so that it is of the same length across the head as the fringe.",
    price: 124,
    data: "hairstyle",
  },
  {
    name: "Undercut",
    description:
      "An undercut is one of the most popular types of haircut for men. It also involves trimming the hair on the sides and back.",
    price: 89,
    data: "hairstyle",
  },
  {
    name: "Ivy League",
    description:
      "A haircut is an elongated version of a crew cut. Because the hair on top is relatively long, you can define it with a parting.",
    price: 205,
    data: "hairstyle",
  },
  {
    name: "Fade Haircut",
    description:
      "If we had to name the most popular types of cuts for men, a fade haircut would definitely be on top of the list.",
    price: 50,
    data: "hairstyle",
  },
  {
    name: "Bowl Cut",
    description:
      "Guys often underestimate some old school types of haircuts, such as a bowl cut.",
    price: 75,
    data: "hairstyle",
  },
  {
    name: "Quiff",
    description:
      "It’s actually a combination of the pomp, the flat-top and the mohawk. It features short sides and back and longer hair on top that‘s brought upward and backward.",
    price: 88,
    data: "hairstyle",
  },
  {
    name: "Curtain Hairstyle",
    description:
      "If your hair has a natural center part, just go with it when sporting this ‘do. Then, play up the volume on your roots by scrunching your hair or blow-drying it.",
    price: 56,
    data: "hairstyle",
  },
  {
    name: "Mutton Chops Beard",
    description: "Long sideburns that connect to a mustache.",
    price: 87,
    data: "beards",
  },
  {
    name: "Chin Trip",
    description: "A vertical line of hair across the chin.",
    price: 127,
    data: "beards",
  },
  {
    name: "Balbo Beard",
    description: "A beard without sideburns and a trimmed, floating mustache.",
    price: 324,
    data: "beards",
  },
  {
    name: "Anchor Beard",
    description:
      "A pointed beard that traces the jawline, paired with a mustache.",
    price: 543,
    data: "beards",
  },
  {
    name: "Short Boxed Beard",
    description: "A short beard with thin, neatly trimmed sides.",
    price: 577,
    data: "beards",
  },
  {
    name: "Petite Goatee",
    description: "A small beard that elongates the chin.",
    price: 879,
    data: "beards",
  },
  {
    name: "Circle Beard",
    description: "A chin patch and a mustache that forms a circle.",
    price: 234,
    data: "beards",
  },
  {
    name: "Ban Dyke Beard",
    description: "A full goatee with detached mustache.",
    price: 443,
    data: "beards",
  },
  {
    name: "Handlebar Mustache",
    description:
      "A nicely cowboy-esque square face can help you pull off this most gentlemanly of mustache styles. Find out how to get the handlebar mustache here.",
    price: 452,
    data: "mustache",
  },
  {
    name: "Horseshoe Mustache",
    description: "Round and square faces looking to add some length.",
    price: 764,
    data: "mustache",
  },
  {
    name: "Chevron Mustache",
    description:
      "If you have small features, the chevron will dominate your face. If not, you’re fine to take this strong mustache style on.",
    price: 873,
    data: "mustache",
  },
  {
    name: "Military Mustache",
    description:
      "Square faces with well-defined jaw lines are well complemented by this strong ‘tache.",
    price: 211,
    data: "mustache",
  },
  {
    name: "Waxing",
    description:
      "Will provide you with a smooth surface for around 6 weeks, and the more you wax the area, the longer you can enjoy hairless skin.",
    price: 543,
    data: "facial",
  },
  {
    name: "Laser Hair Removal",
    description:
      "SLaser hair removal has similar benefits to waxing, but the results can last a lot longer, and you can benefit from smooth skin without the need for constant attention.",
    price: 675,
    data: "facial",
  },
  {
    name: "Men’s Skin Treatment",
    description:
      "omething that often gets left behind when thinking about beauty treatments for men are facials.",
    price: 867,
    data: "facial",
  },
  {
    name: "Scalp Micro Pigmentation",
    description:
      "The most important benefit of scalp micro-pigmentation is that it can provide you with the confidence that you have been looking for and lasts for a long period of time before you require a top-up.",
    price: 132,
    data: "facial",
  },
  {
    name: "Tattoo Removal",
    description:
      "One of the main advantages of having your tattoo removed is that it offers a permanent solution to removing an unwanted piece of art.",
    price: 1225,
    data: "facial",
  },
  {
    name: "Fat Freezing",
    description:
      "You will be surprised and pleased to know that there are multiple benefits to having fat freezing treatments, especially when choosing this treatment over its weight loss alternatives.",
    price: 1090,
    data: "facial",
  },
];

/* initializing empty array */
let tempArray = [];
let tempArrayPrice = [];

/* for gallery image preview */
function imagePreview() {
  gallerySlider = document.querySelector(".swiper-gallery-slider");
  gallerySlide = document.querySelectorAll(".swiper-gallery-slider > *");
  slideImage = document.querySelectorAll(".swiper-slide-image > img");
  previewBtn = document.querySelectorAll(
    ".swiper-slide-cover > .btn-group > button:nth-child(2)"
  );

  previewBtn.forEach((x, i) => {
    x.addEventListener("click", (e) => {
      lg.play();

      lightboxImage.src = slideImage[i].src;
    });
  });
}

/* removing childs */
function removeChildElem(childs, parent) {
  if (childs.length != 0) {
    childs.forEach((child) => {
      parent.removeChild(child);
    });
  }
}

/* create slides for carousel */
function createSlide() {
  for (const [key, values] of Object.entries(
    tempArray.length > 0 ? tempArray : galleryArray
  )) {
    for (let i = 1; i <= values.total; i++) {
      const galleryContainer = document.querySelector(".swiper-gallery-slider");

      const swiperSlide = document.createElement("div");
      swiperSlide.setAttribute("class", "swiper-slide");
      swiperSlide.setAttribute("data-item", `${values.data}`);

      const figure = document.createElement("figure");
      figure.setAttribute("class", "swiper-slide-image");

      const img = document.createElement("img");
      img.setAttribute("src", `./assets/gallery/${values.name}-${i}.jpg`);
      img.setAttribute("alt", `${values.name}-${i}`);
      img.setAttribute("id", `${values.name}-${i}`);
      figure.append(img);
      swiperSlide.append(figure);

      const slideCover = document.createElement("div");
      slideCover.setAttribute("class", "swiper-slide-cover");

      const heading = document.createElement("h3");
      heading.innerHTML = "Image Title for now";
      slideCover.append(heading);
      swiperSlide.append(slideCover);

      const btnGroup = document.createElement("div");
      btnGroup.setAttribute("class", "btn-group");
      btnGroup.setAttribute("role", "group");

      const pin = document.createElement("button");
      pin.setAttribute("type", "button");
      pin.setAttribute("class", "btn btn-primary");

      const preview = document.createElement("button");
      preview.setAttribute("type", "button");
      preview.setAttribute("class", "btn btn-primary");

      const btnPreview = document.createElement("i");
      btnPreview.setAttribute("class", "bi bi-search");

      const btnPin = document.createElement("i");
      btnPin.setAttribute("class", "bi bi-pin-fill");
      pin.append(btnPin);
      preview.append(btnPreview);
      btnGroup.append(pin);
      btnGroup.append(preview);

      slideCover.append(btnGroup);
      galleryContainer.append(swiperSlide);
    }

    tempArray = [];
  }
}

/* create price item */
function createPrice() {
  for (const [key, values] of Object.entries(
    tempArrayPrice == 0 ? tempArray : tempArrayPrice
  )) {
    const priceList = document.querySelector(".price-list");
    const listItem = document.createElement("div");
    listItem.setAttribute("class", "list-item col");

    const figure = document.createElement("figure");
    figure.setAttribute("class", "service-item");

    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    );
    image.setAttribute("alt", "service-image");
    figure.append(image);
    listItem.append(figure);

    const details = document.createElement("div");
    details.setAttribute("class", "service-detail");

    const span = document.createElement("span");
    span.setAttribute("class", "service-price");

    const name = document.createElement("h5");
    name.innerHTML = values.name;
    span.append(name);

    const hr = document.createElement("hr");
    span.append(hr);

    const price = document.createElement("h5");
    price.innerHTML = `Php ${values.price}`;
    span.append(price);

    const p = document.createElement("p");
    p.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus atque eaque omnis nemo nulla, ad illo quae optio labore ullam?";
    details.append(span);
    details.append(p);

    listItem.append(details);

    priceList.append(listItem);
  }
  tempArrayPrice = [];
  tempArray = [];
}
