const smallCups =document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained'); 

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click' ,()=>{
        highlightCups(idx) 
    })
} )

function highlightCups(idx) {
    smallCups.forEach((cup,i) =>{
        if(i < idx+1){
            cup.classList.contains('full') && i==idx ? cup.classList.remove('full'): cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.full').length;
    const totalCups = smallCups.length;
    if(fullCups===0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility= 'visible';
        percentage.style.height= `${(fullCups/totalCups)*330}px`
        percentage.innerText= `${fullCups/totalCups *100}%`
    }
    if(fullCups===totalCups) {
        remained.style.visibility='hidden'
        remained.style.height = 0;
    } else {
        remained.style.visibility='visible'
        liters.innerText=`${2-0.25*fullCups}L`
    }
}





//-----------------------interpretation de passage de l'indexx :

//     Lorsque vous ajoutez l'écouteur d'événement "click" à chaque élément de la liste smallCups,
// l'index de la tasse est capturé lors de la définition de la fonction de rappel. 
// Cette valeur de l'index est ensuite utilisée lorsqu'un événement "click" se produit sur l'élément de la tasse correspondant.
// Le stockage de l'index de la tasse en attendant l'événement de clic est une approche courante pour associer des données spécifiques à chaque élément d'une liste,
// afin de pouvoir les utiliser ultérieurement lorsque l'événement se produit. 
// Cela permet de déterminer quel élément a déclenché l'événement et d'effectuer des actions en conséquence, en utilisant les données spécifiques à cet élément.