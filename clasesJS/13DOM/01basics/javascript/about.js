//Simulación de información que viene desde una API
async function pedirDAtos(){
    const datosRespuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const respuestaDatos = await datosRespuesta.json() //Con fetch
    console.log(typeof respuestaDatos)
    console.log(respuestaDatos)
    //No retorna ABSOLUTAMENTE NADA
    return respuestaDatos
}
//1ra tarea
//nuevo enlace
//Reto hacer lo mismo sin IA (aprendiendo)
const enlace = "https://jsonplaceholder.typicode.com/users"
//2da tarea sin (IA)
const enlaceTarea2 = "https://rickandmortyapi.com/api/character/123"

//Rama principal de ejecución MAIN
async function main(){
    //Pedir los datos con fetch
    const datos = await pedirDAtos()
    console.log("datos mostrados", datos) // ?
    //Crear los elementos en el DOM
    const parrafo = document.createElement("p")
    let contenido = " " //Creamos contenido vacío
    //Método que lee cada valor del diccionario
    for (const key in datos) {  
        contenido += `${key}, ${datos[key]}<br>`
    }
    parrafo.innerHTML = contenido
    document.body.appendChild(parrafo)

}



//Haga parte por parte y vaya probando mientras va haciendo!!!!!!!

//UN array de diccionarios
const clientes = [
    {
      "nombre": "Ana García",
      "telefono": "555-123-4567"
    },
    {
      "nombre": "Pedro Rodríguez",
      "telefono": "555-890-1234"
    },
    {
      "nombre": "María López",
      "telefono": "555-567-8901"
    }
  ];