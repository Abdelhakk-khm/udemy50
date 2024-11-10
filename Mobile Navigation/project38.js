const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach ((li,idx) => {
    li.addEventListener('click' ,() => {
        hideAllContents()
        hideAllItems()
        li.classList.add('active')
        contents[idx].classList.add('show')
    } )
})

function hideAllContents() {
    contents.forEach((img) => {
        img.classList.remove('show')
    })
}
function hideAllItems() {
    listItems.forEach((li) => {
        li.classList.remove('active')
    })
}