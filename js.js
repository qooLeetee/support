let headerMenuButtonOpen = document.querySelector(".header__menu-button");
let headerMenuButtonClose = document.querySelector(
  ".header__menu__close-button"
);

headerMenuButtonOpen.onclick = () => {
  document.querySelector(".header__menu").classList.add("active");
};

headerMenuButtonClose.onclick = () => {
  document.querySelector(".header__menu").classList.remove("active");
};

let services = document.querySelectorAll(".services__list__item");
if (services.length > 0) {
  for (let i = 0; i < services.length; i++) {
    services[i].onclick = () => {
      services[i].classList.toggle("active");
    };
  }
}

let question = document.querySelectorAll(".freq-ask-questions__list__item");
if (question.length > 0) {
  for (let i = 0; i < question.length; i++) {
    question[i].onclick = () => {
      question[i].classList.toggle("active");
    };
  }
}

const whatClientsThinkAboutUsQuotationPersonSwiper = new Swiper(
  ".what-clients-think-about-us__quotation__person__swiper",
  {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 10,
      modifier: 10,
      slideShadows: false,
    },
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    breakpoints: {
      375: {
        slidesPerView: "1",
      },
      1919: {
        slidesPerView: "3",
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }
);
whatClientsThinkAboutUsQuotationPersonSwiper.on(
  "activeIndexChange",
  function () {
    document.getElementById("quotation__content__text").textContent =
      this.slides[this.activeIndex].getAttribute("data-value");
  }
);

const acquaintanceSwiper = new Swiper(".acquaintance__swiper", {
  breakpoints: {
    375: {
      slidesPerView: "1",
    },
    1919: {
      slidesPerView: "4",
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
