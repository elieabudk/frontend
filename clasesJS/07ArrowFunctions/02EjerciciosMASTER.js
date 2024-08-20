//Ejercicios

// Para cada una de las funciones que tenemos aquí, pásalas a Arrow Functions

// Función 1
function sumar(a, b) {
    return a + b;
  }
  
//Solución
const sumar1 = (a,b) =>  a + b 
console.log(sumar1(4,3));


  // Función 2
  function cuadrado(numero) {
    return numero * numero;
  }

  const cuadrado2 = (numero) => numero * numero
  console.log(cuadrado2(5))
  
  // Función 3
  function obtenerUsuario(id) {
    return { id: id, nombre: "Usuario" + id };
  }

  const usuario = (id) => {
    return {id: id, nombre: "usuario" + id}
  }
console.log(usuario(4))

  // Función 4
  function procesarLista(lista) {
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
      resultado.push(lista[i] * 2);
    }
    return resultado;
  }


  const pocesar = (lista) => {
    const resultador = []
    for (let i of lista){
        resultador.push(i * 2)
    }
    return resultador

  }

  
  console.log(pocesar([2,6,5,9]))
  
  console.log("#####")

  
  
  // Función 6
  const objeto = { //Objeto
    id: 10, //Atributo
    obtenerId: function() { //Método
      return this.id;
    }
  };

  console.log("funcion declarada ", objeto.obtenerId())

  const objeto1 = { //Objeto
    id: 10, //Atributo
    dato : () => { //Método
      return objeto1.id;
    }
  };

  console.log("Funcion flecha ",objeto1.dato())
  
  
  // Función 7
  const temporizador = {
    mensaje: "Listo!",
    iniciar:  () => {
      setTimeout (() => {
        console.log(temporizador.mensaje);
      }, 1000);
    }
  };
temporizador.iniciar()
  

//Funciones que toman un tiempo para ejecutarse




//Con funcion flecha


let temporizador2 = setTimeout(() =>{
    console.log("Ejecutando una función luego de 2 segundos");
    },5000);

let bucle = setInterval(() => {
    console.log("Ejecutando de forma infinita");
    },2000)

clearTimeout(temporizador2)
clearInterval(bucle)
