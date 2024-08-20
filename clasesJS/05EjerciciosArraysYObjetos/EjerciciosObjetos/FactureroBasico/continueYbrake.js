
for (let i = 0; i<10 ; i++ ){//3
    if (i % 2 == 0){
        console.log(i);
        //continue; //(OBLIGATORIO)ya logre hacer lo que quise pero quiero seguir haciendo con más números
        break //cuando ya logré hacer lo que quise
        console.log("hola que tal")
    }
}

/*
Frutas

Crear un programa que pida ingresar 🍎, 🍐y 🍑 y 
devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:*/


const frutas= ["manzana", "pera", "uva", "pera"]

let manzana = 0
let pera = 0
let uva = 0

for (let i of frutas){
    if (i == "manzana"){
        manzana++
    }
    else if (i == "pera"){
        pera++
    }
    else if (i == "uva"){
        uva++
    }
    
}

console.log(manzana, pera, uva)


/*
Comida para monos

Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). 
Preguntar luego cuántas bananas come cada mono. 
Mostrar en un mensaje si hay suficientes bananas para cada mono.*/

const banana_mono=["mono","banana", "mono","banana", "mono","banana", "mono","banana","banana"]

let contador_mono = 0
let contador_banana = 0

for (let i of banana_mono) {
    if (i == "mono") {
        contador_mono++
    } else if (i == "banana") {
        contador_banana++
    }
}
/*
// Solicitar cuántas bananas come cada mono
const bananasPorMono = parseInt(prompt("¿Cuántas bananas come cada mono?"), 10);

// Calcular el total de bananas necesarias
const totalBananasNecesarias = contador_mono * bananasPorMono;

// Comparar con la cantidad de bananas disponibles
if (contador_banana >= totalBananasNecesarias) {
    console.log("Hay suficientes bananas");
} else {
    console.log("No hay suficiente comida");
}


/*
Dado un array de números, crear una función vAbsoluto que reciba 
un array y que devuelve un array con los valores absolutos de los números del array 
que se pasa como parámetro

Pista: usar Math.abs*/

let numeros =[1,5,-5,-4,2,6,-5]
let valores =[]
function valoresabs(){
    for (let i of numeros){
        valores.push(Math.abs(i))
    }
    console.log(valores)
    
}

valoresabs()


