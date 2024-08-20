

function Guardar_datos(){
    let nombre = document.getElementById("nombre").value
    let cedula =   document.getElementById("cedula").value

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Nombre: "+ nombre + " Cédula: " + cedula
    document.getElementById("factura").appendChild(parrafo);

    document.getElementById("nombre").value = ""
    document.getElementById("cedula").value = ""

}

function Mostrar_productos (){
    let producto = document.getElementById("producto").value
    let cantidad_producto = document.getElementById("cantidad_producto").value
    let precio = document.getElementById("precio").value

    for (let i of productos){
        let parrafo = document.createElement("p")
        parrafo.innerHTML = `Producto: ${i.producto}, Cantidad: ${i.cantidad}, Precio: ${i.precio}`
        document.getElementById("factura").appendChild(parrafo);
        
        
    }
    let subtotal = 0.0 //Declaración de un dato tipo flotante
    
    for (let i of productos){
        let precio = 0;
        precio = i.precio;
        let sub = parseFloat(subtotal)
        subtotal += parseFloat(precio);
        console.log(subtotal)

        
        //console.log("precio" + precio)
        //console.log("subttal "+ subtotal)
        

    }
    let iva = parseFloat(subtotal) * 0.15
    let total = parseFloat(subtotal) + parseFloat(iva)
    console.log(iva, total)


    let totales = document.createElement("p")
        totales.innerHTML = `subtotal: ${subtotal}, iva: ${iva}, total: ${total}`
        document.getElementById("factura").appendChild(totales);
    

    document.getElementById("producto").value = ""
    document.getElementById("cantidad_producto").value = ""
    document.getElementById("precio").value = ""

}   
let productos = []
function Guardar_producto (){
    
    let producto = document.getElementById("producto").value
    let cantidad_producto = document.getElementById("cantidad_producto").value
    let precio = document.getElementById("precio").value
    
    let objeto = {}
    
   
    objeto = {producto: producto, cantidad: cantidad_producto, precio: precio}
    productos.push(objeto)

    console.log(productos)
    document.getElementById("producto").value = ""
    document.getElementById("cantidad_producto").value = ""
    document.getElementById("precio").value = ""

}


//console.log(diccionario)

/* EJEMPLO CREACIÓN DE LISTA DE DICCIONARIOS (PARA INVENTARIOS)
let lista = [
    {producto: "Leche", precio: 1.20, cantidad: 40},
    {producto: "Queso", valor: 1.20},
    {producto: "Pan", valor: 1.20}
]
console.log(lista[0].valor+ lista[1].valor )
*/