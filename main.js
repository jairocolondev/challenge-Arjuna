/* EJERCICIO #1 -- 
Programa una función que realice la suma de 3 parámetros, los valores serán pasados por argumentos.  ***BUENA*** */

function sumar(num1, num2, num3) {
  let  resultado = num1 + num2 + num3;
      console.log(resultado)
}
sumar(20, 50, 100);




/* EJERCICIO #2 -- 
Pide al usuario la edad y si es mayor de 18 años indica que ya puede entrar a la discoteca, si tiene menos de 18, entonces es menor de edad y no puede ingresar ***MALA*** */

// Tu código aquí 👇​ 

let edad = prompt("Cual es tu edad")

if( edad < 18 ){
  console.log("Eres de edad, no puedes ingresar");
} else if( edad > 18){
  console.log("Ya puedes ingresar");
};






/* EJERCICIO #3 -- 
Programa una función que cuente el número de caracteres de una cadena de texto que envías por parámetro, sino no envías nada debe salir un mensaje de error (Debes ingresar una palabra o frase)
 Ejemplo: si miFunción("Hola Mundo"), entonces devolverá 10 caracteres  ***MALA***  */

function contarCaracteres(miFunción) {
   console.log(miFunción.length)
}; 
contarCaracteres("Hola mundo");





/* EJERCICIO #4 --
Tienes un Array de animales, debes agregar un elemento 'TIBURON' al final del Array, un elemento 'MARIPOSA' al inicio del Array, elimina el último elemento, elimina el primer elemento. Ir mostrando el resultado a medida que ejecutas una acción. ***BUENA*** */

const animales = ['GATO', 'GALLINA', 'PERRO', 'ELEFANTE', 'CONEJO']

let agregarFinal = animales.push("TIBURON");
let agregarInicio = animales.unshift("MARIPOSA");
let eliminarFinal = animales.pop();
let eliminarInicio = animales.shift();
console.log(animales);



/* EJERCICIO #5 -- 
Combina dos arrays de números en uno solo
En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.
Pista: en este ejercicio puedes Googlear, que te puede servir para tener dos Arrays en uno ***BUENA*** */

function solucion(arrayA, arrayB) {
 let fusionarArrays = arrayA.concat(arrayB);
 console.log(fusionarArrays)
}; 
solucion([1,50,40,50],[49,70,98,40]);





/* EJERCICIO #6 -- 
Crea un objeto Persona, y agrégale las siguientes propiedades: (nombre --> Giovani), (apellido --> Bautista), (edad --> 40), (ubicacion --> Funza), (un Array de hobbies --> manejar moto, cocinar, bailar) (un objeto de amigos --> Arjuna, Jairo, Sebastián) 
mostrar una por una de las propiedades en una lista ***MALA*** */

// Tu código aquí 👇​

let persona = {
    nombre: "Giovani",
    apellido: "Bautista",
    edad: 40,
    ubicacion: "funza",
    hobbies: ["manejar moto", "cocinar", "bailar"],
    amigos: {
        amigo1: "Arjuna",
        amigo2: "Jairo",
        amigo3: "Sebastian"
    }, 
  };

  console.log(persona.nombre)
  console.log(persona.apellido)
  console.log(persona.edad)
    