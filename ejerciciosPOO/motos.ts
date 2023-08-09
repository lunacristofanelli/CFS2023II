import { Vehiculo } from "./vehiculo";

class Motos extends Vehiculo {

    constructor(patente: string, marca: string, modelo: string, anio: number, numruedas: number, transmision: string, velocidadMax: number) {
        super(patente, marca, modelo, anio, numruedas, transmision)
        this.velocidadMax = velocidadMax;
    }

    public cambiarTransmision(): string {
        if (this.transmision == "Manual"){
            this.transmision = "Automatica"
        } else {
            this.transmision = "Manual"
        }
        return "El motor de tu vehiculo cambio a " + this.transmision;
    }
}


let miMoto = new Motos("AB123", "Zuzuki", "GSX", 2020, 2, "Manual", 350)
console.log(miMoto.cambiarTransmision());
console.log(miMoto);