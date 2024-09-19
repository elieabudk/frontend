// Fetch con get
/*
const enlace = "https://retoolapi.dev/aZMgnD/data";
fetch(enlace)
.then(response =>{
    if(!response.ok){
        throw new Error("error en la api")
    }
    return response.json()
})

.then(info=>{
    console.log(info)
})
.catch(error => {
    console.error("error en la api")
})

*/

//fetch con post


/*
const enlace = "https://retoolapi.dev/aZMgnD/data";
fetch(enlace, {
    method: "POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        "Column 1" : "alberto",
        "column 2" : "rosales"

    })

})

    .then(response=>{
        if(!response.ok){
            throw new Error("errpr en la conexion")
        }
        return response.json()

    })
    .then(info=>{
        console.log("datos recibidos:" , info)
    })
    .catch(error=>{
        console.error("error", error)
    })

    */

//método put (Actualización del recurso completo)

/*
    const enlace = "https://retoolapi.dev/aZMgnD/data/6";
    fetch(enlace, {
        method: "PUT",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "Column 1" : "PRUEBA PUT 2",
            
    
        })
    
    })
    
        .then(response=>{
            if(!response.ok){
                throw new Error("errpr en la conexion")
            }
            return response.json()
    
        })
        .then(info=>{
            console.log("datos recibidos:" , info)
        })
        .catch(error=>{
            console.error("error", error)
        })

*/

//Método patch

/*
const enlace = "https://retoolapi.dev/aZMgnD/data/7";
    fetch(enlace, {
        method: "PATCH",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "Column 1" : "PRUEBA PATCH",
            "Column 2" : "PRUEBA 2"
    
        })
    
    })
    
        .then(response=>{
            if(!response.ok){
                throw new Error("errpr en la conexion")
            }
            return response.json()
    
        })
        .then(info=>{
            console.log("datos recibidos:" , info)
        })
        .catch(error=>{
            console.error("error", error)
        })

        */

        //método delete

    const enlace = "https://retoolapi.dev/aZMgnD/data/17";
    fetch(enlace, {
        method: "DELETE"
        
    })
    
        .then(response=>{
            if(!response.ok){
                throw new Error("errpr en la conexion")
            }
            return response.json()
    
        })
        .then(info=>{
            console.log("datos recibidos:" , info)
        })
        .catch(error=>{
            console.error("error", error)
        })