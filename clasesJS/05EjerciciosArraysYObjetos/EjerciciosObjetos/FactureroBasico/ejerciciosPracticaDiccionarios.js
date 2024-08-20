/**
 * Reemplazar valores según un criterio:
 Crea un objeto que represente los inventarios de una tienda 
 con productos y sus cantidades.
Escribe una función que reemplace todas las cantidades menores a un cierto 
umbral con un valor predeterminado (por ejemplo, 0 o "agotado").
 */

let inventario = {
    "Producto1": 10,
    "Producto2": 20,
    "Producto3": 30,
    "Producto4":0
}
let umbral = 0;
let valor = "agotado"

const Cambiar_valor = () => {
    for (let i in inventario){
        if(inventario[i] === umbral){
            inventario[i] = valor;
        }
    }
    console.log(inventario);
};
Cambiar_valor();
