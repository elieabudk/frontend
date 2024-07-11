// 2. Imprimir los números del 1 al 10 usando un bucle while.

function imprimir(){
    let n = 1;
    while (n <= 10) {
        console.log(n);
        n++;
    }
}

//imprimir()


//3. Imprimir los números pares del 1 al 20 usando un bucle for.

function pares() {
    for (let n = 1; n <= 20; n++) {
        if (n % 2 === 0) {
            console.log(n);
        }
    }
}

//pares()


//Calcular la suma de los números del 1 al 100.



function suma() {
    let sumatotal = 0;
    for (let n = 0; n <= 100; n++) {
        sumatotal += n;
    }
    console.log(sumatotal);
}

//suma()

//5. Pedir al usuario que ingrese un número y determinar si es par o impar.

function determinarParImpar() {
    const numero = document.getElementById('numero').value;
    if (numero % 2 === 0) {
        console.log('El número es par');
    } else {
        console.log('El número es impar');
    }
}


//6. Definir tres números y determinar cuál es el mayor.

function mayor(){
    let a =10;
    let b = 12;
    let c = 7;
    if (a > b && a > c) {
        console.log("a tiene el numero mayor");
    } else if (b > a && b > c) {
        console.log("b tiene el numero mayor");
    } else if (c > a && c > b) {
        console.log("c tiene el numero mayor");
    }
}
//mayor()

//7. Usar switch case para imprimir el día de la semana basado en un número ingresado por el usuario


function dia(){
    const numerodia = parseInt(document.getElementById('cadena').value);
    switch (numerodia) {
        case 1:
            console.log("el dia es lunes");
            break;
        case 2:
            console.log("el dia es martes");
            break;
        case 3:
            console.log("el dia es miércoles");
            break;
        case 4:
            console.log("el dia es jueves");
            break;
        case 5:
            console.log("el dia es viernes");
            break;
        case 6:
            console.log("el dia es sábado");
            break;
        case 7:
            console.log("el dia es domingo");
            break;
        default:
            console.log("Número inválido. Por favor ingrese un número del 1 al 7.");
    }
}


//8. Pedir al usuario que ingrese una cadena de texto y contar el número de vocales en la cadena.

function contarVocales() {
    const cadena = document.getElementById('cadenaTexto').value;
    let suma = 0;
    for (let i = 0; i < cadena.length; i++) {
        if ('aeiouAEIOU'.includes(cadena[i])) {
            suma++;
        }
    }
    console.log(`El texto tiene ${suma} vocales`);
}


//9. Pedir al usuario que ingrese una calificación (0-100) y mostrar la equivalencia en letras (A, B, C, D, F) usando switch case.


function clificacion(){
    const calificacion = parseInt(document.getElementById('calificacion').value);
    switch (true) {
        case (calificacion >= 90 && calificacion <= 100):
            console.log("La calificación es A");
            break;
        case (calificacion >= 80 && calificacion < 90):
            console.log("La calificación es B");
            break;
        case (calificacion >= 70 && calificacion < 80):
            console.log("La calificación es C");
            break;
        case (calificacion >= 60 && calificacion < 70):
            console.log("La calificación es D");
            break;
        case (calificacion >= 0 && calificacion < 60):
            console.log("La calificación es F");
            break;
        default:
            console.log("Calificación inválida. Por favor ingrese un número del 0 al 100.");
    }
}
 