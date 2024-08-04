
/*
3- Donación de sangre

Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, 
si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente, 
debe mostrar un mensaje que indique si puede o no donar sangre
*/


let tiene_tatuajes = true
let hepatitis = true
let anemia = true

if (tiene_tatuajes || hepatitis || anemia) {
    console.log("no puede donar")
    } else { 
        console.log("si puede donar")
    }


    console.log("-----------------------")
    
    /* 4 Autenticación

    Crear un programa que pida ingresar el usuario y la contraseña y 
    los compare con el usuario y contraseña guardados en variables, 
    y muestre en un mensaje si tiene el acceso autorizado */


    let usuario = "jose"
    let clave = 123

    let usuarioIngresado = "jose"
    let claveIngresada = 123

    if (usuario == usuarioIngresado && clave ==claveIngresada) {
        console.log("acceso permitido")
    }
    else {
        console.log("acceso no permitido")
    }


    console.log("-----------------------")


    /*
    5 Mantenimiento

Hacer un programa que pregunte por separado si el auto tiene aceite, agua,
 y neumáticos con presión. Mostrar en un mensaje si tiene que hacer 
 mantenimiento o no si alguna de las respuestas es negativa*/


 let tiene_aceite= true
 let agua= true
 let presion = false

 if (!(tiene_aceite && agua && presion)) {
    console.log("debe hacer mantenimiento")
 }
 else {
    console.log("no debe hacer mantenimiento")
 }



 console.log("-----------------------")

 /*
 6 Acceso restringido

Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan 
autorización. Hacer un programa que pregunte estas si es miembro, 
si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.*/

let es_miembre = true
let cuota_al_dia = true

if(es_miembre && cuota_al_dia) {
    console.log("acceso permitido")
}
else {
    console.log("acceso no permitido")
}
 

console.log("-----------------------")

/*
8 Número más grande (2 números)

Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. 
Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, 
debe mostrar un mensaje diciéndolo.*/


let numero1 = 1
let numero2 = 5


if (numero1 < numero2){
    console.log("el numero mayor es :", numero2)
}
else if (numero1 > numero2) {
        console.log("el numero mayor es:", numero1)
    }
else{
    console.log("los numeros son iguales")
}    



console.log("-----------------------")
/*
9 Número más grande (3 números)

Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, 
agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.*/



console.log("-----------------------")

let num1 = 1
let num2 = 10
let num3 = 10


if (num1 > num2 && num1 > num3){
    console.log("el numero mayor es :", num1)
}
else if (num2 > num1 && num2 > num3) {
    console.log("el numero mayor es :", num2)
        
    }
else if (num3 > num1 && num3 > num2){
    console.log("el numero mayor es :", num3)
}    
if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Algunos de los números son iguales");
}


console.log("-----------------------")

/*10 Términos y condiciones de uso

Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, 
debe mostrar un mensaje que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga 
"No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".*/


let condicion = false

if (condicion){
    console.log("continuando el proceso")
}
else {
    console.log("No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso")
}



console.log("-----------------------")

/*
11 Quizz

Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, 
mostrar un mensaje de felicitaciones si se respondió bien a todas, 
o uno de que ha perdido el juego si respondió mal al menos una.*/


let preg1 = "si"
let preg2 ="no"
let preg3 = "si"


if (preg1 === "si" && preg2 === "si" && preg3 ==="si"){
    console.log("felicitaciones")
} 
else {
    console.log("has perdido")
}



console.log("-----------------------")
/*
14 Calificación

Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que diga:

¡Excelente!, si la nota es 10

¡Muy bien!, si la nota es 8 o 9

Aprobado, si la nota es 6 o 7

Reprobado, si la nota es menor a 6*/


let nota = 5

if(nota ===10){
    console.log("exelente")
}
else if (nota >= 8 && nota <=9 ) {
    console.log("muy bien")
}
else if (nota >= 6 && nota <=7) {
    console.log("aprobado")
}
else if (nota < 6){
    console.log("reprobadro")
}
else {
    console.log("nota no valida")
}

console.log("-----------------------")



/*
2 📆 Días del mes

Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.*/


let diasDelMes = {
    "enero": 31,
    "febrero": 28,
    "marzo": 31,
    "abril": 30,
    "mayo": 31,
    "junio": 30,
    "julio": 31,
    "agosto": 31,
    "septiembre": 30,
    "octubre": 31,
    "noviembre": 30,
    "diciembre": 31
}

let mes = "febrero"

if (mes in diasDelMes) {
    console.log(diasDelMes[mes])
}
else{
    console.log("mes incorrecto")
}

console.log("-----------------------")

/*

3 🔐 Cambio de contraseña

Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. 
Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. 
En caso de que al menos alguna pregunta
fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.*/