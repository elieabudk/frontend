//Herencia prototipica

//Usando POO la creación de instancias de clases
const uno = 4;
//Syntax sugar
class Animal{//Las clases no reciben parámetros
    //Constuctor
    constructor(colorOjos, colorPelo){
        //Inicializar atributos
        this.colorOjos = colorOjos;
        this.colorPelo = colorPelo;
    }
    //Métodos
    correr(){
        console.log("estoy corriendo")
    }
}
//Herencia de un prototipo padre
class Perro extends Animal{
    constructor(nombre, colorOjos, colorPelo){
        super(colorOjos, colorPelo)
        this.nombre = nombre
    }
    ladrar(){
        console.log("Estoy ladrando")
    }

    correr(){
        console.log("Estoy corriendo porque soy perrito")
    }
}

//const perrito = new Perro("max", "azul", "gris");

function Animal1(colorOjos, colorPelo){
    //Constuctor
        //Inicializar atributos
        this.colorOjos = colorOjos;
        this.colorPelo = colorPelo;
}

Animal1.prototype.saludar = function(){
    console.log("estoy saludando")
}

//Herencia de un prototipo padre
function Perro1(nombre, colorOjos, colorPelo){
        Animal1.call(this,colorOjos, colorPelo)
        this.nombre = nombre
}
//Unir el prototipo del hijo al padre
Perro1.prototype = Object.create(Animal1.prototype);
//Asignar el constructor del perro
Perro1.prototype.constructor = Perro1;
//Agregamos los métodos desde fuera del constructor
//Luego de hacer la herencia
Perro1.prototype.comer = function(){
    console.log("estoy comiendo")
}


const perrito2 = new Perro1("beto", "negros", "beige");



//Una instancia de la clase Animal
//const perro = new Animal("azules", "negro");
