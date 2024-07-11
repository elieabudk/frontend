// Funcion (Declaracion basica)
function saludar(){
    //Cuerpo de la función (Instrucciones)
    console.log("Hola, bienvenido")
}


//Llamada de la función

// 1.  Desde el archivo js
// 2. Desde el DOM (Desde html)

saludar()

//Funciones con parámetros
let elie = "hola"
function saludar(nombre){
    //let elie = "hola" //tiene ámbito de bloque
    console.log(nombre)
}

saludar(elie)

//Función con retorno
function decirHola(){
    return "hola como estas"
}
//Llamada la función
saludar = decirHola()
console.log(decirHola())
console.log(saludar)

//Funcion con parametros y con retorno
//Llamda a la funcion
console.log(decirAdios("Carlos"))

function decirAdios(nombre){
    //console.log("Adios "+ nombre)
    return "Adios " + nombre
}

// Cómo se interpretan las funciones en javascript
//#################################################
//Función declarada (de forma explícita)

    //El Hoisting en la función declarada (Pueden ser llamadas en cualquier parte del código
        //Después de haber sido declaradas)

        //También se pueden llamar antes de ser definidas

        //Llamamos antes de definir
        console.log(decirAdios("Carlos"))

        function decirAdios(nombre){
            //console.log("Adios "+ nombre)
            return "Adios " + nombre
        }

//Función expresada (Function expression)
    //Funciones anónimas (puede o no tener un nombre)

    //Hoisting (No pueden ser llamadas antes de ser definidas)

    const FuncExpres = function(nombre){
        //Cuerpo de la funcion
        return nombre
    }   

    console.log(FuncExpres("hola 2"))
    console.log(typeof FuncExpres)
    console.log(typeof decirAdios)


// Arrow Function (Función flecha)

const saludrAhora = (nombre) => {
    //cuerpo de la funcion
    return nombre
}

const saludrAhora1 = (nombre) => {return nombre}

//Caracteristicas

//valores por defecto cuando usamos argumentos

function Sumar (numero1, numero2=7){
    return numero1 + numero2
}

let resltado
resultado = Sumar(5)
console.log(resultado)

// Funciones como argumentos o parámetros

// Función principal
function operacion (a, b, haciendo){
    //return a+b
    return haciendo(a,b);
}
//Función que se va a mandar como argumento
const sumar = (n, p) => n+p; //Arrrow function
const multiplicar = (a, b) => a*b;

//Llamada a una función con argumentos o parámetros
console.log(operacion(8,5,sumar));
console.log(operacion(8,5,multiplicar));

//Funciones anidadas

function afuera(){
    console.log("hola mundo")

    //Segunda función
    function adentro(){
        
        
        return "adios mundo"
    }

    // Llamando a la función adentro desde afuera
    return adentro();
}

console.log(afuera())



//Un programa que suma dos números

function sumar2(a,b) {
    return a+b
}

console.log(sumar2(5,6))



const sumar3 = function(a,b){
    //Cuerpo de la funcion
    return a+b

}

console.log(sumar3(5,6))


const sumar4 = (a,b) => a+b;

console.log(sumar4(5,6))




//Una función que determine el mayor de dos números

function mayor(a,b){
    if (a > b) {
        console.log("a es mayor");
    } else if (b > a) {
        console.log("b es mayor");
    }    
}

mayor(5,6)

//Contar cuántas letras tiene la palabra "hola"


const caracteres = (a) => {
    //contador
    let count = 0;
    // inicio , condición , incremento
    for (let n = 0; n < a.length; n++) {
        count++;
    }
    return count;
}

console.log(caracteres("gola"))


function letras(a){
    let n =0
    let contador =0
    while (n<a.length) {
        contador++;
        n++
console.log(contador)
    }
}

letras("saludo")
//Contador de letras con bucle for...of
function contadorLetras(a){
    let sumador = 0;
    for (let iterador of a){
        sumador++;
    }
    return sumador;
}

console.log(contadorLetras("holaMundo"))