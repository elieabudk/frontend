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

// Agrega esta función para verificar los inputs
function checkInputs() {
    if (usuario.value !== "" && clave.value !== ""){
        document.getElementById("login").removeAttribute("disabled");
        
    } else {
        document.getElementById("login").setAttribute("disabled", "true"); // Deshabilita el botón si los campos están vacíos
    }
}

document.getElementById("login").addEventListener("click", function(){
    alert("registro exitoso")
})

/*


if (usuario !== "" && clave !== ""){
    document.getElementById("login").removeAttribute("disabled")
    
}

*/

