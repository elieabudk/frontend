
//Fetch --> APIS
//tareas asincronas
//fetch('datos.json') //Obtención del archivo


//1 forma
fetch('datos.json')
    .then(datosUsuario => datosUsuario.json()) //conversion
    .then(respuesta => {
        //Crear el nuevo elemento
        //Modificando una propiedad del elemento p
        let texto = ''
        for (let key in respuesta) {
            texto = `${key} : ${respuesta[key]}`
            let ol = document.getElementById("lista")
            let parraf = document.createElement('li');
            parraf.textContent= texto
            ol.appendChild(parraf)
        }
       
})

//2 forma

/*
async function pedirDAtos(){
    const datosRespuesta = await fetch('datos.json')
    const respuestaDatos = await datosRespuesta.json()
    console.log(typeof respuestaDatos)
    console.log(respuestaDatos.hobbies)
}

pedirDAtos()

*/