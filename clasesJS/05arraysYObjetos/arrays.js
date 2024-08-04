//Creación de un array de forma directa (lleno)
const carros = [];
const cars = ["Saab", "Volvo", "BMW"]; //Unidad de almacenamiento
console.log(carros);
//Llenar elemento de un array
console.log(cars[0]);
//Reescribiendo un elemento
cars[0]= "Aveo";
console.log(cars[0]);
console.log(cars);
//Atención
carros[0] = "Aveo";
carros[1] = "Renault";
carros[2] = "Kia";
carros[10] = "Nissan"; //Importante
console.log(carros);

const person = {firstName:"John", lastName:"Doe", age:46};
person.lastName

/*
Crear un programa que pida ingresar números separados por espacios y 
devuelva un mensaje con el menor número ingresado. Ejemplo:*/


let numeros= "5 3 7 8 9 4"

lista_numeros = numeros.split(" ")


var menor = 100000
for (let numero of lista_numeros){
    
    if (numero < menor){
        menor = numero
        
       
    }
    
}
console.log(menor)



console.log("---------------------")

/*
Suma de todos los números

Crear un programa que pida ingresar números separados 
por espacios y devuelva 
un mensaje con la suma de todos los números. Ejemplo:*/



let numeros1= "5 3 7 8 9 4"

lista_numeros1 = numeros.split(" ")


var numero2 =0
for (let numero of lista_numeros){
    
    numero2 =parseFloat(numero2) + parseFloat(numero)
    

    }
console.log(numero2)


console.log("---------------------")


/*
Contiene elementos

Crear un programa que permite ingresar valores separados por espacios, y
luego preguntar qué valor se desea averiguar si existe. El programa
debe devolver un mensaje diciendo si dicho valor se 
encuentra dentro de los valores originales o no. Ejemplo:*/

let numeros2= "5 3 7 8 9 4"

lista_numeros2 = numeros2.split(" ")
let valor = 10

let bandera = false

for (let numero of lista_numeros2){
    
    if(valor == numero){
        
        console.log("si se encuentra el valor:" , valor)
        bandera = true 
    }
   
}  

if (bandera == false){
    console.log("no se encuentra el dato")
    
}
    
console.log("---------------------")
/*
Encontrar índice

Crear un programa que permite ingresar valores separados por espacios,
 y luego preguntar qué valor se desea encontrar el índice. El programa 
 debe devolver un mensaje con el índice del primer elemento que sea igual
  al buscado,
 o indicar si no se ha encontrado. Ejemplo:*/

 let numeros3= "5 3 7 8 9 4"

lista_numeros3 = numeros3.split(" ")
let valor3 = 9

for (let numero3 of lista_numeros3){
    if(numero3==valor3){
        console.log("El índice del primer elemento que es igual al valor buscado es: " + lista_numeros3.indexOf(numero3))
    }
}



console.log("---------------------")

/*
Sam y Frodo

Crear un programa que permita saber si Sam y Frodo están juntos.
 El programa debe permitir ingresar nombres separados por espacios, 
 y mostrar con un mensaje si Sam se encuentra al lado de Frodo,
 ya sea antes o después. Ejemplo:*/


let nombres= "Felipe Frodo Sam Legolas "

lista_nombre=nombres.split(" ")

let samIndex = lista_nombre.indexOf("Sam");
let frodoIndex = lista_nombre.indexOf("Frodo");

if (Math.abs(samIndex - frodoIndex) === 1) {
    console.log("Sam y Frodo están juntos.");
} else {
    console.log("Sam y Frodo no están juntos.");
}



console.log("---------------------")


/*
Frutas

Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un 
mensaje con la cantidad que hay de cada una. Ejemplo:*/

let frutas =["manzana","pera","manzana","mango","pera","manzana"]

let contador_manzana = 0
let contador_pera =0
let contador_mango =0
for (let fruta of frutas){
    
    if(fruta == "manzana"){
        contador_manzana++
    }
    else if(fruta == "pera"){
        contador_pera++
    }
    else if(fruta =="mango")
        contador_mango++

}
console.log(contador_manzana, contador_pera, contador_mango)
 