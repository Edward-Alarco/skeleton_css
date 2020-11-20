// BOTONES
const buttonAll = document.getElementById('all')
const buttonFlex = document.getElementById('flex')
const buttonGrid = document.getElementById('grid')

var flexImgs = document.getElementsByClassName('flex')
var gridImgs = document.getElementsByClassName('grid')

buttonAll.addEventListener('click',function(){
    for (let i = 0; i < flexImgs.length; i++) {
        flexImgs[i].style.display = 'block'
    }
    for (let i = 0; i < gridImgs.length; i++) {
        gridImgs[i].style.display = 'block'
    }  
})

buttonFlex.addEventListener('click',function(){
    for (let i = 0; i < flexImgs.length; i++) {
        flexImgs[i].style.display = 'block'
    }
    for (let i = 0; i < gridImgs.length; i++) {
        gridImgs[i].style.display = 'none'
    }
})

buttonGrid.addEventListener('click',function(){
    for (let i = 0; i < gridImgs.length; i++) {
        gridImgs[i].style.display = 'block'
    }
    for (let i = 0; i < flexImgs.length; i++) {
        flexImgs[i].style.display = 'none'
    }
})