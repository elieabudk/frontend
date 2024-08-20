/* Ejercicio 2

Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con 
claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo

Pista: usar typeof para determinar el tipo*/


const datosAleatorios = [
    "Paisa",
    66,
    "Qué tal estás",
    {},
    { name: 'Bienve' },
    [1, 2, 3],
    ['Hola que tal'],
    true
  ]


function tipos(arr) {
    return {
        number: arr.filter(e => typeof e === "number"),
        string: arr.filter(e=>typeof e === "string"),
        object: arr.filter(e=>typeof e ==="object"),

    }

}
console.log(tipos(datosAleatorios))


/* Ejercicio 3

Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack

Pista: usar filter

*/
const alumnos = [
    {
      id: 1,
      nombre: 'Zamora',
      edad: 15,
      master: 'FullStack'
    },
    {
      id: 2,
      nombre: 'Jose Luís',
      edad: 22,
      master: 'BlockChain'
    },
    {
      id: 3,
      nombre: 'Lucía',
      edad: 19,
      master: 'IA'
    },
    {
      id: 4,
      nombre: 'Felipe',
      edad: 49,
      master: 'FullStack'
    },
    {
      id: 5,
      nombre: 'María',
      edad: 17,
      master: 'IA'
    },
    {
      id: 6,
      nombre: 'Cecilia',
      edad: 16,
      master: 'FullStack'
    },
    {
      id: 7,
      nombre: 'Cecilia',
      edad: 16,
      master: 'BlockChain'
    }
  ];
  
 
  function getFullStackStudents(arr){
    return arr.filter(e => e.master === 'BlockChain')

  }

  console.log(getFullStackStudents(alumnos))



  /* Ejercicio 4

Dado el array de alumnos, crear una función llamada nStudentFullStack que 
nos devuelva el número de usuarios que pertenecen a dicha formación. 
De igual manera para el resto de las formaciones*/


function nStudentFullStack(arr) {
    return {
        fullstack : arr.filter(e => e.master === "FullStack").length,
        IA : arr.filter(e => e.master === "IA").length,
        BlockChain : arr.filter(e => e.master === "BlockChain").length,
    }
}

console.log(nStudentFullStack(alumnos))


/* Ejercicio 5

Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el 
array por parámetro y devuelva un array únicamente de los mayores de edad

*/

function mayor(arr) {
  return arr.filter(e=>e.edad >= 18)

  }

console.log(mayor(alumnos))