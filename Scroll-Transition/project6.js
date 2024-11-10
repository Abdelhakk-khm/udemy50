const boxes = document.querySelectorAll('.box');


//initialisation
    const triggerButtom = window.innerHeight/5 *4;
    boxes.forEach(box => {
        const boxTop =box.getBoundingClientRect().top;
        if(boxTop < triggerButtom ) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })

//scroll animation
window.addEventListener('scroll' ,checkBoxes);
function checkBoxes() {
    boxes.forEach(box => {
        const boxTop =box.getBoundingClientRect().top;
        if(boxTop < triggerButtom ) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })
}