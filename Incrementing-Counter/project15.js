const counters = document.querySelectorAll('.counter') ;

counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText ;
        const increment = target / 200 ;

        if(c < target) {
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter ,1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})

//Voici comment les étapes se dérouleront :

// Le premier élément de counters est sélectionné.

// La fonction updateCounter() est appelée pour cet élément.
// Le texte intérieur de l'élément est mis à jour avec une valeur incrémentée.
// setTimeout() est utilisé pour planifier l'appel récursif de updateCounter() après 1 milliseconde.
// Le deuxième élément de counters est sélectionné.

// La fonction updateCounter() est appelée pour cet élément.
// Le texte intérieur de l'élément est mis à jour avec une valeur incrémentée.
// setTimeout() est utilisé pour planifier l'appel récursif de updateCounter() après 1 milliseconde.
// Le troisième élément de counters est sélectionné.

// La fonction updateCounter() est appelée pour cet élément.
// Le texte intérieur de l'élément est mis à jour avec une valeur incrémentée.
// setTimeout() est utilisé pour planifier l'appel récursif de updateCounter() après 1 milliseconde.
// Ces étapes se répètent pour chaque élément, un par un, en suivant l'ordre des éléments dans counters. 
// Chaque élément continuera à être mis à jour jusqu'à ce que la condition c < target devienne fausse, 
// c'est-à-dire que l'élément atteigne sa valeur cible finale.

// Il est important de noter que les appels récursifs de updateCounter() sont planifiés avec un délai de 1 milliseconde entre chaque itération.
//  Cela signifie qu'il y aura un court délai entre les mises à jour successives des éléments dans le DOM, mais cela se produira de manière séquentielle, un élément après l'autre.