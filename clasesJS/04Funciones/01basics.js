console.log("#######")

//Funciones DECLARADAS

//Funciones sin parámetros y sin retorno
function Saludar(){
    //Cuerpo de la función (Instrucciones)
    console.log("Hola, bienvenido");
}
Saludar();

//Funciones con parámetros y sin retorno
let elie = "hola variable"
function saludar(nombre){
    let elie = "hola" //tiene ámbito de bloque
    console.log(nombre);
}
saludar("elie dato");
saludar(elie);
//Funciones sin parámetros y con retorno
var elie1 = "variable global"; //Una variable global (TODO EL CÓDIGO LO LEE)
function saludarGlobal(){
    var elie1 = "variable local"
    //console.log(elie1)
    return elie1; //datos primitivos
}

let resultado = saludarGlobal();
console.log(resultado); //vemos la variable guardada
console.log(elie1); //vemos la variable global (sin modificar)

//Funciones con parámetros y con retorno

function despedir(nombre){
    return nombre;
}


//FUNCIONES EXPRESADAS

//Podemos asignar una función a una variable

//Declaramos una variable como una función
const sumar = function(a=0,b=4){
    return a+b;
}

console.log(sumar(5));

//DIFERENCIAS

//Hoisting de las declaradas
//Puedo llamarle antes de definirle

//Hoisting de las expresadas
//No las puedo llamar antes de definirlas

//Funciones declaradas vs expresadas

//Crear una función que sume dos números.

//declarada

//Expresada

console.log("-----------------")

function Sumar(a,b){

    let suma = a+b
    return suma
}


const sumar1 = function(a,b){
    return a+b
}

resultado = Sumar(5,4)
console.log(resultado)

console.log(sumar1(5,4))

//Función flecha

const decirHola = (valor) => {
    return valor;
}

const decirHola1 = (valor) => {return valor}

//Funciones como argumentos

function realizandoOperacion(a, b, sumar, resta){
    return sumar(a,b)
}

console.log(realizandoOperacion());