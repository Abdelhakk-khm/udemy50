const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime=0
loveMe.addEventListener('click' , (e)=> {
     if(clickTime ===0) {
        clickTime = new Date().getTime()
    } else if((new Date().getTime()-clickTime) < 1000) {
         createHeart(e)
         times.innerText =+times.innerText +1
         clickTime=0
    } else{
        clickTime=new Date().getTime()
    }
})
function createHeart(e) {
    const heart=document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    heart.style.top =(y-topOffset)+'px'
    heart.style.left =(x-leftOffset)+'px'
     loveMe.appendChild(heart)
     setTimeout(()=>{
        heart.remove()
     },1000)
}