//DOM elements
const screens=document.querySelectorAll('.screen')
const chooseBtns=document.querySelectorAll('.choose-vehicule-btn')
const startBtn=document.getElementById('start-btn')
const gameContainer=document.getElementById('game-container')
const timeEl=document.getElementById('time')
const scoreEl=document.getElementById('score')
const messageEl=document.getElementById('message')
const recordEl=document.getElementById('record')

//variables
let interval = null
let seconds = 15
let record=0
let score = 0
let selected_vehicule ={}
let nb = 0
let timePath =500
//Data from LS
record = localStorage.getItem('record') ? JSON.parse(localStorage.getItem('record')) : record
if(record) {
    recordEl.innerText =`Record: ${record}`
}
    
//1st and 2nd screens
startBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})
chooseBtns.forEach(btn => {
    btn.addEventListener('click' ,() => {
        const img = btn.querySelector('img')
        const src = img.src
        const alt = img.alt
        selected_vehicule= {src, alt}
        screens[1].classList.add('up')
        setTimeout(createVehicule,1000)
        startGame()
    })
})

//Game screen
function createVehicule() {
    const vehicule = document.createElement('div')
    vehicule.classList.add('vehicule')
    const {x,y} = getRandomLocation()
    vehicule.style.top = `${y}px`
    vehicule.style.left = `${x}px`
    vehicule.innerHTML = `<img src="${selected_vehicule.src}" 
                        alt="${selected_vehicule.alt}" style="transform: rotate(${Math.random()*360}deg)"/>`

    vehicule.addEventListener('click' , catchVehicule)
    gameContainer.appendChild(vehicule)
}
function catchVehicule(){
    increaseScore()
    increaseTime()
    this.classList.add('caught')
    setTimeout(() => this.remove() , 1000)
    addVehicules()
}
function addVehicules() {
    if(nb < 5 ) {
        setTimeout(createVehicule,400)
        setTimeout(createVehicule,600)
        nb+=2
    } else {
        setTimeout(createVehicule,300)
    }
}
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random()*(width-200)+100
    const y = Math.random()*(height-200)+100
    return {x,y}
}

//Start End game
function startGame() {
    interval = setInterval(decreaseTime,timePath)
}
function endGame() {
    if(score > record){
        record=score
        newRecord()
    } else {
        nextTime()
    }
    messageEl.querySelector('#restart').addEventListener('click',() => {
        console.log('im here')
        window.location.reload();
    })
    StopGame()
    updateLS()
}

function StopGame(){
    const vehicules = document.querySelectorAll('.vehicule')
    vehicules.forEach(vehicule => vehicule.removeEventListener('click' ,catchVehicule ))
}
function newRecord() {
    recordEl.innerHTML=`Record: ${record}`
    messageEl.innerHTML=`New Record !!!!!! <br>
    <button id="restart" class="btn">Restart</button>`
    messageEl.classList.add('visible')
}
function nextTime() {
    messageEl.innerHTML=`Better luck next time  <br>
                        <button id="restart" class="btn">Restart</button>`
    messageEl.classList.add('visible')
}

//Time and Score
function increaseScore () {
    score++
    scoreEl.innerHTML = `Score: ${score}`
    if(score > 10 && score< 20) {
        timePath = 350
        clearInterval(interval)
        interval =setInterval(decreaseTime, timePath)
    } 
    if(score > 20 && score< 30) {
        timePath = 250
        clearInterval(interval)
        interval =setInterval(decreaseTime, timePath)
    } 
    if(score > 30 && score< 40) {
        timePath = 200
        clearInterval(interval)
        interval =setInterval(decreaseTime, timePath)
    } 
    if(score > 40) {
        timePath = 150
        clearInterval(interval)
        interval =setInterval(decreaseTime, timePath)
    } 
    
    
}
function increaseTime() {
    seconds++
    let m=Math.floor(seconds/60)
    let s = seconds % 60
    m = m<10 ? `0${m}` : m
    s = s<10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
}
function decreaseTime() {
    seconds--
    let m=Math.floor(seconds/60)
    let s = seconds % 60
    m = m<10 ? `0${m}` : m
    s = s<10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    if(seconds==0) {
        clearInterval(interval)
        endGame()
    }
}

//Local storage to save record
function updateLS() {
    localStorage.setItem('record',JSON.stringify(record))
}
