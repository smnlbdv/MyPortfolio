const swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
    },
});

const infoButtons = document.querySelectorAll('.buttonInfo')
const popup = document.querySelector('.popup')
const closePopup = popup.querySelector('.svg')
const popupButton = popup.querySelector('.inner__button')

infoButtons.forEach(button => {
  button.addEventListener('click', clickButton)
});

function clickButton(e) {
  document.querySelector('body').classList.add('noscroll')
  popup.classList.toggle('active')
  let blockInfo = e.target.parentNode.nextElementSibling.querySelector('.text__info').innerText
  let popupInner = popup.querySelector('.inner__text')
  popupInner.innerText = ""
  popupInner.append(blockInfo)
  let linkInfo = e.target.parentNode.nextElementSibling.querySelector('.link__info').getAttribute('href')
  let link = popupInner.nextElementSibling.querySelector('.button__link_info').setAttribute('href', linkInfo)
  console.log(link)
}

closePopup.addEventListener('click',clickPopup)


function clickPopup() {
  popup.classList.toggle('active')
  document.querySelector('body').classList.remove('noscroll')
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}



let options = {
  threshold: [0.5] };

let observerSection = new IntersectionObserver(onEntry, options);
let elements = document.querySelector('.section__about-me');
let elements1 = document.querySelectorAll('.section__work_item');

observerSection.observe(elements);

elements1.forEach(item => {
  observerSection.observe(item)
});


let linkElement = document.querySelector('.link1')
let linkElement2 = document.querySelector('.link2')

let observerLinkFirst = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting == true) {
      linkElement.classList.add('active')
    } else {
      linkElement.classList.remove('active')
    }
  });
});

let observerLinkTwo = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting == true) {
      linkElement2.classList.add('active')
    } else {
      linkElement2.classList.remove('active')
    }
  });
});

let linkAboutMe = document.querySelector('.section__about-me');
let linkWork = document.querySelector('.section__work');

observerLinkFirst.observe(linkAboutMe);
observerLinkTwo.observe(linkWork);


window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none'
}