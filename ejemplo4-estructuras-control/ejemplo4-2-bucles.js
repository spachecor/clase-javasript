//BUCLE WHILE - MIENTRAS SE CUMPLA LA CONDICIÓN, ENTRA EN EL BUCLE Y SE SIGUE REPIDIENDO

//SUPONGAMOS QUE SE AUMENTA CONSTANTEMENTE EL KILOMETRAJE DE UN VEHÍCULO HASTA LOS 10 KM. CUANDO LLEGA A 10, SE DETIENE EL MOTOR
let contadorKilometros = 0;//con el contador a 0, iniciamos el programa

while(contadorKilometros<=10){//se evalúa la condición antes de entrar en el bucle, si la cumple, entra, si no no entra(si fuese 11, no entraría)
    console.log(contadorKilometros);//imprimimos el valor en cada vuelta
    contadorKilometros++;//aumentamos su valor de uno en uno en cada vuelta y luego se vuelve a evaluar la condición cuando termine
}
console.log(contadorKilometros);//imprimimos el valor con el que sale el contador del bucle

contadorKilometros = 0;//volvemos a poner el cuentakilometros a 0
//repetimos, solo que antes poníamos que tuviese que ser <=10, con lo cual el cuentakilometros terminaba en 11, y ahora ponermos que sea <10, por lo que el
//cuentakilometros termina en 10
while(contadorKilometros<10){
    console.log(contadorKilometros);
    contadorKilometros++;
}
console.log(contadorKilometros);

//bucle do while, entra al menos una vez, realiza el código entre las llaves del do y después revisa la condición junto al while. Si se cumple, se vuelve
//a ejecutar el código del do, si no se cumple, se sale inmediatamente del bucle
do{
    console.log("entré");
}while(contadorKilometros==100);

//BUCLE FOR
//quiero comer 5 frutas al día, empiezo con 0, y cada vez que damos una vuelta al bucle como una más. Cuando llegue a 5, paro
for(let fruta = 0; fruta <=5; fruta++){
    console.log("Llevo un total de: "+fruta);
}