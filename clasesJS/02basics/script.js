//Dada una cadena, 
//verifica si su longitud es mayor a 10 caracteres

let cadena = "Me gusta progamar en Javascript"


if (cadena.length > 10 ) {
    console.log("el texto tiene mas de 10 caracteres")
}
    else {
    console.log("el texto tiene menos caracteres")

}    
//La divida en palabras y me diga cuántas palabras tiene

let lista_cadena = cadena.split(" ")

for (var conteo = 0; conteo < lista_cadena.length; conteo++) {
}
console.log(lista_cadena)
console.log("la cantidad de palabras es : " + conteo)


let lista_nueva = lista_cadena.length
console.log("nueva cantidad con metodo length " + lista_nueva)

//cuántas veces aparece la letra "a"

let cadenaNueva = "Me gusta aaprogamar en Javascript";
var contador = 0
for (var conteo =0; conteo < cadenaNueva.length; conteo++) {
    if (cadenaNueva[conteo] === "a"){
        contador++
        
    }
} 
console.log("la cantidad de la letra a es :", contador)