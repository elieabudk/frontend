async function datos_api(){
    try {
        let datosapi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        if (!datosapi.ok) throw new Error('Error en la respuesta de la API');
        let respuesta = await datosapi.json()
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function main(){
    let datos = await datos_api()
    console.log(datos)
}

main()