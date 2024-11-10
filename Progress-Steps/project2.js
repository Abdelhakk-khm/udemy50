//variables
let next =document.getElementById('next');
let prev =document.getElementById('prev');
let progress=document.getElementById('progress');
let circles=document.querySelectorAll('.circle');

let active =1;
//functions

next.addEventListener('click' , () => {
    active++;
    if(active > circles.length) {
        active = circles.length;
    }
    update();
})

prev.addEventListener('click' , () => {
    active--;
    if(active < 1) {
        active = 1;
    }
    update();
})
function update() {
    circles.forEach((circle,i)=>{
        if(i<active) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    progress.style.width = ((active-1) / (circles.length-1))*100 + '%';

    if(active===1) {
        prev.disabled =true;
    } else {
        prev.disabled=false;
    }
    if(active===4) {
        next.disabled =true;
    } else {
        next.disabled=false;
    }
}
