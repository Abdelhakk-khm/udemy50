const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');


toggles.forEach((toggle) => {
    toggle.addEventListener('change',(e) =>  {
        const clicked =e.target 
        if(good.checked && fast.checked && cheap.checked) {
            if(good === clicked) {
                fast.checked= false
            }

            if(cheap === clicked) {
                good.checked= false
            }

            if(fast === clicked) {
                cheap.checked= false
            }
        }
    })
})
