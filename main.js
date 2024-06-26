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
    /*slider.style.transform = `translate(-${translate}%)` 

    translate = translate * 2
    if(translate > 400){
        translate = 100
    }
    if(counter >2){
        slider.style.transform = `translate(+200%)`
    }
    

    
    console.log(translate)
    console.log(counter)
    console.log(slider)*/
    
}

btnRight.addEventListener('click',moveToLeft,)

function moveToRigth(){
    counter--;
    if(counter < 0 ){
        counter = 2
    }
    mostrar = img[counter]  

    slider.innerHTML = mostrar.innerHTML
    

    /*
    if(slider = img[2]){
        slider.style.transform = "translate(-100%)" 
    }
    if(slider = img[1]){
        slider.style.transform = "translate(-100%)" 
    }
    
    
    if(translate2 > 400){
        translate2 = 100
    }*/
    console.log(mostrar)
    console.log(counter)
    console.log(slider)
}

btnLeft.addEventListener('click',moveToRigth)

function showProject (){
    location.href = img[counter]
}

slider.addEventListener('click', showProject)



/*counter++;
    img = img[counter]

    if(counter> img.length -1 ){
        counter = 0
    }else{
        slider.style.transform = "translate(-100%)"

    }
    console.log(counter)
    console.log(img)*/


    /*counter = counter -1;
    img.length = [counter]
    if(counter < img.length - 3){
         counter = 2
    }else{
        slider.style.transform = "translate(+100%)"
    }
    
    console.log(img)
    console.log(counter)*/