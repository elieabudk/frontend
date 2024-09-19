const enlace = "https://retoolapi.dev/aZMgnD/data"

async function api(){
    const datos1 = await fetch(enlace)
    const datosJson = await datos1.json() // Convertir la respuesta a JSON
    return datosJson
}

async function main(){
    const info = await api()
    console.log(info) // 'info' ya es un objeto JSON, no es necesario parsearlo de nuevo
}

main()