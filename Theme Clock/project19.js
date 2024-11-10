const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondeEl = document.querySelector('.seconde');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggleEl.addEventListener('click' , ()=>{
    if(document.documentElement.classList.toggle('dark')) {
        toggleEl.innerText ='Light Mode'
    } else {
        toggleEl.innerText ='Dark Mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours %12 
    const minutes =time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform=`translate(-50%,-100%) rotate(${hoursForClock*30}deg)`
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${minutes*6}deg)`
    secondeEl.style.transform=`translate(-50%,-100%) rotate(${seconds*6}deg)` 
    
    timeEl.innerText = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`
    dateEl.innerHTML=`
    ${days[day]}, ${months[month]} <span class="circle">${date}</span>
    `
}
setInterval(setTime,1000)