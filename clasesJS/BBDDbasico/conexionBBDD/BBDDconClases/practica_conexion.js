const mysql = require('mysql2/promise')


class Database{
    // Constructor
    constructor(config){
        this.config = config
    }
    // Método para establecer una conexión
    async connect(){
        try{

            this.connection = await mysql.createConnection(this.config)
            console.log("Conexión exitosa")
        
        } catch(err){
            throw err
        }
    }
    async insertarDatos(nombre , correo){
        try { 
            const query= 'INSERT INTO CONEXION (nombre , correo) VALUES (? ,? )'
            const [result]=await this.connection.execute(query,[nombre , correo])
            console.log("subida exitosa")
        } catch (err) {
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


    async close(){
        try {
            if(this.connection){
                await this.connection.end()
                console.log("cierre exitoso")
            }
            
        } catch (err) {
            throw err
            
        }
    }
}

const config = {
    host: "localhost",
    user: "root",
    password: "Elie.117",
    database: "mydb"
}

const main = async () => {
    try {
        const objeto = new Database(config)
        await objeto.connect()
        //await objeto.insertarDatos("maneul", "manuel@example.com")
        await objeto.Consult()
        await objeto.close()

    } catch (err) {
        console.log("error en el progrma", err)
        
    }
}

main()