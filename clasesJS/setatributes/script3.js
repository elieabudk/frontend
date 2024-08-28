//Tarea (implementar la solución qque me dio antes)
//El botón nos muestre si las contraseñas coinciden.

//2da
//Que la etiqueta p ya existe en el DOM y solo la sobre escribimos desde js

let usuario = document.getElementById("username")
let clave = document.getElementById("password")

usuario.addEventListener("input", function(event){
    const valor = event.target.value;
    console.log(valor);
    checkInputs(); // Llama a la función para verificar los inputs
});
clave.addEventListener("input", function(event){
    const valor2 = event.target.value;
    console.log(valor2);
    checkInputs(); // Llama a la función para verificar los inputs
});

let bandera = false
function checkInputs(){
    
    if (usuario.value === clave.value && usuario.value !== "" && clave.value !== "" ){
    document.getElementById("login").removeAttribute("disabled");

    const element = document.getElementsByClassName("e");
    console.log(element) // Esta línea no es necesaria
    if (element.length > 0) {
        element[0].remove(); // Eliminar el primer elemento con la clase "e"
    }
} else{
    document.getElementById("login").setAttribute("disabled", "true"); // Deshabilita el botón si los campos están vacíos
    }
    if (!bandera){
        {   let contenedor = document.createElement("div")
            contenedor.setAttribute("class","e")
    let parrafo = document.createElement("p")
    
    parrafo.textContent = "no coinciden las contraseñas"
    contenedor.appendChild(parrafo);
    document.body.appendChild(contenedor); // Agrega el contenedor al DOM
    
    bandera = true

}

}

}
