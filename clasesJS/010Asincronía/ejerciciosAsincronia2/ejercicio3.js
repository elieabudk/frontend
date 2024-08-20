/*

Ejercicio 3
Consulta de Datos en un API Ficticio Descripción: Vas a simular una consulta a una API 
que devuelva información de varias ciudades (nombre, población, país). Utilizarás promesas y 
async/await para manejar la consulta y luego aplicar métodos de array para filtrar y transformar
 los datos.

Instrucciones:

Crea una función fetchCities que simule una llamada a una API y devuelva un array 
de objetos con datos de ciudades. Usa async/await para obtener los datos de las ciudades. 
Filtra las ciudades que pertenezcan a un país específico (por ejemplo, "España") y calcula la 
población total de esas ciudades. Utiliza try...catch 
para manejar cualquier error en la consulta de datos.*/


async function fetchCities(){
    return new Promise((resolve, reject) =>{ // Fixed typo 'rejecjt' to 'reject'
        
        setTimeout(() => {
            const ciudades = [
                { nombre: "Madrid", poblacion: 3200000, pais: "España" },
                { nombre: "Barcelona", poblacion: 1600000, pais: "España" },
                { nombre: "Valencia", poblacion: 790000, pais: "España" },
                { nombre: "Paris", poblacion: 2100000, pais: "Francia" },
                { nombre: "Roma", poblacion: 2800000, pais: "Italia" }
            ];
            resolve(ciudades);
        }, 5000); // Simula un tiempo de 5 segundos

    }); 
}



async function filtar(){
    const datos = await fetchCities()
    const ciudades = datos.filter(ciudad => ciudad.pais === "Francia")
    let poblacion_total = ciudades.reduce((total, ciudad) => total + ciudad.poblacion, 0)
    return poblacion_total
}

async function main(){
    const ciudades_espana = await filtar()
    console.log(ciudades_espana)
}

main()