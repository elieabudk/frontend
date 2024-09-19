function mostrar_contiempo(){


    document.getElementById("Enviar").addEventListener("click", function (){
        console.log("Boton")
        const datos = document.getElementById("input").value
        setTimeout(function(){

            const etiqueta = document.getElementById("eti")
            etiqueta.textContent = ""
            etiqueta.innerHTML=datos
        },2000)
    
    })
}

export { mostrar_contiempo }