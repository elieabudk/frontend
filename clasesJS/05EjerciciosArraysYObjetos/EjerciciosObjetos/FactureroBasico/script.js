

function Guardar_datos(){
    let nombre = document.getElementById("nombre").value
    let cedula =   document.getElementById("cedula").value

    let parrafo = document.createElement("p")
    parrafo.innerHTML = nombre + " " + cedula
    document.getElementById("factura").appendChild(parrafo);

    document.getElementById("nombre").value = " "
    document.getElementById("cedula").value = " "

}

function Mostrar_productos (){
    let producto = document.getElementById("producto").value
    let cantidad_producto = document.getElementById("cantidad_producto").value
    let precio = document.getElementById("precio").value

    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Producto: ${producto}, Cantidad: ${cantidad_producto}, Precio: ${precio}`
    document.getElementById("factura").appendChild(parrafo);

    document.getElementById("producto").value = " "
    document.getElementById("cantidad_producto").value = " "
    document.getElementById("precio").value = " "

}   
