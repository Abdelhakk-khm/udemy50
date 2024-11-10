const ratings = document.querySelectorAll('.rating') 
const sendBtn = document.getElementById('send')
const pannel = document.getElementById('pannel')
let selectedRating ='satisfied'
const ratingsContainer = document.querySelector('.ratings-container')

ratingsContainer.addEventListener('click' ,(e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerText
    }
})

sendBtn.addEventListener('click' , (e) => {
    pannel.innerHTML=`
    <i class='fas fa-heart'></i>
    <strong>Thank You </strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <p>we'll use youre feedback to improve our customer support</p>
    `
})