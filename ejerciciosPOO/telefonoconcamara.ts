import { Telefono } from "./telefono"

class TelefonoConCamara extends Telefono {
    constructor() {
        super(30);
    }
    
    sacarFoto () : string {
        return "haz sacado una foto";
    }
}

let miTelefonoConCamara = new TelefonoConCamara; 

miTelefonoConCamara.hacerLlamada("juan");
miTelefonoConCamara.mandarMensaje("hola como estas", "juan");
miTelefonoConCamara.sacarFoto();
console.log(miTelefonoConCamara);
