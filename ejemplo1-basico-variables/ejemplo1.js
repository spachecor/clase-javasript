//VARIABLES I - BÁSICO
var ejemploVar;//DESACONSEJADO
let ejemploLet;//CUANDO USEMOS DATOS QUE PUEDAN VARIAR
const ejemploConst = true;//CUANDO USEMOS DATOS QUE NO VAYAMOS A VOLVER A ASIGNAR

let cadena = "selene";//usando cadena
let entero = 5;//usando entero
let booleano = true;//usando boolean
const year = 2023;//constantes

//VARIABLES II - TYPEOF
//typeof nos dice que tipo de dato es
let adress = "Avenida sol naciente, 25";
console.log(typeof adress);//dirá que es un String
console.log(typeof year);//dirá number
console.log(typeof booleano);//boolean
console.log(typeof ejemploLet);//undefined
console.log(ejemploLet);//undefined
console.log(ejemploVar);//undefined
let example = null;
console.log(example);//nos dira null
console.log(typeof example);//tipo object

//SALIDA POR CONSOLA
console.log("Hola mundo");
console.log("Nombre = "+cadena);
/*
year = 2024; //DA FALLO PORQUE AL SER CONSTANTE NO PUEDES CAMBIAR SU VALOR DESPUÉS DE ASIGNARLO
*/
console.log(year);

//VARIABLES III - CASTING

//EJEMPLO 1- Casting de string a boolean
//En este tipo de casting, si la cadena a introducir está vacía, el boolean nos dará false. Si la cadena contiene algo, el boolean nos dará true
let ejemploCasting = "Avenida sol naciente, 25";
let booleanCasting1 = Boolean(ejemploCasting);
console.log(booleanCasting1);//true
ejemploCasting = "";
booleanCasting1 = Boolean(ejemploCasting);
console.log(booleanCasting1);//false

//EJEMPLO 2- Casting de string a number
//En este tipo de casting, si la cadena contiene caracteres diferentes a que todo sean números, nos dirá NaN, mientras que si la cadena está vacía, nos
//dirá que 0, porque está vacía.
ejemploCasting = "Avenida sol naciente, 25";
let numberCasting2 = Number(ejemploCasting);
console.log(numberCasting2);//NaN, not a number!!!!
ejemploCasting = "";
numberCasting2 = Number(ejemploCasting);
console.log(numberCasting2);//0
ejemploCasting = "123";
numberCasting2 = Number(ejemploCasting);//123
console.log(numberCasting2);

//EJEMPLO 3. Casting de number a boolean
//En este tipo de casting, dará true sí y solo sí number != 0
ejemploCasting = 123;
let booleanCasting3 = Boolean(ejemploCasting);
console.log(booleanCasting3);//true
ejemploCasting = -56;
booleanCasting3 = Boolean(ejemploCasting);
console.log(booleanCasting3);//true
ejemploCasting = 0;
booleanCasting3 = Boolean(ejemploCasting);
console.log(booleanCasting3);//false