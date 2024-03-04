//VALORES POR DEFECTO EN LOS PARÁMETROS DE ENTRADA
let nombre = "Cristina";

imprimirFechaGraduacion(nombre);

function imprimirFechaGraduacion(nombreAlumno, anioGraduacion=2024){
    console.log(nombreAlumno+" "+anioGraduacion);
}

//FUNCIONES CON CALLBACK

let datosGraduacionAlumnos = getGraduationYear("María Palma", 2025, formateadorUno);
console.log(datosGraduacionAlumnos);

function formateadorUno(name, year){
    let graduacion = name+" - "+year;
    return graduacion;
}

function formateadorDos(name, year){
    let graduacion = name+" / "+year;
    return graduacion;
}

function getGraduationYear(name, year, formatter){
    let datosGraduacion = formatter(name, year);
    return datosGraduacion;
}

//FUNCIONES DENTRO DE VARIABLES
//la funcion guardada dentro de una variable DEBE ir arriba de su uso porque cuando el programa compila guarda en memoria las funciones, pero no las variables
//así que, esta variable no existe si la llamamos antes de inicializarla
let graduacion = function (name="Jonh Doe", year){//FUNCION ANONIMA, no tiene nombre, está dentro de la variable y para usarla llamamos a la variable
    let graduacionAlumno = name+" "+year;
    return graduacionAlumno;
}
console.log(graduacion("Romualdo", 1998));//cuando le metemos argumentos, nos imprime correctamente
console.log(graduacion);//IMPORTANTE ponerle los paréntesis, si no, nos imprime el código
console.log(graduacion());//imprime lo que debe, sin argumentos nos dirá o undefined o si tenemos valores por defecto, los usará

//FUNCION AUTOINVOCADA - con parámetros y con argumentos. Va dentro de paréntesis y FINALIZA CON ;. Es anónima
(function(name, year){//tenemos los parámetros no preinicializados(no tienen valores por defecto)
    console.log(name+" . "+year);//devolvemos por consola el alumno y su año de graduación
})("María Palma", 2025);//argumentos, opcionales, si no los lleva, se ponen los paréntesis vacíos

//funcion autoinvocada que no tiene ni parámetros ni argumentos
(function(){
    console.log("Hola mundo");
})();