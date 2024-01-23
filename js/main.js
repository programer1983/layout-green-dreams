const swiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 2,
    spaceBetween: 23,

    navigation: {
      nextEl: '.reviews--next',
      prevEl: '.reviews--prev',
    },
  });

/* ================================================================================== */

const accordeon = document.querySelector('.questions-items')
const accordeonTitles = accordeon.querySelectorAll('.questions-button')

accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.questions-item__text')
        accordeonTitle.classList.toggle('questions-accordion--active')
        currentText.classList.toggle('questions-accordion__text--visible')

        if (currentText.classList.contains('questions-accordion__text--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }else{
            currentText.style.maxHeight = null
        }
    })
})

/* ================================================================================== */

let options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5
}

let callback = function(entries, observer){
  entries.forEach(entry => {
      if (entry.isIntersecting){
          console.log('find', entry)
          entry.target.classList.add('active')
          observer.unobserve(entry, target)
      }
  });
}

let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll('.about-img')
targets.forEach(target => {
  observer.observe(target)
})

let targets2 = document.querySelectorAll('.about-content')
targets2.forEach(target => {
  observer.observe(target)
})

let targets3 = document.querySelectorAll('.why-img')
targets3.forEach(target => {
  observer.observe(target)
})

let targets4 = document.querySelectorAll('.why-info')
targets4.forEach(target => {
  observer.observe(target)
})

let targets5 = document.querySelectorAll('.rates-item--left')
targets5.forEach(target => {
  observer.observe(target)
})

let targets6 = document.querySelectorAll('.rates-item--right')
targets6.forEach(target => {
  observer.observe(target)
})

let targets7 = document.querySelectorAll('.contacts-img')
targets7.forEach(target => {
  observer.observe(target)
})

let targets8 = document.querySelectorAll('.contacts-content')
targets8.forEach(target => {
  observer.observe(target)
})