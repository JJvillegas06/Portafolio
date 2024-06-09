let btnLeft = document.querySelector("#slider-left")
let btnRight = document.querySelector("#slider-right")
let slider = document.querySelector("#slider")
let counter = 0;
let img = document.querySelectorAll("#calc")
let widthimg = 100 / img.length
let Mostrar = 0


function moveToLeft (){
    
    counter++;
    img = img[counter]

    if(counter> img.length -1 ){
        counter = 0
    }else{
        slider.style.transform = "translate(-100%)"

    }
    console.log(counter)
    console.log(img)
    
    
}

btnRight.addEventListener('click',moveToLeft,)

function moveToRigth(){
    counter = counter -1;
    img.length = [counter]
    if(counter < img.length - 3){
         counter = 2
    }else{
        slider.style.transform = "translate(+100%)"
    }
    
    console.log(img)
    console.log(counter)
}

btnLeft.addEventListener('click',moveToRigth)

function showScreen (){
    counter = [img]
    console.log(counter)
}