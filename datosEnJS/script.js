
//Tipos de datos primitivos
let a = 4;
let b = "palabra"
console.log(typeof b)

// Arrays (listas)  //OBJETOS
let lista = [1, "palabra", 4]
console.log(typeof lista)
console.log(lista)

//Diccionarios (clave - valor)

let diccionario = {
    nombre: "alejandro",
    edad: 25,
    genero: "m"
}

console.log(diccionario)

// Conjuntos o sets (No pueden haber valores duplicados)

let conjunto = new Set([1,2,3,4,5,6,7])


//Mapas (El elemento clave puede ser cualquier tipo de dato)

let mapa = new Map();

mapa.set(4,8);

console.log(mapa);

console.log(typeof mapa);
