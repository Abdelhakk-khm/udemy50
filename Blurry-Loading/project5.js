const text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0 ;

let int =setInterval(blurring , 30);

function blurring() {
    load++;
    if(load>99) {
        clearInterval(int);
    }
    text.innerText = `${load}%`
    text.style.opacity = `${(100-load)/100}`
    bg.style.filter = `blur(${-0.3*load+30}px)`
}