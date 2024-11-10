const button = document.querySelector('.btn');
const toasts = document.getElementById('toasts');

const messages = [
    'message one',
    'message two',
    'message three',
    'message four',
]
button.addEventListener('click' ,() => {
    createNotification();
})

function createNotification() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText =messages[Math.floor(Math.random() * messages.length)];
    toasts.prepend(toast)
    setTimeout(()=>{
        toast.remove()
    },2500)
}