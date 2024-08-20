/*
Ejercicio 2
Manejo de Usuarios en una Aplicación Descripción: Vas a simular una aplicación que maneja 
usuarios. 
La aplicación permitirá agregar, eliminar, y actualizar usuarios, utilizando promesas y 
manejando errores.

Instrucciones:

Crea un array vacío llamado users. Crea funciones addUser, removeUser, 
y updateUser que devuelvan promesas. Usa async/await para agregar, eliminar,
y actualizar usuarios en el array. Maneja los errores utilizando try...catch.*/

let arr = [{nombre : "usuario1", edad : 10, direccion: "quito"},
            {nombre : "usuario2", edad : 20, direccion: "ambato"},
            {nombre : "usuario3", edad : 15, direccion: "quito"}]


async function addUser(){
    return new Promise((resolve, reject)=>{
    const usuario_nuevo = "usuario4"
    const edad = 35
    const direccion = "guayaquil"
    

    setTimeout(() => {
        arr.push({nombre:usuario_nuevo, edad: edad, direccion : direccion})
        resolve(arr)
    }, 7000) 
    }
    )
    
}    

async function removeUser(){
    return new Promise((resolve, reject)=>{
    
    const nombre = "usuario3"

    //forma fácil

    arr = arr.filter(user => user.nombre !== nombre);
    resolve(arr)
    })
}




async function updateUser(){
    return new Promise((resolve, reject)=>{
    const edad = 40
    const nombre = "usuario2"
    arr = arr.find(user => user.nombre === nombre);
    if (arr) {
        arr.edad= edad;
    }
    resolve(arr)
}
    )}



async function main(){
    const array = await addUser()
    console.log(array)
}

async function main_remover(){
    const remove = await removeUser()
    console.log(remove)
}


async function main_update(){
    const update = await updateUser()
    console.log(update)
}

main_update()