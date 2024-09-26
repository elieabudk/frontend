
function api (){

    document.getElementById("api").addEventListener("click", function (){

    console.log("1")    

    fetch("https://retoolapi.dev/EgtuRt/data/")
        .then(response=> {
            if(!response.ok) {
                
                throw new Error("error en la conexion a la api")
                
            }
            console.log("3")
            return response.json()
        })
    .then(info => {
        console.log("4")
        console.log(info)
        const dato = JSON.stringify(info)
        
       
            let etiqueta = document.getElementById("eti")
            const datosArray = JSON.parse(dato)
            
            for (let i = 0; i < datosArray.length; i++) {
                const element = datosArray[i];
                etiqueta.innerHTML += `ID: ${element.id}, Correo: ${element.correo}, Nombre: ${element.nombre}, Apellido: ${element.apellido}<br>`;
            }
        console.log("5")
    })
    .catch(error => { 
        console.log("6")
        alert("error en mostrar la informacion", error)
    })
    })
}

export { api }