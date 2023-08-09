import { Persona } from "./futbol";

class Entrenador extends Persona {
    public constructor(dni: number, nombre: string, edad: number) {
        super(dni, nombre, edad, "Entrenador");
    }
}

let dt = new Entrenador(1111111, "Coco Basile", 80);
console.log (dt);