//Ejercicios herencia prototipica

/*
Crear un "Gato": Crea una clase "Gato" que herede de "Animal". 
El gato debe tener una propiedad "tipo" 
y un método "maullar".*/

//Manejo de propiedades vacías, manejo de que sí se envíe como

/*
class Animal{
    constructor(raza, edad, tamaño){
        //verificar si es texto y no está vacío
       // if((typeof raza !== "string") || (raza.length===0) ){
            //Lance un error (Crear un error)
         //   throw new Error("DATO INVÁLIDO")
        //}
        
    this.raza = raza
    this.edad = edad
    this.tamaño = tamaño
    
    //console.log(typeof  raza)
}
}



class Gato extends Animal{
    constructor(tipo, raza, edad, tamaño){
        super(raza , edad, tamaño)
        this.tipo = tipo
}
    maullar(){
        console.log("miau")
    }
}
/*
//Control del error enviado por el constructor
try {
    //DOM
    //verificacon del dom
    //que no sea número
    //que no esté vacío
    //que no haya números dentro del texto
    const gato1 = new Gato("max","raza 1", 3, 5)
    console.log(gato1)
    
} catch (error) {
    console.error("Error", error.message)
    //console.log("Error", error.message)
}
//console.log(gato1)


const animal1 = new Animal("condor", 5, "30cm")

console.log(animal1)

let raza = "hola11"

console.log(raza.length)

/*

function Animal(raza, edad){
    this.raza = raza
    this.edad = edad

}


function Gato(tipo, raza, edad){
    Animal.call(this, raza,edad)
    this.tipo = tipo


}
Gato.prototype.maullar = function (){
    console.log("miau")
}

Gato.prototype = Object.create(Animal.prototype)
Gato.prototype.constructor = Gato


const gato2 = new Gato("brueno", "angora", 5)
console.log(gato2)


/*
Crear un "Pajaro": Crea una clase 
"Pajaro" que herede de "Animal". El pájaro debe tener una propiedad 
"colorPlumas" y un método "cantar".*/

/*
class Pajaro extends Animal{
    constructor(colorplumas,raza,edad){
        super(raza, edad)
        this.colorplumas = colorplumas
    }

    cantar(){
        console.log("estoy cantando")
    }

}

const pajaro = new Pajaro("azul", "condor", 5)

console.log(pajaro

)*/
/*
function Pajaro(colorplumas, raza, edad){
    Animal.call(this, raza,edad)
    this.colorplumas = colorplumas
    
}

Pajaro.prototype.cantar = function(){
    console.log("estoy cantando")
}

Pajaro.prototype = Object.create(Animal.prototype)
Pajaro.prototype.constructor = Pajaro

const pajaro = new Pajaro("rojo","condor", 3)
console.log(pajaro)

*/
/*

Agregar propiedades a "Animal": Agrega una propiedad "edad" 
a la clase "Animal" y actualiza el constructor para que reciba 
la edad como parámetro.*/



/*
Método "comer" en "Animal": Crea un método "comer" en la clase 
"Animal" que imprima un mensaje como "El animal está comiendo".*/

class Animal{
    constructor(tipo, raza, edad, sonido){
    this.tipo=tipo
    this.raza = raza
    this.edad = edad
    this.sonido = sonido
    }

    comer(){
        console.log("estoy comiendo")
    }

    hablar(){
        console.log("El "+ this.tipo + " hace "+ this.sonido)
    }
}   
//esto viene del DOM
let animal1;
const tipo= "", raza= "perro", edad = 5, dueno = "jose", sonido ="miau";
try {
    //Verificar el tipo de dato
    if(typeof tipo !== "string" || tipo === ""){
        throw "dato no valido"
    }
    if(/\d/.test(tipo)){
        throw "no puede haber numeros"
    }

    
    animal1 = new Animal(tipo, raza, edad) 
}

catch (err){
    console.error(err)

}


/*
Método "hablar" en "Animal": Crea un método "hablar" en la clase 
"Animal" que imprima un mensaje distinto según el tipo de animal 
(por ejemplo, "El perro ladra", "El gato maúlla", etc.). Utiliza 
la herencia para que 
cada clase de animal tenga su propio mensaje.*/




class Perro extends Animal{
    constructor(tipo, raza, edad, dueno, sonido){
        super(tipo, raza, edad, sonido)
        this.dueno = dueno
    }
    ladrar(){
        console.log("el perro ladra")
    }
    

}

class Gato extends Animal{

    constructor(tipo, raza, edad, dueno,sonido){
        super(tipo, raza, edad,sonido)
        this.dueno = dueno

    }   
    maullar(){
        console.log("el gato maulla")
    }

}
let perro
let gato
try {
    if (!tipo || !raza || !edad || !dueno || !sonido) {
        throw new Error("Todos los campos son requeridos");
    }
    if(/\d/.test(tipo) || /\d/.test(raza) || /\d/.test(dueno) || /\d/.test(sonido)) {
        throw new Error("No se permiten números en los campos de texto");
    }
    gato = new Gato(tipo, raza, edad, dueno, sonido);
} catch (error) {
    console.error("Error", error.message);
}

let valor = true
!true