const header = document.getElementById('header')
const title = document.getElementById('title')
const exerpt = document.getElementById('exerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,1500)

function getData() {
    header.innerHTML =`
    <img src="library.jpg" alt="">`
    title.innerHTML = `
    Lorem, ipsum dolor.`
    exerpt.innerHTML=`
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, aliquid!
    `
    profile_img.innerHTML =`
    <img src="library.jpg" alt="">`
    name.innerHTML='John Doe'
    date.innerHTML='Oct 09, 2020'
    animated_bgs.forEach((bg)=>{
        bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach((bg)=>{
        bg.classList.remove('animated-bg-text')
    })
}