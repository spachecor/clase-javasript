//FUNCIÓN SIN PARÁMETROS NI ARGUMENTOS
imprimirPorConsola();
//1º DECLARO LA FUNCIÓN
function imprimirPorConsola(){
    console.log("Hola mundo");
}

//FUNCIÓN CON PARÁMETROS Y ARGUMENTOS
//ejemplo nombre y apellidos
const nombre = "María";
const apellido1 = "Palma";
const apellido2 = "Jiménez";

imprimirNombreApellidos(nombre, apellido1, apellido2);//IMPORTANTE LLAMAR A LA FUNCIÓN PA QUE SE EJECUTE, SI NO NO VA A EJECUTARSE

function imprimirNombreApellidos(nombre, apellido1, apellido2){
    console.log(nombre+" "+apellido1+" "+apellido2);
}

//ejemplo manzanas
let colorEnvio1 = "rojo";
let marcaEnvio1 = "PinkLady";

imprimirManzana(colorEnvio1, marcaEnvio1);//LLAMAMOS A LA FUNCIÓN

function imprimirManzana(colorManzana, tipoManaza){
    console.log("Tipo: "+tipoManaza+" color: "+colorManzana);
}