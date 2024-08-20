/*

Ejercicio 4
Simulación de un Proceso de Compra Descripción: Simula un proceso de compra en una tienda online.

 Utilizarás objetos para representar productos, arrays para manejar el carrito de compras,
  y promesas para simular el proceso de compra. Incluye manejo de errores si el proceso falla.

Instrucciones:

Crea un array cart que contenga varios productos (objetos con nombre, precio, cantidad).
 Crea una función processOrder que simule el proceso de compra y devuelva una promesa.
  Usa async/await para esperar la finalización del proceso de compra y luego calcular 
  
el total a pagar. 
Maneja errores utilizando try...catch.*/

const cart = [{
    nombre: "Producto 1",
    precio: 10,
    cantidad: 2
}, {
    nombre: "Producto 2",
    precio: 20,
    cantidad: 1
}, {
    nombre: "Producto 3",
    precio: 5,
    cantidad: 3
}]


async function processOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            try {
                resolve("procesando compra");
            } catch (error) {
                reject("Error al procesar la orden");
            }
        }, 3000); // Simula un tiempo de 5 segundos
    }); 
}

async function total(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            try {
                const total = cart.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
                resolve(total);
            } catch (error) {
                reject("Error al calcular el total");
            }
        }, 6000); // Simula un tiempo de 5 segundos
    }); 
}

async function main(){
    try {
        const orden = await processOrder(); // Ejecutando
        console.log(orden);
        const totales = await total(); // Ejecutar
        console.log("el precio total de su orden es:", totales);
    } catch (error) {
        console.error("Error en el proceso de compra:", error);
    }
}

main()