// import { miTelefono } from './telefono';

class TelefonoConCamara extends telefono {
    public sacarFoto: boolean;
    private camaraTrasera: number;
    private camaraDelantera: number;

    constructor(camaraTrasera: number, camaraDelantera: number) {
        super(true, 10, true, true, true, 5);
        this.sacarFoto = true;
        this.camaraTrasera = camaraTrasera;
        this.camaraDelantera = camaraDelantera;
    }

    public foto(): void {
        this.sacarFoto = !this.sacarFoto;
    }

    public getMegapixelesCamaraTrasera(): number {
        return this.camaraTrasera;
    }

    public getMegapixelesCamaraDelantera(): number {
        return this.camaraDelantera;
    }
}

let miTelefonoConCamara = new TelefonoConCamara (8,5);
console.log (miTelefonoConCamara);
