//Ejercicio 1 (Básico) de consulta, inserción y muestra de datos con node.js

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



async function Consulta(){
    try {
        const connection = await conectarBBDD();
        const query = 'SELECT * FROM tablajavascript';
        const [results, fields] = await connection.execute(query);
        console.log('Consulta exitosa:', results);
        connection.end()
        return results;
        
    } catch (error) {
        console.error('Error al consultar los datos:', error);
        throw error;
    }
}


async function PorCedula(){
    let cedula = "2569874562"
    const connection = await conectarBBDD();
    const resultado = await Consulta()
    
    let bandera = false
    for (let e of resultado){
        if(e.cedula === cedula){
            bandera = true
        }
    if(!bandera){
    console.log("no se encuentra el usuario")
        }
    else{
        console.log("el usuario existe:", e.cedula)
    }    
    }
}

async function SubirDatos(){
    const nombre = "jose"
    const apellido = "velez"
    const cedula = "ssfd"
    const email = "jaime@ejemplo.com"

    // Validación de nombre y apellido
    if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido)) {
        console.error('Nombre y apellido deben contener solo letras');
        return;
    }

    // Validación de cedula
    if (!/^\d+$/.test(cedula)) {
        console.error('Cedula debe contener solo números');
        return;
    }

    // Validación de email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        console.error('Email no es válido');
        return;
    }

    // Validación de espacios
    if (nombre.includes(' ') || apellido.includes(' ') || cedula.includes(' ') || email.includes(' ')) {
        console.error('Ningún campo debe contener espacios');
        return;
    }

    // Si todas las validaciones pasan, se pueden subir los datos
    console.log('Datos válidos, procediendo a subir...');
    // Aquí se podrían subir los datos a la base de datos
    
    
    
    try {
        const connection = await conectarBBDD();
        const [results, fields] = await connection.execute('INSERT INTO tablajavascript (nombre, apellido, cedula, email) VALUES (?, ?, ?, ?)', [nombre, apellido, cedula, email]);
        console.log('Datos enviados a la base de datos');
        connection.end()
        return "Realizado correctamente"
    } catch (error) {
        console.error('Error al enviar datos a la base de datos:', error);
        
        
    }
}



async function main_subir(){
    const subir = await SubirDatos()
    console.log(subir)

}

main_subir()