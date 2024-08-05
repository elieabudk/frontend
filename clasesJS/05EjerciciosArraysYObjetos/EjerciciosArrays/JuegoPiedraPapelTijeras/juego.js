//Juego piedra papel o tijeras

/*
Piedra, papel, tijera III

Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los
 valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el 
 nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. 
 El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) 
 sumando un punto a la jugadora que gane la ronda. 
Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:*/


let nombre_jugadora_1= "Ada"
const jugadas_Ada= ["piedra", "papel", "papel", "piedra", "tijera"]
let contador_ada = 0

let nombre_jugadora_2= "Grace"
const jugadas_Grace= ["papel", "piedra", "tijera", "tijera", "papel"]
let contador_grace=0


for(let i=0; i<jugadas_Ada.length; i++){ //Solo cuando tienen la misma dimensión
    
    //Condiciones
    if((jugadas_Ada[i] == "piedra" && jugadas_Grace[i] == "papel") || (jugadas_Ada[i] == "papel" && jugadas_Grace[i] == "tijera") || (jugadas_Ada[i] == "tijera" && jugadas_Grace[i] == "piedra")){
        contador_grace++;
        
    } else if((jugadas_Ada[i] == "papel" && jugadas_Grace[i] == "piedra") || (jugadas_Ada[i] == "tijera" && jugadas_Grace[i] == "papel") || (jugadas_Ada[i] == "piedra" && jugadas_Grace[i] == "tijera")){
        contador_ada++;
        
    }else{
        
    }


    //Impresion de datos
   
}
if (contador_ada>contador_grace){
    console.log("gano ada con puntos:", contador_ada)   
}
else {
    (console.log("gano grace con puntos:",contador_grace ))
}


/*

Crear un programa que pida ingresar números separados por espacios y 
devuelva un mensaje con el array inverso. Ejemplo:*/
                                    


let datos = "5 7 99 34 54 2 12"
const lista = datos.split(" ")
console.log(lista)
console.log(lista.length)
const listareversa = []
// inicio: 7 ----condicion -1>-1
for (let i = (lista.length-1); i >-1; i--){
    listareversa.push(lista[i])
    
}




console.log(listareversa)
