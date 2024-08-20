//Ejemplo de realización de consulta SQL con consulta (Con node.js), inserción y muestra de datos mediante el uso de la consola
const mysql = require('mysql2/promise');

async function conectarBBDD() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Elie.117',
            database: 'mydb'
        });
        console.log('Conexión a la base de datos exitosa');
        return connection;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}

async function desconectarBBDD(connection) {
    try {
        await connection.end();
        console.log('Conexión a la base de datos cerrada');
    } catch (error) {
        console.error('Error al cerrar la conexión a la base de datos:', error);
        throw error;
    }
}

async function ejecutarQuery(connection, query) {
    try {
        const [results, fields] = await connection.execute(query);
        return results;
    } catch (error) {
        console.error('Error al ejecutar el query:', error);
        throw error;
    }
}

async function enviarDatos(connection, telefono, nombre, email, cedula) {
    try {
        const [results, fields] = await connection.execute('INSERT INTO front (telefono, nombre, Email, Cedula) VALUES (?, ?, ?, ?)', [telefono, nombre, email, cedula]);
        console.log('Datos enviados a la base de datos');
    } catch (error) {
        console.error('Error al enviar datos a la base de datos:', error);
        throw error;
    }
}

// Ejemplo de uso
async function main() {
    try {
        const connection = await conectarBBDD();
        //Definición de las variables
        const telefono = '1234567890';
        const nombre = 'Juan';
        const email = 'juan.perez@example.com';
        const cedula = 'kjhkjh';
        await enviarDatos(connection, telefono, nombre, email, cedula);
        await desconectarBBDD(connection);
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
}

main();




async function main_mostrar() {
    try {
        const connection = await conectarBBDD();//Bien
        const query = 'SELECT * FROM front';
        const resultado = await ejecutarQuery(connection, query)//Bien
        await desconectarBBDD(connection)
        //Modo de impresión
        return resultado
        
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
}

//Dato traido desde el DOM
let nombre = "Juan"

async function encontrar(){
    const todosLosDatos = await main_mostrar();
    let bandera = false
        for(let e of todosLosDatos){
            if(e.nombre === nombre){
                console.log(e.nombre)
                bandera = true
            }
        }
        if(bandera === false){
            console.log("Usuario no encontrado")
        }else{
            console.log("Encontrado con éxito")
        }

}

//encontrar()