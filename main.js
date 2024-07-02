let btnLeft = document.querySelector("#slider-left")
let btnRight = document.querySelector("#slider-right")
let slider = document.querySelector("#slider")
let counter = 0;
let img = document.querySelectorAll("#calc")
let widthimg = 100 / img.length
let mostrar 
let translate = 100
let translate2 = 100
let imagenes = document.querySelectorAll(".slider-imagenes")
let link



console.log(img)
console.log(slider)
function moveToLeft (){
    counter++;
    

    if(counter > img.length -1 ){
        counter = 0
    }
    
    slider.innerHTML = img[counter].innerHTML
    console.log(counter)
    console.log(slider)
    console.log(mostrar)
    console.log(img)
   
}

btnRight.addEventListener('click',moveToLeft,)

function moveToRigth(){
    counter--;
    if(counter < 0 ){
        counter = 2
    }
    mostrar = img[counter]  
    
    slider.innerHTML = mostrar.innerHTML
    console.log(mostrar)
    console.log(counter)
    console.log(slider)
}

btnLeft.addEventListener('click',moveToRigth)

function showProject (){
    location.href = img[counter]
    
}

slider.addEventListener('click', showProject)
