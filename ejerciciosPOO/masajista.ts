import { Persona } from "./futbol";

class Masajista extends Persona {
    public constructor(dni: number, nombre: string, edad: number) {
        super(dni, nombre, edad, "Masajista");
    }
}

let masa1 = new Masajista(22222, "Jose Velez", 58);
console.log(masa1);