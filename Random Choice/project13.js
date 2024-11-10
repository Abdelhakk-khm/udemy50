const tagsEl =document.getElementById('tags');
const textarea =document.getElementById('textarea');


// textarea.focus();
textarea.addEventListener('keyup' ,(e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(()=> {
            e.target.value = ''
        },10)
        randomSelect()
    }
})

//create tags
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '')
                                 .map(tag =>tag.trim());
    tagsEl.innerHTML='';
    tags.forEach( tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText =  tag;
        tagsEl.appendChild(tagEl);
    });
}

//random select 
function randomSelect() {
    const times = 10 ;

    const interval = setInterval(() =>{
        const randomTag = pickRandomTag();

        highlight(randomTag);

        setTimeout(()=> {
            unhighlight(randomTag);
        },900)
    },1000)

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag =pickRandomTag();
            highlight(randomTag);
        },2000)
    },times*1000)
}
//-------------------------------------------------------------------
    // function randomSelect() {
    //     const times = 30 ;
    //     let randomTag = pickRandomTag();
    //     const interval = setInterval(() =>{
    //         unhighlight(randomTag);
    //          randomTag = pickRandomTag();
    //         highlight(randomTag);
    //     },100)
    // }
//---------------------------------------------------------------------
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlight(tag) {
    tag.classList.add('highlight');
}
function unhighlight(tag) {
    tag.classList.remove('highlight');
}


//interpretation :chatgpt

// C'est exact. Si le temps défini dans setTimeout() pour supprimer la mise en évidence (unhighlight()) est plus grand que l'intervalle de 1000 millisecondes défini dans setInterval(),
//  alors il est possible que plusieurs éléments aléatoires soient mis en évidence en même temps.

// Dans le code que vous avez fourni, chaque itération de la fonction de rappel de setInterval() met en évidence un élément aléatoire en appelant highlight(randomTag). 
// Ensuite, après 1000 millisecondes (1 seconde), setTimeout() est utilisé pour appeler unhighlight(randomTag) et supprimer la mise en évidence.

// Si le temps défini dans setTimeout() est supérieur à 1000 millisecondes, 
// cela signifie que plusieurs itérations de la fonction de rappel de setInterval() peuvent s'exécuter avant que unhighlight(randomTag) ne soit appelé pour supprimer la mise en évidence.

// Cela peut entraîner un chevauchement de plusieurs mises en évidence,

// ce qui signifie que plusieurs éléments aléatoires seront mis en évidence en même temps pendant une certaine période avant que la suppression de la mise en évidence ne se produise.

// Il est important de noter que si vous souhaitez éviter cela et garantir qu'un seul élément aléatoire soit mis en évidence à la fois,

// vous devez vous assurer que le temps défini dans setTimeout() est égal ou inférieur à l'intervalle de setInterval(), c'est-à-dire 1000 millisecondes dans ce cas.