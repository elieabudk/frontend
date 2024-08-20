let lista_objetos = []
let objeto = {}

function Guardar(){
    //Recepción de datos
    let producto = document.getElementById("producto").value
    let cantidad = document.getElementById("cantidad_producto").value
    
    //Comprobar si el dato existe

    //Si la lista está vacía AGREGA!
    //Si la lista no está vacía VERIFICA SI EXISTE
    
    let dimension = lista_objetos.length
console.log("Dimension inicial: ", dimension, lista_objetos)
console.log("Mostrando condicion inicial: ", dimension === 0)

if (dimension === 0) {
    console.log("Primera condición")
    objeto = { productos: producto, cantidad: cantidad }
    lista_objetos.push(objeto)
    console.log("#############")
    console.log(lista_objetos)
    console.log("Condicón final de la dimensión (true): ", dimension != 0)
} else {
    console.log("Entro al segundo condicional")
    let encontrado = false; // Variable para verificar si el producto existe
    for (let i of lista_objetos) {
        if (producto == i.productos) {
            let posicion = lista_objetos.indexOf(i)
            console.log("punto3")
            let cantidad_anterior = lista_objetos[posicion].cantidad
            lista_objetos[posicion].cantidad = parseFloat(cantidad_anterior) + parseFloat(cantidad)
            console.log(lista_objetos)
            encontrado = true; // Producto encontrado
            break; // Salir del bucle
        }
    }
    if (!encontrado) { // Si no se encontró el producto, agregarlo
        console.log("Entrando al llenado de datos")
        console.log("punto4")
        objeto = { productos: producto, cantidad: cantidad }
        lista_objetos.push(objeto)
        console.log("Impresion del tercer condicional")
        console.log(lista_objetos)
    }
}        

       
    /*  

    for(let i of lista_objetos){
        console.log("punto2")
        if(producto == i.productos){
            console.log("punto3")
            let posicion = lista_objetos.indexOf(i.productos)
            
            let cantidad_anterior = lista_objetos[posicion].cantidad
            lista_objetos[posicion].cantidad = parsefloat(cantidad_anterior) + parseFloat(cantidad)
            
            console.log(lista_objetos)
        }
        else {
            console.log("punto4")
            objeto = {productos : producto, cantidad: cantidad}
            lista_objetos.push(objeto)
            console.log(lista_objetos)

        }


    }*/

    
}    

function Mostrar(){
    console.log("mostrando")
}                     




