import { Telefono } from "./telefono"


class telefonoConRadio extends Telefono {
    private frecuenciaActual: number;

    public constructor() {
        super(15)
        this.frecuenciaActual = 100.5;
    }


    public verfrecuenciaActual(): string {
        return ("la frecuencia actual es " + this.frecuenciaActual)
    }

    public sumarFrecuencia(): number {
        this.frecuenciaActual += 1;
        return this.frecuenciaActual;
    }

    public bajarFrecuencia(): number {
        this.frecuenciaActual -= 1;
        return this.frecuenciaActual;
    }
}

let miTelefonoConRadio = new telefonoConRadio; 

miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.verfrecuenciaActual();
console.log(miTelefonoConRadio);
