document.getElementById('btn-update-tittle').addEventListener('click', function (){

    const pageTitleElement = document.getElementById('page-title')

    pageTitleElement.innerText = 'Updated title'
  
})


document.getElementById('name-btn').addEventListener(
    'click', function (){
        
        const input = document.getElementById('name-input');

        const nameValue = input.value;
        
        const nameP = document.getElementById('name-p');

        nameP.innerText = nameValue ;
    }
)


