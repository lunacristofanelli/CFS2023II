var telefono = /** @class */ (function () {
    function telefono(estaPrendido, bateriaActual, mandarMensaje, hacerLlamada, prenderApagar, volumenActual) {
        this.estaPrendido = false;
        this.bateriaActual = 0;
        this.mandarMensaje = false;
        this.hacerLlamada = false;
        this.prenderApagar = false;
        this.volumenActual = 0;
    }
    telefono.prototype.prendidoApagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            return ("su celular esta apagado");
        }
        else {
            this.estaPrendido = true;
            return ("su celular esta prendido");
        }
    };
    telefono.prototype.cargarBateria = function () {
        this.bateriaActual += 1;
    };
    telefono.prototype.porcentajeBateria = function (bateria) {
        this.bateriaActual = bateria;
        if (this.bateriaActual === 0) {
            this.estaPrendido = false;
            return ("cargue su celular");
        }
        else
            return ("su celular está cargando");
    };
    telefono.prototype.enviarMensaje = function () {
        if (this.mandarMensaje)
            this.mandarMensaje = false;
        else
            this.mandarMensaje = true;
    };
    telefono.prototype.llamar = function () {
        if (this.hacerLlamada)
            this.hacerLlamada = false;
        else
            this.hacerLlamada = true;
    };
    telefono.prototype.apagarPrender = function () {
        if (this.prenderApagar)
            this.prenderApagar = false;
        else
            this.prenderApagar = true;
    };
    telefono.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    telefono.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return telefono;
}());
var miTelefono = new telefono(true, 10, true, true, true, 5);
console.log(miTelefono);
/*
class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    private mandarMensaje: boolean;
    private hacerLlamada: boolean;
    private prenderApagar: boolean;
    private volumenActual: number;

    public constructor(estaPrendido: boolean, bateriaActual: number, mandarMensaje:boolean, hacerLlamada:boolean, prenderApagar:boolean, volumenActual:number) {
        this.estaPrendido = false;
        this.bateriaActual = 0;
        this.mandarMensaje = false;
        this.hacerLlamada = false;
        this.prenderApagar = false;
        this.volumenActual = 0;
    }

    public prendidoApagado(): void {
        this.estaPrendido = !this.estaPrendido;
    }

    public cargarBateria(cantidad: number): void {
        this.bateriaActual += cantidad;
    }

    public porcentajeBateria(): string {
        if (this.bateriaActual === 0) {
            this.estaPrendido = false;
            return "Cargue su celular";
        } else {
            return "Su celular está cargando";
        }
    }

    public enviarMensaje(): void {
        this.mandarMensaje = !this.mandarMensaje;
    }

    public llamar(): void {
        this.hacerLlamada = !this.hacerLlamada;
    }

    public apagarPrender(): void {
        this.prenderApagar = !this.prenderApagar;
    }

    public subirVolumen(): void {
        this.volumenActual += 1;
    }

    public bajarVolumen(): void {
        this.volumenActual -= 1;
    }

    // public toString(): string {
    //     return `Teléfono ${this.estaPrendido ? 'encendido' : 'apagado'}, Batería: ${this.bateriaActual}%, Volumen: ${this.volumenActual}`;
    // }

}

let miTelefono = new Telefono(true, 20, true, false, false, 15)

console.log(miTelefono);
*/ 
