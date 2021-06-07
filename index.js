let boom = document.querySelector('#boom');
let tink = document.querySelector('#tink');
let hihat = document.querySelector('#hihat');
let kick = document.querySelector('#kick');
let openhat = document.querySelector('#openhat');
let ride = document.querySelector('#ride');
let snare = document.querySelector('#snare');
let tom = document.querySelector('#tom');

let D = document.querySelector('.D');
let F = document.querySelector('.F');
let G = document.querySelector('.G');
let T = document.querySelector('.T');
let Y = document.querySelector('.Y');
let U = document.querySelector('.U');
let J = document.querySelector('.J');
let K = document.querySelector('.K');

let drumBlock = document.querySelectorAll('drumBlock');

window.addEventListener('keydown', function (e) {
    let target = e.key;
    switch (target) {
        case 'd':
            D.classList.add('highlight')
            playAudio(tom);
            break;
        case 'f':
            F.classList.add('highlight')
            playAudio(snare);
            break;
        case 'g':
            G.classList.add('highlight')
            playAudio(kick);
            break;
        case 't':
            T.classList.add('highlight')
            playAudio(tink);
            break;
        case 'y':
            Y.classList.add('highlight')
            playAudio(ride);
            break;
        case 'u':
            U.classList.add('highlight')
            playAudio(openhat);
            break;
        case 'j':
            J.classList.add('highlight')
            playAudio(hihat);
            break;
        case 'k':
            K.classList.add('highlight')
            playAudio(boom);
            break;
    }
});

window.addEventListener('keyup', function (e) {
    let target = e.key;
    switch (target) {
        case 'd':
            D.classList.remove('highlight');
            break;
        case 'f':
            F.classList.remove('highlight');
            break;
        case 'g':
            G.classList.remove('highlight');
            break;
        case 't':
            T.classList.remove('highlight');
            break;
        case 'y':
            Y.classList.remove('highlight');
            break;
        case 'u':
            U.classList.remove('highlight');
            break;
        case 'j':
            J.classList.remove('highlight');
            break;
        case 'k':
            K.classList.remove('highlight');
            break;
    }
});

function playAudio(soundSource) {
    soundSource.play();
    soundSource.currentTime = 0;
}