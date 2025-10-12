//**Создание слайдеров**//
const swiper1 = new Swiper('.swiper_1', {
    loop: true,
    pagination: {
        el: ".section-work__item_1 .swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const swiper2 = new Swiper('.swiper_2', {
    loop: true,
    pagination: {
        el: ".section-work__item_2 .swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const swiper3 = new Swiper('.swiper_3', {
    loop: true,
    pagination: {
        el: ".section-work__item_3 .swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const swiper4 = new Swiper('.swiper_4', {
    loop: true,
    pagination: {
        el: ".section-work__item_4 .swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const swiper5 = new Swiper('.swiper_5', {
    loop: true,
    pagination: {
        el: ".section-work__item_5 .swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

//**Настройки ленивой загрузки**/
let options = {
  threshold: [0.5]
};

//**Переменные**//
const spanBlock = document.querySelector('.span-block'),
  popupBurger = document.querySelector('.popup__burger'),
  innerMenu = document.querySelector('.header__menu'),
  observerSection = new IntersectionObserver(onEntry, options),
  elements = document.querySelector('.section-about'),
  elements1 = document.querySelectorAll('.section-work__item'),
  linkElement = document.querySelector('.link1'),
  linkElement2 = document.querySelector('.link2'),
  linkAboutMe = document.querySelector('.section-about'),
  linkWork = document.querySelector('.section-work');

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

observerSection.observe(elements);

elements1.forEach(item => {
  observerSection.observe(item)
});

let observerLinkFirst = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting == true) {
      linkElement.classList.add('active-link')
    } else {
      linkElement.classList.remove('active-link')
    }
  });
});

let observerLinkTwo = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting == true) {
      linkElement2.classList.add('active-link')
    } else {
      linkElement2.classList.remove('active-link')
    }
  });
});

observerLinkFirst.observe(linkAboutMe);
observerLinkTwo.observe(linkWork);

//LOADER
window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none'
}