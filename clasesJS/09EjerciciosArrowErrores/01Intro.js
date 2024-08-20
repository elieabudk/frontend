
//Contdor con arros Function

/* Crear una función que se arrow functions para contar del 1 al 10
y mostrar cada número en la consola, con un retraso de 1 segundo entre cada uno (SetTimeout)*/


//Declaración de la arrow function

const contador = () => {

    //Set interval (Tomar un tiempo para ejecutar una función INFINITAMENTE)
     //Asignamos una variable para poder detenerlo
    
    let contador = 1;
    
    const intervalo = setInterval(()=>{
        console.log(contador);
        contador++;
        if (contador === 5){
             clearInterval(intervalo);
        }
    },1000);
    //Imprimo la variable contador fuera del setInternval
    console.log("Iteracion", contador);
    
}

//contador();

const contadorTimeOut = () => {

    //Set interval (Tomar un tiempo para ejecutar una función INFINITAMENTE)
     //Asignamos una variable para poder detenerlo
    
    for (let i=0 ; i<5; i++){
    
        const intervalo = setTimeout(()=>{
        console.log(i);
        
    },1000*i);
}
    //Imprimo la variable contador fuera del setInternval
    console.log("Iteracion", contador);
}   


//contadorTimeOut()

const intervalo2 = setTimeout(()=>{
    console.log(1);
    
},1000);

const intervalo3 = setTimeout(()=>{
    console.log(2);
    
},1050);

const intervalo4 = setTimeout(()=>{
    console.log(3);
    
},3000);