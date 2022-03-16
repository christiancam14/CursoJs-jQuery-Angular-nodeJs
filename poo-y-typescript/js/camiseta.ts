// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// Clase (molde del objeto)


class Camiseta implements CamisetaBase{
    static estampacion() {
        throw new Error("Method not implemented.");
    }
    // Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha( capucha: boolean ){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

var camisa = new Camiseta("Rojo", "Polo", "Arturo calle", "L", 50000);
Camiseta.estampacion();

var sudadera_nike = new Sudadera("Negra", "Larga", "Nike", "L", 50000);
sudadera_nike.setCapucha(true);

console.log(camisa, sudadera_nike);