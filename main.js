import './scss/style.scss'
// let arrowDown = document.querySelectorAll('.questions__arrow-down')
// let arrowUp = document.querySelectorAll('')
// let questions = document.querySelector('.questions__info')
// arrowDown.forEach((btn) => {
//     btn.addEventListener('click', function(event) {
//        document.getElementById('1').classList.add('questions__span--visible')
//     })
// })
//Гамбургер
let hamburger = document.querySelector('.hamburger__first > .hamburger__lines')
let hamburger__first = document.querySelector('.hamburger__first')
let hamburger__active = document.querySelector('.hamburger__active')
let close = document.querySelector('.close')
console.log(close)
hamburger.addEventListener('click', function(e) {
    hamburger__first.setAttribute('id','none')
    hamburger__active.removeAttribute('id')
})
close.addEventListener('click', function(e) {
    hamburger__active.setAttribute('id', 'none')
    hamburger__first.removeAttribute('id')
})

//карусель
let leftArrow = document.querySelector('.price__carousel-arrow--left')
let rightArrow = document.querySelector('.price__carousel-arrow--right')
let cards = document.querySelector('.price__cards')
let counter = 0
rightArrow.addEventListener('click', function (e) {
    if (counter === -404) {
        counter = 0
    }
    counter = counter + -404
    cards.style.transform = `translateX(${counter}px)`
})
leftArrow.addEventListener('click', function (e) {
    if (counter === 0) {
        counter = -404
    }
    counter = 0
    cards.style.transform = `translateX(${counter}px)`
})
