console.log("hola")
const botonEnviar = document.getElementById("enviar");

//Recomendaciones
//1. Primero muestre por consola los datos de la API
//2. Guardar ese dato en una variable
//3. Ir probando paso a paso (NO DEJAR QUE SE ACUMULE CÓDIGO)

async function datos_api(){
    let datosapi = await fetch("https://rickandmortyapi.com/api/character/486")
    let respuesta = datosapi.json()
    console.log(respuesta)
    return respuesta
}


async function main(){
    let datos = await datos_api()
    //console.log(datos)
    
    const parrafo = document.createElement("p")
    let contenido = " " 

    for (const key of datos) {  
        contenido += `${key.name}: ${key.email}<br>` 
        console.log(contenido)
    }
    
    parrafo.innerHTML = contenido
    document.body.appendChild(parrafo)
    
}

//main()
