
// Local storage managment
const notes = JSON.parse(localStorage.getItem('notes'))

if ( notes ) {
    notes.forEach( note => {
        addNewNote(note[0] , note[1])
    })
}
//clear all
const clear =document.getElementById('clear')
clear.addEventListener('click',() => {
    const delButtons =document.querySelectorAll('.delete');
    delButtons.forEach(btn => btn.click() )
})


 //add button

const addBTn = document.getElementById('add');
addBTn.addEventListener('click',() => addNewNote())


function addNewNote(title='',paragraph=''){
    const note = document.createElement('div')
    note.classList.add('note');
    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-regular fa-trash-alt"></i></button>
        </div>
        <div class="info">
            <textarea class="title" placeholder="title" maxlength="15"></textarea>
            <span></span>
            <textarea class="paragraph" placeholder= 'Enter your text here ...'></textarea>
        </div>
        `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const textareaTitle = note.querySelector('.title')
    const textareaParagraph = note.querySelector('.paragraph')
    const span = note.querySelector('span')
    textareaTitle.disabled=false
    textareaParagraph.disabled=false
    if(title) {
        textareaTitle.value = title
        span.style.borderColor = 'transparent transparent transparent rgba(0, 0, 0, 0.8)';
    }
    if(paragraph) {
        textareaParagraph.value = paragraph
    }

    deleteBtn.addEventListener('click',() => {
        note.remove()
        updateLS()
    })
    editBtn.addEventListener('click' ,() => {
        if (textareaTitle.disabled) {
            textareaTitle.disabled=false
            textareaParagraph.disabled=false
        } else {
            textareaTitle.disabled=true
            textareaParagraph.disabled=true
        }
    })
    textareaTitle.addEventListener('input' ,(e) =>{
        if(e.target.value !=='') {
            span.style.borderColor = 'transparent transparent transparent rgba(0, 0, 0, 0.8)';
        } else {
            span.style.borderColor = 'transparent transparent transparent rgba(0, 0, 0,0.2)';
        }
        updateLS()
    });
    textareaParagraph.addEventListener('input' ,(e) =>{
        const updatedValue = e.target.value;
        textareaParagraph.value = updatedValue;
        updateLS()
    })
    document.body.appendChild(note)
}

function updateLS() {
    const notesEl =document.querySelectorAll('.info')
    let notes = []
    notesEl.forEach((note) => {
        const tab = [note.firstElementChild.value , note.lastElementChild.value]
        notes.push(tab)
    })
    localStorage.setItem('notes' , JSON.stringify(notes))
}