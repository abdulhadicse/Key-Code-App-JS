const keyy= document.querySelector('#keyy');
const keyyCode= document.querySelector('#keyycode');
const over= document.querySelector('.overlay');
const overKey= document.querySelector('.overlayKey');

window.addEventListener( 'keydown', (e) => {
    keyy.innerText = e.key;
    keyyCode.innerText = e.keyCode;
    if(e.keyCode === 32){
        keyy.innerText = 'space';
    }
    over.style.display= 'none';
    overKey.style.display= 'flex';
})
