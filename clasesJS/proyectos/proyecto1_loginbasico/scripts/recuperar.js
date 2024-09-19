
let bandera = false
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
const usuario = document.getElementById("username").value

    for (let elemento in localStorage){
        if (elemento == usuario){
            //Tomar valores de los input pwd
            const clave1 = document.getElementById("password").value
            const clave2 = document.getElementById("newPassword").value
            //verificar si las claves son iguales
            bandera = true
            if (clave1 === clave2){
                localStorage.setItem(usuario, clave2)
                alert("cambio exitoso")
                window.location.href = "login.html"
            }
            else{
                alert("clas claves no coinciden")
                break
            }
        }
    }
    if (bandera== false){

        alert("el usuario no existe")
    }
})
    
    




