const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


const ctx = canvas.getContext('2d');


let size = 10;
let color = 'black'
let x
let y
let isPressed = false;
//Drawing Functions 
canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    x=e.offsetX;
    y=e.offsetY;
    drawCircle(x,y);
})
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed) {
        x2=e.offsetX;
        y2=e.offsetY;
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x=x2
        y=y2
    }
})
canvas.addEventListener('mouseup',(e)=>{
    isPressed = false;
    x=undefined;
    y=undefined;
})

//tool-bar----------------------------------------------------------------
colorEl.addEventListener('change',(e)=>{
    color=e.target.value;
})

increaseBtn.addEventListener('click',()=>{
    if(size<30) {
        size+=5
    }
    updateSize(size)
})
decreaseBtn.addEventListener('click',()=>{
    if(size>10) {
        size-=10
    }
    updateSize(size)
})

clearEl.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})


//------------------------------------------------------------
function drawCircle(x,y) {
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle=color;
    ctx.fill()
}
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1);//initial position
    ctx.lineTo(x2,y2);//draw going to new position
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke()
}
function updateSize(size) {
    sizeEl.innerText=`${size}`
}




// drawCircle(100,200)
// drawLine(100,100,200,400)

// En réalité, e.offsetX ne fonctionne pas sur les éléments <div> nativement. 
// C'est une propriété spécifique aux éléments <canvas> 
// qui fournit les coordonnées du pointeur de la souris par rapport à l'origine du canvas.