## Segunda parte tutorial

## Bucles 

1. Bucle for
El bucle for es útil cuando sabes cuántas veces necesitas repetir un bloque de código.

Sintaxis:

```js
for (inicialización; condición; incremento) {
  // Código a ejecutar
}

//Ejemplo:

javascript
Copiar código
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```
En este ejemplo, el bucle imprime los números del 0 al 4.

2. Bucle while
El bucle while ejecuta un bloque de código mientras una condición sea verdadera.

Sintaxis:

```js
while (condición) {
  // Código a ejecutar
}
//Ejemplo:

javascript

let i = 0;
while (i < 5) {
  console.log("Número:", i);
  i++;
}
```
En este ejemplo, el bucle imprime los números del 0 al 4.

3. Bucle do...while
El bucle do...while es similar al while, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de ejecutar el bloque.

Sintaxis:
```js

do {
  // Código a ejecutar
} while (condición);
//Ejemplo:


let i = 0;
do {
  console.log("Número:", i);
  i++;
} while (i < 5);
En este ejemplo, el bucle imprime los números del 0 al 4.
```
4. Bucle for...in
El bucle for...in recorre todas las propiedades enumerables de un objeto.

Sintaxis:

```js
for (let variable in objeto) {
  // Código a ejecutar
}
//Ejemplo:

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

```
En este ejemplo, el bucle imprime todas las propiedades del objeto persona.

5. Bucle for...of
El bucle for...of recorre los valores de un objeto iterable como un array, una cadena de texto, etc.

Sintaxis:

```js
for (let valor of iterable) {
  // Código a ejecutar
}
Ejemplo:

let numeros = [10, 20, 30];

for (let numero of numeros) {
  console.log(numero);
}
```
En este ejemplo, el bucle imprime los valores del array numeros.