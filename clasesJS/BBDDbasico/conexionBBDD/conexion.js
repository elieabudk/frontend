//NodeJS
//Importar la librería de mysql
const mysql = require('mysql2/promise');
//Crear la conexión

let DatosDOM = "Usuario 1";


async function obtenerDatos(){
    //Ejecutar la petición de la conexión

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Elie.117",
            database: "mydb"
        });
        //query mediante la espera de la promesa

        const [results] = await connection.query('SELECT nombre, telefono FROM front');
        //Cerrar la conexión una vez que se utiliza IMPORTANTE!
        connection.end();
        return results;

    } catch (error) {
        console.error("Error al conectar con la BBDD o al ejecuta el query", error);
        //Envío el error capturado de la conexión al catch del main()
        throw error
    }
}


async function main(){
    try {
        resultadosConsulta = await obtenerDatos();
        for (let e of resultadosConsulta){
            if(e.nombre === "" || e.telefono === ""){
                console.log("no puede haber campos vacios")
            }
            else{
                console.log(e.nombre , e.telefono)
                
            }
        }
    } catch (err) {
        console.error("Error en el main() ", err)
    }
}

main()



/*


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Elie.117",
    database: "mydb"
});

//Establecer la conexión
connection.connect(err =>{
    if (err){
        console.error("Error en la conexion con la BBDD", err);
        return;
    }
    console.log("Conexion exitosa");
});   
//enviar y pedir datos (consultas sql)
/* 
connection.query('SELECT nombre FROM front', (err, results)=>{
    if(err){
        console.error("Error al ejecutar la consulta", err);
        return;
    }
    console.log("Resultados de la consulta sql: ",results);
    //Consulta de un solo dato de una BBDD y almacenamiento en una lista
    lista_usuarios = []
    for (let i in results){
        lista_usuarios.push(results[i].nombre)
        
    }
   console.log(lista_usuarios)

});
*/
/**
connection.query('SELECT nombre, telefono FROM front', (err, results)=>{
    if(err){
        console.error("Error al ejecutar la consulta", err);
        return;
    }
    console.log("Resultados de la consulta sql: ",results);
    //Todo el ejercicio con BBDD va aquí dentro (solo aquí se puede utilizar)
    //Consulta de nombre y teléfono y mostrarse en una lista de diccionarios
    lista_usuarios = []
    for (let i in results){
        lista_usuarios.push(results[i])
        
    }
   console.log(lista_usuarios)

});

//Cerrar la conexión
connection.end()

 */
