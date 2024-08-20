//Ejercicio 1 asincronia (promesas con async y await)
/*
Ejercicio 1
Simulación de una API de Productos Descripción: Vas a simular una llamada a una API que devuelve una lista de productos. 
Cada producto tendrá un nombre, precio y categoría. Utilizarás promesas, async/await, y trabajarás con arrays y objetos.

Instrucciones:

Crea una función fetchProducts que simule una llamada a una API utilizando setTimeout y devuelva una promesa que se
resuelva con un array de objetos (productos). Usa async/await para esperar la respuesta de fetchProducts. Itera sobre 
el array de productos para crear un nuevo array que contenga solo los productos de una categoría específica 
(por ejemplo, "Electrónica"). 
Maneja los errores si la promesa falla utilizando try...catch.*/


async function fetchProducts(){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const arr = [{nombre : "zapato", precio : 5, categoria: "calzado"},
                {nombre: "televisor", precio : 150, categoria : "electronica"}]
            resolve(arr);
        },9000) //Tiempo aleatorio entre 0 y 10
        
    } )   
}

async function Consulta(categoria){
    try {
        const productos = await fetchProducts(); // Espera la respuesta de fetchProducts
        const productosFiltrados = productos.filter(producto => producto.categoria === categoria); // Filtra por categoría
        console.log(productosFiltrados)  // Devuelve el nuevo array filtrado
    } catch (error) {
        console.error("Error al obtener los productos:", error); // Manejo de errores
    }
}
     
Consulta("calzado")
