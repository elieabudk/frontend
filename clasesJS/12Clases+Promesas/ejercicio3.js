/*
Ejercicio 3: órdenes de compra

Objetivo: Modelar un sistema simple para gestionar pedidos en una tienda, utilizando promesas,
 async/await y herencia.
Descripción:
Clase Order:
Debe tener la propiedad items (un arreglo de objetos de producto).
Implementar el método getTotalPrice(), que devuelve una promesa que resuelve con el precio 
total del pedido después de un retraso simulado de 1 segundo.
Clase PriorityOrder:
Debe heredar de la clase Order y tener una propiedad adicional deliveryTime.
Implementar el método getDeliveryTime(), que devuelve una promesa que resuelve con el tiempo 
de entrega del pedido después de un retraso simulado de 1 segundo.
//Junior
Función processOrder():
Recibe un objeto Order como parámetro.
Utiliza async/await para calcular el precio total del pedido y, si es un pedido prioritario, 
también para obtener el tiempo de entrega.
Imprime la información del pedido en la consola.
*/

class Order {
    constructor(array){
        this.array = array
    }
    getTotalPrice(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (!Array.isArray(this.array) || this.array.length === 0) {
                    reject(new Error('El arreglo de items está vacío'));
                } else {
                    const total = this.array.reduce((acc, item) => acc + item.price, 0);
                    resolve(total);
                }
            },3000)
        })

    }
}  

class PriorityOrder extends Order{
    constructor(array,deliverytime){
        super(array)
        this.deliverytime= deliverytime
    }  
    getDeliveryTime(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (!this.deliverytime) {
                    reject(new Error('El tiempo de entrega no está definido'));
                } else {
                    resolve(`Su pedido se va a demorar: ${this.deliverytime}`);
                }
            },3000)
        })
    }
    }


    async function processOrder(orden, deliverytime){
        try {
            const objeto = new Order(orden);
            const totalPrice = await objeto.getTotalPrice();
            console.log("Precio total:", totalPrice);
        
            //Verificar si es un pedido prioritario
            if (deliverytime) {
                const priorityOrder = new PriorityOrder(orden, deliverytime);
                const deliveryTime = await priorityOrder.getDeliveryTime();
                console.log(deliveryTime);
            }
        } catch (error) {
            console.error('Error al procesar el pedido:', error.message);
        }
    }

processOrder([{producto: "zapato"}], "1 hora")