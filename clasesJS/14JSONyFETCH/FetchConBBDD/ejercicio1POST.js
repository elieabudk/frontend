//Post a una api

fetch("https://retoolapi.dev/aZMgnD/data", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        //info que le vamos a enviar
        "Column 1": "Eli",
        "Column 2": "Abud"
    })
})
    .then(response =>{
        if(!response.ok){
            throw new Error("Error en la conexión");
        }
        return response.json();
    })
    .then(info => {
        console.log("datos recibidos: ", info);
    })
    .catch(error =>{
        console.error("Error en la petición: ", error)
    })