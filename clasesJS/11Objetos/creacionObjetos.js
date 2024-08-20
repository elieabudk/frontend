//Creación de los objetos

//Forma común (Objeto literal)

const perro = {
    //Atributos
    nombre: "golden",
    edad: 18,
    //Métodos
    ladrar: function(){
        console.log("guau guau")
    }
}

//Funciones (Constructores)

function Perro(){
    //Vamos a que la función nos retorne un objeto
    return (
        {
            //Atributos
            nombre: "max",
            edad: 2,
            //Métodos
            ladrar: function(){
                console.log("guau guau hola")
            }
        }
    )
}

//Crear un objeto a partir de esta función constructora
const perrito = Perro();
//const perrito2 = Perro();

//Declaración de un objeto mediante una función constructora (parámetros)
function Gato(raza, color){
    return({
        //Atributos
        raza : raza,
        color : color,
        //Métodos (Nunca van en el objeto, van en el prototipo)
        ronronear : function(){
            console.log("Estoy ronroneando :3");
        },
        maullar: function(){
            console.log("Estoy maullando");
        }
    })
}
//Creamos dos instancias de la función constructuctora del objeto Gato
const gato1 = Gato("Raza 1", "Blanco");
const gato2 = Gato("Raza 2", "amarillo");

//Función constructora que retorna un valor llenado dentro
function PerroGigante(tamanio, edad){
    //Creamos el objeto vacío
    console.log(this)
    let perroGigante = {};
    //Llenando el objeto
    perroGigante.tamanio = tamanio;
    perroGigante.edad = edad;
    perroGigante.ladrando = function(){
        console.log("Estoy ladrando fuerte!");
    }
    //Retornar el objeto
    return perroGigante
}

//Creamos dos instancias de la función constructuctora del objeto PerroGigante

const perroGrande = PerroGigante("1m", 2);

function PerroMiniatura(tamanio, edad){
    //Creamos el objeto vacío
    //let perroMiniatura = {};
    //Llenando el objeto
    console.log(this)
    this.tamanio = tamanio;
    this.edad = edad;
    this.ladrando = function(){
        console.log("Estoy ladrando suave!");
    }
    //Retornar el objeto
    //return perroMiniatura
}
//Creando un NUEVO objeto (instancia) de la clase PerroMiniatura
const chihuahua = new PerroMiniatura("20cm", 5);

console.log(chihuahua.edad);
chihuahua.ladrando()


/*
Ejercicio 1: Añadir un método "hablar" Objetivo: Añade un método 
llamado hablar al constructor Animal que imprima en consola 
un mensaje como "Guau!" o "Miau!" dependiendo del tipo de animal.*/

function Animal(){
    this.hablar = function(){ 
        console.log("guau")

    }
}

const perro1 = new Animal()

perro1.hablar()


/*
Ejercicio 2: Crear diferentes instancias de "Animal" 
Objetivo: Crea dos objetos Animal diferentes, uno llamado 
"perro" y otro llamado "gato", 
con diferentes valores para nombre, edad y tamaño.*/

function Animal2(nombre, edad , tamaño, olor) {
    this.nombre = nombre
    this.edad = edad
    this.tamaño = tamaño
    this.olor = olor
    this.caminar = function(){
        console.log("estoy caminando")
    }
    this.hablar = ()=>{
        console.log("estoy hablando")
    }

}


const perro3= new Animal2("golden", 3 , "1")
const gato3 = new Animal2("persa", 1 , "30cm")


console.log(perro3)
console.log(gato3)


/*
Ejercicio 3: Invocar métodos en las instancias 
Objetivo: Llama a los métodos caminar y hablar 
(si lo implementaste en el Ejercicio 1) de cada uno de los 
objetos "perro" y "gato" que creaste en el Ejercicio 2.*/

perro3.caminar()
gato3.hablar()


const gato4 = new Animal2("persa", 1 , "30cm", "fresco")

console.log(gato4)
gato4.caminar(), gato4.hablar()

/*

Ejercicio 5: Modificar valores de propiedades Objetivo: Después de crear un objeto Animal,
 cambia el valor de la propiedad edad a un nuevo valor.*/



gato4.edad = 6

console.log(gato4)