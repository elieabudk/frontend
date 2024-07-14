//Listas

//Declaraíón

let frutas = ["manzanas", "peras", 8, true];
//métodos (más conocidos)

//agregar elementos al final de un areglo

frutas.push("naranjas");

console.log(frutas);

//eliminar el último elemento de una lista

let frutaEliminada = frutas.pop();
console.log(frutas, frutaEliminada);

//eliminar el primer elemento

frutas.shift();
console.log(frutas);

//agregar un elemnto al inicio

frutas.unshift("papayas");
console.log(frutas);

//cambiar el contenido de un array eliminado agregado nuevos elementos
console.log("######################")
//qué posición y cuántos elementos

let frutas2 = ["hola", [1, 2], "tercero", 4, 5, 5, 6, 7]
frutas.splice(1,2);
console.log(frutas);

frutas2.splice(1, 4);
console.log(frutas2);

//agregar elementos en una posicion

frutas.splice(1, 0, "quiwi", "frutos secos");
console.log(frutas);

//ejecutar una función dentro de una lista

let compras = ["harina", "pan", "cafe"];

compras.forEach((producto, indice) => {
    console.log(producto, indice)
})

//crear un nuevo array con los resultados de una función interna

let numeros = [1,2,3,4,5,6,7,8];

let numeroPar = numeros.map(numeroPar => numeroPar * 2);

console.log(numeroPar);

// Inicio del programa

//Declaramos una lista de ejemplo
// script.js

// Inicializamos una lista con algunos elementos
let lista = [];

// Función para mostrar la lista en el HTML
function mostrarLista() {
    const listaUl = document.getElementById("lista");
    listaUl.innerHTML = ""; // Limpiamos el contenido anterior

    lista.forEach((elemento, index) => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaUl.appendChild(li);
    });
}

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const nuevoElementoInput = document.getElementById("nuevoElemento");
    const nuevoElemento = nuevoElementoInput.value.trim();

    if (nuevoElemento) {
        lista.push(nuevoElemento);
        nuevoElementoInput.value = ""; // Limpiamos el input
        mostrarLista(); // Actualizamos la lista en el HTML
    }
}

// Mostramos la lista inicial al cargar la página
mostrarLista();

function agregarelemento2(){
    const elemento2 = document.getElementById("ruc");
    const nuevoelemento2 = elemento2.value.trim();
    lista.unshift(nuevoelemento2)
    mostrarLista();
    


}