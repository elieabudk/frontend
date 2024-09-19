async function api(){

    const datos = await fetch("https://retoolapi.dev/aZMgnD/data", {
        method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        //info que le vamos a enviar
        "Column 1": "jose2",
        "Column 2": "mora2"

    })
    
});
    return datos.json()
}   

async function main(){
    try {
        const info = await api()
        console.log(info)
        
    }catch(error){
        console.log("error en la api", error)
    }

}

main()