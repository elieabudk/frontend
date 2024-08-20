
/*
Ejercicio 1: Tienda de Productos

Objetivo: Crear un sistema simple para manejar información de productos en una tienda, 
utilizando promesas, async/await y herencia.
Descripción:
Clase Product:
Debe tener las propiedades name y price.
Implementar el método getDetails(), que devuelve una promesa que resuelve con una cadena 
de texto que incluye el nombre y el precio del producto después de un retraso simulado de 1 
segundo.
Clase ElectronicProduct:
Debe heredar de la clase Product y tener una propiedad adicional brand.
Implementar el método getBrand(), que devuelve una promesa que resuelve con la marca del 
producto después de un retraso simulado de 1 segundo.
Función displayProductDetails():
Recibe un objeto Product como parámetro.
Utiliza async/await para obtener los detalles del producto, incluyendo la marca si es un 
producto electrónico.
Imprime los detalles del producto en la consola.
*/

class Product {
    //atributos
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    //Métodos
    getDetails(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(`Name: ${this.name}, Price: ${this.price}`);
            },1000)
        })
    }
}


//Herencia

class ElectronicProduct extends Product{
    constructor(name, price, brand){
        super(name, price)
        this.brand= brand
    }
    getBrand(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(`la marca es: ${this.brand}`);
            },3000)
        })

    }

}



async function main(){
    const objeto = new Product("zapatos", 5)

    const details = await objeto.getDetails()
    console.log(details)

    const objeto2 = new ElectronicProduct("telefono","150", "samsung")
    const get = await objeto2.getBrand()
    console.log(get)
}

main()



