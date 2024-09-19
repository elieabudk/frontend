



async function Api(){
    let datos_api = await fetch("https://jsonplaceholder.typicode.com/users")
    let datos = await datos_api.json()
    return datos

}

async function main(){
    if (localStorage.length ==0){
    let recibidos = await Api()
        

        for (let elemento of recibidos){
            localStorage.setItem(elemento.email, elemento.username);
        }
    }
   
}

main()




document.getElementById('inicio').addEventListener("click", function(event){
    let usuario = document.getElementById("username").value
    let clave = document.getElementById("password").value
    if (usuario == "" || clave == ""){
        alert("debe llenar los campos")
    }

    else{
        // Cambiar la lógica del bucle para evitar alertas múltiples
        for (let i in localStorage) {
            if (i == usuario && localStorage.getItem(i) == clave) { 
                //event.preventDefault()
                alert("ingreso exitoso"); 
                
                window.location.href = "bienvenido.html"; // Redirige a la página de bienvenida
                break
            }
        }
        // Mover la alerta de "datos incorrectos" fuera del bucle
        alert("datos incorrectos");


    }
    
    
})

document.getElementById("Modificar").addEventListener("click", function(event){
    event.preventDefault()
    window.location.href = "recuperar.html"
  
    
})