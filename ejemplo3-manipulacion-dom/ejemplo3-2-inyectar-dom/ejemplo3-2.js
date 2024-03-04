//1º tomados el elemento(el contenedor) por el id
const contenedor = document.getElementById('contenedor');

//2º creamos el nuevo elemento que irá dentro del contenedor
//creamos el elemento con createElement('tipo de etiqueta que queremos introducir')
const p = document.createElement('p');
//introducimos el texto que va a tener nuestro parrafo
p.textContent = 'Hola mundo';
//podemos añadir todas las propiedades necesarias a nuestra etiqueta html desde el javascript
p.className = 'parrafo';

//3º Adjuntamos nuestro parrafo al DOM
contenedor.appendChild(p);


