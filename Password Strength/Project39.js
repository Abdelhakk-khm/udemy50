const password = document.getElementById('password')

const background = document.getElementById('background')

password.addEventListener('input',() => {
    const length = password.value.length
    background.style.filter =`blur(${ -2*length + 20}px)`
})