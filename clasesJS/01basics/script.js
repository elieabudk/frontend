let entero = 42;
let decimal = 3.14;
let texto = "Hola";
let verdad = true;
let indefinido;
let nulo = null;
let simbolo = Symbol('desc');
let bigint = BigInt(9007199254740991);

console.log(typeof entero);     // "number"


var tester = "hey, hola"; //Declaración de forma global
    
function nuevaFuncion() {
    var hola = "hola mundo";
    console.log(hola); // error: hola is not defined
    console.log(tester) //sí funciona porque tester es global
}

//Llamada a una variable declara dos veces
var saludar = "hey, hola";
console.log(saludar)
var saludar = "dice Hola tambien";
console.log("######")
//Hoising de var
//Forma en que nosotros escribimos
console.log (saludar2);
var saludar2 = "dice hola como estas"

//Como js lo entiende
var saludar3;
console.log (saludar2);
var saludar2 = "dice hola como estas"
//problema con var
var saludar5 = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
    var saludar5 = "dice Hola tambien #####"; 
}

console.log(saludar5) // "dice Hola tambien"


let numero = 5;
let contador = "4";

if (contador == 4){
    numero = 7;
    console.log("resultado: " + numero);
}

console.log(numero);

let num1 = 4;
num1++;
num1++;
num1++;
num1++;
console.log(num1)


const edad = 17;
const poseeCoche = true;

if (edad >= 16 && poseeCoche) {
    console.log("Jerry es lo suficiente mayor para conducir y tiene su propio coche.");
  } else {
    console.log("Jerry no conduce.");
  }

console.log("####### bucles")

for (let i = 0; i < 11 ; i++) {

    if(i % 2 === 0) {
        console.log(i)  
    }
  }

  for (let i = 0; i < 11 ; i+=2) {
    console.log("Numero: "+ i);
  }


let i = 0; //Declaración

while (i < 11) { //pregunta
  console.log("Número*:", i); //Código a ejecutar
  i+=2; //El incremento IMPORTANTE!
}

//Do while
let j = 8;

do {
  console.log("Número#:", j);
  j++;
} while (j < 5);

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

