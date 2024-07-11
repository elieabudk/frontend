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
//Llamad a la función
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

    