let boton = document.getElementById('boton');

boton.addEventListener("click", function(event){
    //stopPropagation para evitar que se registren clicks en varias funciones a la vez
    event.stopPropagation();
    alert("Me pulsaste");
});

document.addEventListener("click", function(event){
    console.log("Se ha registrado un click izq");
});

document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert("No puedes hacer click derecho");
});