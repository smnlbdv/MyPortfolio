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
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.section__about-me');
let elements1 = document.querySelectorAll('.section__work_item');

for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of elements1) {
  observer.observe(elm);
}