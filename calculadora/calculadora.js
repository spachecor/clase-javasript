let boton = document.getElementById('boton');
let resultado = document.getElementById('resultado');

boton.addEventListener("click", function(event){
    let sumando1 = Number(document.getElementById('sumando1').value);
    let sumando2 = Number(document.getElementById('sumando2').value);
    let suma = (sumando1+sumando2);
    resultado.textContent = 'El resultado es: '+suma;
});