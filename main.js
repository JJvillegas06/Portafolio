let btnLeft = document.querySelector("#slider-left")
let btnRight = document.querySelector("#slider-right")
let slider = document.querySelector("#slider")
let counter = 0;
let img = document.querySelectorAll("#calc")
let widthimg = 100 / img.length

console.log(img)

function moveToLeft (){
    counter = counter + 1
    img.length = [counter]
    if(counter> img.length -1 ){
        counter = 0
    }
    slider.style.transform = "translate(-33.33%)"
    console.log(img)
    console.log(counter)
}

btnRight.addEventListener('click',moveToLeft)

function moveToRigth(){
    counter = counter -1;
    img.length = [counter]
    if(counter < img.length - 3){
         counter = 2
    }
    slider.style.transform = "translate(+33.33%)"
    console.log(img)
    console.log(counter)
}

btnLeft.addEventListener('click',moveToRigth)

function showScreen (){

}