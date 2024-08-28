

document.getElementById("enviar").addEventListener("click", function(){
    let info = document.getElementById("capitulo").value
if (!info) {
    //Lo que sucede si está vacío
   alert("El campo no puede estar vacío.");
}else{
    //Lo que sucede si no está vacío
    async function datosdeapi(){
        const enlace = "https://rickandmortyapi.com/api/character/123"
        
        
        let nuevo_enlace = enlace.replace("123", info )
        let datos = await fetch(nuevo_enlace)
        let respuesta = await datos.json()
        console.log(nuevo_enlace)
        return respuesta
    }
    async function main(){
    
    
        let objeto = await datosdeapi()
        
        const imagen = document.createElement("img")
    
        //const contenedor = document.createElement("div")
        let nombre = document.createElement("p")
        let contenido = objeto.name
        let episodio = document.createElement("p")
        let contenido2 = objeto.episode
    
    
        imagen.src = objeto.image
    
        nombre.innerHTML = contenido
        episodio.innerHTML = contenido2
    
        
        document.getElementById("contenedor").appendChild(imagen)
        document.getElementById("contenedor").appendChild(nombre)
        document.getElementById("contenedor").appendChild(episodio)
    
        
    
    }
    main()
}
})


document.getElementById("Limpiar").addEventListener("click", function(){
     document.getElementById("contenedor").innerHTML = "<h1> no hay valores , este texto es con innerhtml</h1> <p>hola esto es un parrafo</p>"
    ///innerHTML, textContent, innerText
})

    //document.body.remove(imagen)
   


    //nada


//Cree un contenedor (div)

//nombre
//Episodio
//Imagen

const enlacePOKEAPI = "https://pokeapi.co/"
