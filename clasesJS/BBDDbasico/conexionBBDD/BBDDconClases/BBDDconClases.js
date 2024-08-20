//Clase que ejecuta la conexión
const mysql = require('mysql2/promise')

class Database{
    //Constructor
    constructor(config){
        this.config = config
    }

    //1 Métodos apertura de la conexión
    async connect(){
        try {
            //Creando una variable connection
            this.connection = await mysql.createConnection(this.config);
            console.log("Conexión exitosa a la base de datos");
        } catch (err) {
            //console.error("Error al realizar la conexión ", err)
            throw err
        }
    }
    //Método que hace una consulta



    //2 Método que hace un envío de datos
    async insertarDatos(nombre, correo= "vacío"){
        try {
            //Toda la lógica de la conexión y el envío de datos
            //await this.connect(); //Llamada a un método de la clase Database

            //Ejecutar la inserción de datos
            const query = 'INSERT INTO conexion (nombre, correo) VALUES (?, ?)'
            //La consulta de los datos
            const [result] = await this.connection.execute(query, [nombre, correo]);
            console.log("Datos guardados exitosamente!", result);
            //return result; //Mostrar el resultado de la inserción

        } catch (err) {
            //console.error("Error al insertar los datos: ", err);
            throw err
            
        }

    }

    async Consult(){
        try {
            const query = 'SELECT * FROM CONEXION';
            const [result] = await this.connection.execute(query);
            console.log("consulta exitosa", result);
        } catch (err) {
            throw err;
            
        }
    }

    //3 El cierre de la conexión
    async close(){
        try {
            //verificar si se hizo la conexión
            if(this.connection){
                await this.connection.end() //Cerrar la conexión
                console.log("La conexión cerró exitosamente");
            }
        } catch (err) {
            console.error("Error al cerrar la base de datos, ", err)
        }
    }
}

//Información protegida (Simular)
const config = {
    host: "localhost",
    user: "root",
    password: "Elie.117",
    database: "mydbd2"
}

//Main hacemos la llamada

async function main(){
    try {
        //Creamos un objeto con toda la información para la conexión
        const datos = new Database(config); //prueba de error
        await datos.connect();
        //await datos.insertarDatos("Elie", "correo@example.com");
        await datos.Consult()
        await datos.close()
    } catch (err) {
        console.error("Error en la llamada del main", err)
    }
}

main()