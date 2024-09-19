const enlace = "https://retoolapi.dev/aZMgnD/data";
//Petición al servidor de la API 
fetch(enlace)
.then(response =>{
    if(!response.ok){
        throw new Error("Error del servidor"); //Creando un objeto error
    }
    //Si todo va bien
    return response.json();
})
.then(info => {
    console.log(info); //Imprimimos la respuesta
})
.catch(error =>{
    console.error("Error en la petición de la API", error);
})


