const arreglo = {
    nombre : "Alejandro",
    cargo : "programador"
}

//Mostrar los datos de ese arreglo mediante una función

const getDatos = () => {
    //Simula una petición API BBDD (va a requerir un tiempo)
    //Objeto promesa
    return new Promise((resolve, reject) =>{
      //Petición a BBDD
        setTimeout(()=>{
        resolve(arreglo); //Devuelve un dato
    },2000);
    })
    
}

//Manejar lo que sucede DESPUÉS DE HABERSE EJECUTADO LA FUNCIÓN
//getDatos()
//    .then((arregloRecibido) => console.log(arregloRecibido));
    
//console.log(getDatos())

function getData(){
    return new Promise((resolve, reject) =>{
        const data = "";
        //resolve(data);
        setTimeout(()=>{
            //resolve(arreglo); //Devuelve un dato
            if (data){
                resolve(data);
            }else {
                reject("Error al obtener los datos");
            }

        },2000);
        })
    }

//getData()
//    .then((datosrecibidos) => console.log(datosrecibidos))
//    .catch((errorRecibido) => console.error(errorRecibido))

//Cadena de promesas

//Primera función
function primera(){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            resolve("Completado el paso 1");
        },1000)
    })
}

//Segunda función (que depende de la primera)
function segunda(mensaje){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${mensaje} - agregando el paso 2`);
        },1000)
    })
}

//Manejar los datos

primera()
    .then((mensajeRetornado)=>{
        //Enviamos el dato recibido a la nueva función que lo necesita
        return segunda(mensajeRetornado);
    })
    .then((mensajeFinal) =>{
        //Obtenemos el resultado de la última función
        console.log(mensajeFinal);
    });


    //Cadena de promesas con async y await

//Primera función
async function primeraA(){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            resolve("Completado el paso 1 Con async");
        },9000) //Tiempo aleatorio entre 0 y 10
    })
}


primeraA()


//Manejar los datos

async function Main(){
    //Recepción de datos
    const mensaje1 = await primeraA();          //1  //2
    console.log(mensaje1);                      //3

}

Main();

