//Primitivos son inmutables (NO SE PUEDEN MODIFICAR)
console.log(typeof "hola!") // "string"
typeof 42 // "number"
typeof true // "boolean"
console.log(typeof null); // "object" ???
typeof undefined // "undefined"
typeof Symbol // "symbol"
typeof 23n // "bigint"
//Tipo string
let var1 = "refrigeradora";
//métodos de un string
//longitud
console.log("hola".length);
//mayusculas


console.log(var1.toUpperCase());
//minusculas
console.log(var1.toLowerCase());

    //indice 
    console.log(var1.charAt(15))

    var a = var1.charAt(0)
    console.log(a)

    //cadenas ***********

    let nombre = "elie"

    let nuevo_nombre = nombre.at(2)

    console.log(nuevo_nombre)

    //cadena /*** */

    let cadena = "nombre"

    let nueva_cadena = cadena[2]

    console.log(nueva_cadena)

//No es posible la reasignación

let variableTexto = "hola";
variableTexto[0] = "p";
console.log(variableTexto)

//Slicing (pedazo o rebanada) (segmento de una cadena)

let text = "123456789"; //String
let nuevo_texto = text.slice(1, 4)

console.log(nuevo_texto)
//Slice negativo
let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(-12);

console.log(part)
//Substring (Funciona igual que slice)
let str = "123456789";
let part4 = str.substring(1, 4);

console.log(part4)

//Substr (parecido a slice)

let text21 = "Hello";
let text22 = "World";
let text3 = text21.concat(" ", text22);
console.log(text3)

let saludo = text21 +" " + text22;
console.log(saludo)

//Eliminar espacios al inicio y al final en blanco de 
//los elementos de la cadena

let text31 = "      *Hello World!*      ";
let text32 = text31.trim();

console.log(text32)

let texta = "5";
let padded = texta.padStart(4,"0"); //No es muy usado

console.log(padded)
let numer = 4;
console.log(numer + 5);

let texto = "Hello world!";
let result = texto.repeat(2);

console.log(result)
//Modificación de un string en una nueva variable //MUY USADO EN BBDD
let frase = "Please visit Microsoft! Microsoft!";
let newText = frase.replace(/Microsoft/g, "gente");

console.log(newText);

let frase2 = "Please visit Microsoft!";
let nuevoText = frase2.replace(/MICROSOFT/i, "W3Schools");

let textoGatos = "I love cats. Cats are very easy to love. Cats are very popular."

textoGato = textoGatos.replaceAll("Cats","Dogs"); // Devuelve 
console.log(textoGatos)
//No redefinimos solo reescribimos
textoGato = textoGatos.replaceAll("cats","dogs");

console.log(textoGato)



let text5 = "a,b,c,d,e,f";

let text6 = text5.split(",")
console.log(text6)

console.log(text5[2]) //Posicion

console.log("######")
let textoCorto = "hola";

console.log(textoCorto.indexOf("a")) //Indice

