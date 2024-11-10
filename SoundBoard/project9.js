let sounds =['alan', 'avicci','imagine','marshmello','mytype'];

sounds.forEach( sound => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click',function() {
        sounds.forEach(sound => {
            const song = document.getElementById(sound);
            song.pause();
            song.currentTime = 0;
        })
        document.getElementById(sound).play();
})

    document.getElementById('buttons').appendChild(btn);
})