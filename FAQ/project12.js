let buttons = document.querySelectorAll('.toggle');
buttons.forEach(btn =>{
    btn.addEventListener('click' , function () {
        this.parentNode.classList.toggle('active')
    })
})