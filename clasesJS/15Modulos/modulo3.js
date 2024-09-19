
function api (){

    document.getElementById("api").addEventListener("click", function (){


    fetch("https://retoolapi.dev/EgtuRt/data/")
        .then(Response=> {
            if(!Response.ok) {
                throw new Error("error en la conexion a la api")
            }
            return Response.json()
        })
    .then(info => {
        const dato = JSON.stringify(info)
        const etiquieta = document.getElementById("eti")
        etiquieta = ""
        etiquieta.innerHTML = dato
    })
    .catch(error => { 
        alert("error en mostrar la informacion", error)
    })
    })
}

export { api }