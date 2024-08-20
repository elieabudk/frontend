/*
Simulación de un sistema de pedido: Crea una f
unción hacerPedido que simule un pedido online. 
Esta función debe devolver una promesa que se 
resuelve después de un tiempo aleatorio (entre 1 y 5 segundos) 
con un mensaje como "Pedido realizado correctamente". Usa setTimeout
 para simular el tiempo de espera. Crea una función main asíncrona 
 que llame a hacerPedido 
y maneje la resolución de la promesa con then.*/

async function HacerPedido(){
    
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Pedido realizado correctamente");
        },6000) //Tiempo aleatorio entre 0 y 10
    })
}


async function Main(){
    //Recepción de datos
    const pedido = await HacerPedido();          //1
     //2
    
    console.log(pedido);                      //3
}

Main()

/*
Simular un juego de azar: Crea una función 
tirarDado que simule el lanzamiento de un dado. 
La función debe devolver una promesa que se resuelve con un 
número aleatorio entre 1 y 6 después de un pequeño retraso (1 segundo).
Crea una función jugar asíncrona que llame a tirarDado dos veces 
y compare los resultados, 
mostrando un mensaje de quién ganó.*/

async function tirarDado(){
    return new Promise((resolve, reject) => {
        
            const randomNum = Math.floor(Math.random() * 6) + 1;
            resolve(randomNum);
        
    });
}

async function Main1(){
    const usuario1 = await tirarDado();
    const usuario2 = await tirarDado() 
    console.log(usuario1, usuario2)
    if (usuario1>usuario2){
        console.log("gano el usuario1", usuario1)
    }else if(usuario1<usuario2){
        console.log("gano usuario1", usuario2)
    }else {
        console.log("empate")
    }            
}

Main1()



/*
Obtener datos de una API (simulado): Crea una función
obtenerDatosAPI que simule la obtención de datos de una API. 
La función debe devolver una promesa que se resuelve con un objeto 
de datos ficticios (por ejemplo, un arreglo de productos o usuarios) 
después de un breve retraso. Usa setTimeout para simular la solicitud 
a la API. Crea una función mostrarDatos asíncrona que llame 
a obtenerDatosAPI y muestre los datos en la consola.*/

async function obtenerDatosAPI(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{

            const objeto = {
            producto1 : 5,
            producto2 : 3
        }
            resolve(objeto)
    },6000)
    }
    )
}


async function main2(){
    const producto = await obtenerDatosAPI();
    console.log(producto)
}

main2()

/*

Obtener información del usuario (simulado): 
Crea una función obtenerInfoUsuario que simule la obtención 
de información de un usuario. La función debe devolver una promesa 
que se resuelve con un objeto de información de usuario ficticio 
(por ejemplo, nombre, edad, etc.) después de un breve retraso. 
Usa setTimeout para simular la obtención de la información. 
Crea una función mostrarInfo asíncrona que llame 
a obtenerInfoUsuario y muestre la información en la consola.*/



const objetoNuevo = {
    nombre : "jose",
    edad : ""
}


async function obtenerInfoUsuario(){
    return new Promise ((resolve, reject)=>{
        if (objetoNuevo.nombre == "" || typeof objetoNuevo.nombre !== "string"){
            //Manejamos el error creando un objeto error
            reject(new Error("no puede estar vacio ni tener numero"))
        }
        if (objetoNuevo.edad == "" || typeof objetoNuevo.edad !== "number"){
            //Manejamos el error creando un objeto error
            reject(new Error("no puede estar vacio ni tener letras"))
        }
        
        setTimeout(()=>{
            resolve(objetoNuevo);
        },1000);
    });
}

async function main3(){
   try {
       //Código de prueba
       const datosFinal = await obtenerInfoUsuario();
       console.log(datosFinal)
      
   } catch (error) {
    //Maneja lo que hace con el error que retorna el reject
    console.log(error.message)
   }
}

main3()