//variables
let currentActive = document.querySelector('.active') ;
console.log(currentActive)
let container = document.querySelector('.container');

//functions

container.addEventListener('click' ,function(e) {
    if((e.target.matches('div.pannel')) && (e.target.classList.contains('active') === false)) {
        currentActive.classList.remove('active');
        e.target.classList.add('active');
        currentActive = e.target;
    }
})