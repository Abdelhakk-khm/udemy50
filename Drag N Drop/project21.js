const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)


for(const empty of empties) {
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}
function dragStart() {
    this.className+=' hold';
    setTimeout(()=>{this.className='invisivle'},0)
    
}
function dragEnd() {
    this.className='fill'
}

function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.classList.add('hovered')
}
function dragLeave() {
    this.classList.remove('hovered')
}
function dragDrop() {
    this.className='empty';
    this.appendChild(fill);
}