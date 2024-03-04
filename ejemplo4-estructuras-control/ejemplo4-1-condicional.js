//CONDICIONAL SIMPLE - IF/ELSE IF/ELSE
let edadAlumno1 = 18;
let edadAlumno2 = 24;
let edadAlumno3 = 16;
let edadAlumno4 = 11;
let edadAlumno5 = 31;
let edadAlumno6 = 45;
let edadAlumno7 = 25;

//Los alumnos menores de 18 no salen en el recreo, los mayores o igual a 18, sí
if(edadAlumno3>=18){
    console.log("el alumno sale");
}else{
    console.log("el alumno no sale");
}

//Los alumnos menores de 18 tienen una beca de 300 euros, los mayores o igual a 18 y menores a 25 tienen una beca de 600 y los mayores de
//25 tienen una beca de 500 euros. Por último, si tienen 25 años, tiene una beca de 1000 euros
if(edadAlumno1<18){
    console.log("tiene una beca de 300 euros");
}else if(edadAlumno1>=18 && edadAlumno1<25){
    console.log("tiene una beca de 600 euros");
}else if(edadAlumno1==25){
    console.log("tiene una beca de 1000 euros");
}else{
    console.log("tiene una beca de 500 euros");
}

//CONDICIONALES COMPLEJOS - SWITCH/CASE

let tipoFruta="Manzana";

switch(tipoFruta){
    case "Naranja":
        console.log("tengo una naranja");
        break;//SUPER OBLIGATORIO
    case "Manzana":
        console.log("Tengo una manzana");
        break;
    case "Plátano":
        console.log("Tengo un platano");
        break;
    default:
        console.log("No sé que tengo");
        break;
}


