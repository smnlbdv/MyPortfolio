//**Creating a swiper**//
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});


//**Variable declaration**//
const infoButtons = document.querySelectorAll('.buttonInfo')
const popup = document.querySelector('.popup__info')
const closePopup = popup.querySelector('.svg')
const popupButton = popup.querySelector('.inner__button')
const spanBlock = document.querySelector('.span__block')
const popupBurger = document.querySelector('.popup__burger')
const innerMenu = document.querySelector('.header__menu')

//**Popup work**/
infoButtons.forEach(button => {
  button.addEventListener('click', clickButton)
});

function clickButton(e) {
  popup.style.display = "flex"

  setTimeout(() => {
    document.querySelector('body').classList.add('noscroll')
    popup.classList.toggle('active')
    let blockInfo = e.target.parentNode.nextElementSibling.querySelector('.text__info').innerText
    let popupInner = popup.querySelector('.inner__text')
    popupInner.innerText = ""
    popupInner.append(blockInfo)
    let linkInfo = e.target.parentNode.nextElementSibling.querySelector('.link__info').getAttribute('href')
    popupInner.nextElementSibling.querySelector('.button__link_info').setAttribute('href', linkInfo)
  },100)

}

if(closePopup) {
  closePopup.addEventListener('click',clickPopup)
}

function clickPopup() {
  popup.classList.toggle('active')
  document.querySelector('body').classList.toggle('noscroll')

  setTimeout(() => {
    popup.style.display = "none"
  },500)
}

//**Description of lazy loading**/
let options = {
  threshold: [0.5]
};

let observerSection = new IntersectionObserver(onEntry, options);
let elements = document.querySelector('.section__about-me');
let elements1 = document.querySelectorAll('.section__work_item');
let linkElement = document.querySelector('.link1')
let linkElement2 = document.querySelector('.link2')
let linkAboutMe = document.querySelector('.section__about-me');
let linkWork = document.querySelector('.section__work');


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

//**Preloader work**/
window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none'
}

//**Description of the functionality of the burger menu**//
spanBlock.addEventListener('click', openPopupBurger)

function openPopupBurger() {
  document.querySelector('body').classList.toggle('noscroll')
  spanBlock.classList.toggle('active-span')
  popupBurger.classList.toggle('active')
  popupBurger.innerHTML = ""
  const cloneMenu = innerMenu.cloneNode(true)
  popupBurger.append(cloneMenu)
  const menuLink = popupBurger.querySelectorAll('.menu-list__item')
  menuLink.forEach(link => {
    link.addEventListener('click', clickLink)
  });
}

function clickLink() {
  document.querySelector('body').classList.toggle('noscroll')
  popupBurger.classList.remove('active')
  spanBlock.classList.toggle('active-span')
}
