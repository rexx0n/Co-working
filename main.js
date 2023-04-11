import './scss/style.scss'
// let arrowDown = document.querySelectorAll('.questions__arrow-down')
// let arrowUp = document.querySelectorAll('')
// let questions = document.querySelector('.questions__info')
// arrowDown.forEach((btn) => {
//     btn.addEventListener('click', function(event) {
//        document.getElementById('1').classList.add('questions__span--visible')
//     })
// })

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