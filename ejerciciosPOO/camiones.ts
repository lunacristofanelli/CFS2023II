import { Vehiculo } from "./vehiculo";

class Camiones extends Vehiculo{
    private capacidadDeCarga : number;
    private tipoDePeso : string; 
    
    constructor(patente:string , marca: string, modelo: string, anio: number, numRuedas: number , transmision: string, capacidadDeCarga: number, tipoDePeso: string){
        super(patente , marca, modelo, anio, numRuedas , transmision)
        this.capacidadDeCarga = capacidadDeCarga;
        this.tipoDePeso = tipoDePeso; 
        
    }

    public CapacidadDeCarga (carga:number) : string{
        if (carga <= 25){
            return (this.capacidadDeCarga, " toneladas")
        }else 
            return "Su camion es muy pesado, por favor, libere la carga"
        }

}

let miCamion = new Camiones ("AE456", "Ford", "CARGO", 2019, 6, "Automatico", 56, "toneladas" );
console.log(miCamion.CapacidadDeCarga(50));