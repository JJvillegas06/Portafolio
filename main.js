let imagenes = [
                "img/calculadora.png",
                "img/sharkweb.jpg"
                ];

document.imagen.src = imagenes [0];

let sliderDerecha = document.getElementById("slider-right");
let sliderIzquierda = document.getElementById("slider-left");
let contador = 0;

function moverDerecha (){
    contador++;
    if(contador>imagenes.length - 1){
        contador = 0;
    }
    document.imagen.src = imagenes [contador];
}


sliderDerecha.addEventListener('click',moverDerecha);

function moverIzquierda (){
    contador --;
    if(contador < 0){
        contador = imagenes.length -1
    }
    document.imagen.src = imagenes [contador];
}
sliderIzquierda.addEventListener('click', moverIzquierda);