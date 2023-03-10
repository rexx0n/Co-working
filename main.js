let arrowDown = document.querySelectorAll('.questions__arrow-down')
let arrowUp = document.querySelectorAll('')
let questions = document.querySelector('.questions__info')
arrowDown.forEach((btn) => {
    btn.addEventListener('click', function(event) {
       document.getElementById('1').classList.add('questions__span--visible')
    })
})