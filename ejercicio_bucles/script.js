for (let i = 0; i <= 5; i++) {
    console.log("Número:", i);
  }



let i = 5;
while (i < 5) {
  console.log("Número:", i);
  i++;
}


let j = 5;
do {
  console.log("Número:", j);
  j++;
} while (j < 5);

console.log("#############################")

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
console.log(typeof persona)

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

let personas = "hola mundo"
for (let propiedad in personas) {
    //console.log(propiedad);
  }
//No funciona como lo usábamos en python
let personas1 =(1,2,3,4);
for (let propiedad in personas1) {
      console.log(propiedad);
    }
//Se interpreta como una lista
let numeros = [10, 20, 30];

for (let numero of numeros) {
      console.log(numero);
    }



//Contador de letras con bucle for...of
function contadorLetras(a){
  let sumador = 0;
  for (let iterador of a){
      sumador++;
  }
  return sumador;
}

console.log(contadorLetras("holaMundo"))
//Recibir los datos desde el DOM
//Para evitar que un codigo se ejecute solo
//lo controlamos con funciones


function Obtener(){
    //parsear una variable
    const numero1 = parseFloat(document.getElementById('numero1').value);
    console.log(typeof numero1)
    const num2 = 4
    let resultado
    resultado = numero1 + num2
    document.getElementById('respuesta').innerText = "el numero es "+ resultado
}
