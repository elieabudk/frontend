# Tutorial básico elementos en html
Etiquetas básicas de html

Inserción de archivo externo de css y javascript

```html
<link rel="stylesheet" href="styles.css">
	<script src="script.js"></script>
```
## Tipos de datos javascript

```javascript
let entero = 42;
let decimal = 3.14;
let texto = "Hola";
let verdad = true;
let indefinido;
let nulo = null;
let simbolo = Symbol('desc');
let bigint = BigInt(9007199254740991);

console.log(typeof entero);     // "number"
```
## Tipos de datos var, let y const

var: Tiene un alcance de función o global y puede ser redeclarada y reasignada.

```js
 var tester = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
    }
    console.log(hola); // error: hola is not defined
```
Hoising de var
Entonces las variables con var se elevan a la parte superior de su ámbito y se inicializan con un valor de undefined.

```js
  var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"
```
let: Tiene un alcance de bloque y puede ser reasignada, pero no redeclarada dentro del mismo bloque.

```js
 let saludar = "dice Hola";
   let tiempos = 4;

   if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);// "dice Hola tambien"
    }
   console.log(hola) // hola is not defined
```
bien

```js
let saludar = "dice Hola";
    saludar = "dice Hola tambien";
```
error
```js
let saludar = "dice Hola";
    saludar = "dice Hola tambien";
```

Hoisting de let
Al igual que  var, las declaraciones let se elevan a la parte superior. A diferencia de var que se inicializa como undefined, la palabra clave let no se inicializa. Sí que si intentas usar una variable let antes de declararla, obtendrás un Reference Error.

const: Tiene un alcance de bloque y no puede ser reasignada ni redeclarada.

```js
    const saludar = "dice Hola";
    saludar = "dice Hola tambien";// error: Assignment to constant variable. 
    //Otro ejemplo
    const saludar = "dice Hola";
    const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared
```

## Condicionales

Estructura básica

```js
if (condicion es verdadera) {
   // el código se ejecuta
} else {
   // el código se ejecuta
}

```

Sentencias if...else

```js
const edad = 18;

if (edad >= 18) {
  console.log("Nick es un adulto.");
} else {
  console.log("Nick es un ninio.");
}
```

ejemplo de uso

```js
const edad = 18;

if (edad < 18) {
  console.log("Alice es menor de 18 anios.");
} else if (edad >= 18 && edad <= 21) {
  console.log("Alice tiene entre 18 y 21 anios de edad.");
} else {
  console.log("Alice tiene mas de 21 anios.");
}

//Otro ejemplo

const edad = 17;
const poseeCoche = true;

if (edad >= 16 && poseeCoche) {
  console.log("Jerry es lo suficiente mayor para conducir y tiene su propio coche.");
} else {
  console.log("Jerry no conduce.");
}

//Ejemplo con OR

const elNovioEstaPangando = false;
const estaEnVenta = false;

if (elNovioEstaPangando || estaEnVenta) {
  console.log("Jesse ira de compras.");
} else {
  console.log("Jesse no ira de compras.");
}

//Ejemplo con negación

const elNovioEstaPangando = true;
const estaEnVenta = false;

if (!elNovioEstaPangando || estaEnVenta) {
  console.log("JJesse ira de compras.");
} else {
  console.log("Jesse no ira de compras.");
}
```

Operador ternario

Sintaxis básica

```js
condicion ? if condicion es verdadera : if condicion es falsa
```

Ejemplo de uso

```js
const edad = 32;
const ciudadano = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(ciudadano);
```


Sentencias switch case

````js
const mascota = "perro";
 
switch (mascota) {
  case "lagarto":
    console.log("Tengo un lagarto");
    break;
  case "perro":
    console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "serpiente":
    console.log("Tengo una serpiente");
    break;
  case "loro":
    console.log("Tengo un loro");
    break;
  default:
    console.log("No tengo mascota");
    break;
}

```


