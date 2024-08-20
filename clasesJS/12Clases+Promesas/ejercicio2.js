/*
Ejercicio 2: Gestión de Empleados

Objetivo: Modelar un sistema simple para gestionar información de empleados en una empresa,
 utilizando promesas, async/await y herencia.
Descripción:
Clase Employee:
Debe tener las propiedades name y salary.
Implementar el método getEmployeeInfo(), que devuelve una promesa que resuelve con una cadena
 de texto que incluye el nombre y el salario del empleado después de un retraso simulado de 1
  segundo.
Clase Manager:
Debe heredar de la clase Employee y tener una propiedad adicional team.
Implementar el método getTeamInfo(), que devuelve una promesa que resuelve con el nombre del
equipo del gerente después de un retraso simulado de 1 segundo.
Función displayEmployeeInfo():
Recibe un objeto Employee como parámetro.
Utiliza async/await para obtener la información del empleado, incluyendo la información del
 equipo si es un gerente.
Imprime la información del empleado en la consola.
*/



class Employee {
    constructor(nombre, salario){
        this.nombre = nombre
        this.salario=salario
    }
    getEmployeeInfo(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(`el empleado es: ${this.nombre} y tiene un salario de ${this.salario}`);
            },3000)
        })
    }
}

class Manager extends Employee {
    constructor(nombre, salario, equipo){
        super(nombre, salario)
        this.equipo = equipo
    }
    getTeamInfo(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(`el empleado es: ${this.nombre} y tiene un salario de ${this.salario} y pertenece al equipo ${this.equipo}`);
            },3000)
        })
    }
}

async function main(){
    const info_empleado = new Employee("jose","1500")
    const info = await info_empleado.getEmployeeInfo()
    console.log(info)

    const objeto = new Manager("antonio", "700", "5")
    const obg  = await objeto.getTeamInfo()
    console.log(obg)
    
}

main()