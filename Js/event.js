function makeDark(){
    document.body.style.backgroundColor = 'yellow';
}


const makeBlue = document.getElementById('btn-make-blue');

makeBlue.onclick = btnMakeBlue;


function btnMakeBlue(){
    document.body.style.backgroundColor = 'blue'
}


document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'
})


