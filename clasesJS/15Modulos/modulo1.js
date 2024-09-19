function mostrar(){


    document.getElementById("Enviar").addEventListener("click", function (){
        console.log("Boton")
        const datos = document.getElementById("input").value
    
        const etiqueta = document.getElementById("eti")
        etiqueta.textContent = ""
        etiqueta.innerHTML=datos
    
    })
}



export {mostrar}