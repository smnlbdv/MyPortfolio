const swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
    },
});

const spanBlock = document.querySelectorAll('.block__span')
const childSpanBlock = spanBlock.childNodes
const blockInfo = document.querySelector('.work_block-info')

spanBlock.forEach(item => {
  item.addEventListener('click', clickInfo)
});

function clickInfo () {
  this.classList.toggle('line_animation')
  let sectionWork = this.parentNode
  let sectionWorkChild = sectionWork.querySelector('.work_block-info')
  let textChildInner = sectionWorkChild.querySelector('.text__info')
  if(sectionWorkChild.offsetHeight == 0) {
    sectionWorkChild.style = `max-height: ${textChildInner.offsetHeight}px`;
  } else {
    sectionWorkChild.style = `max-height: 0`;
  } 
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