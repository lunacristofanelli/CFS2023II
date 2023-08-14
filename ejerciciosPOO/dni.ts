import { DocumentacionPersonal } from "./documentacionpersonal";

class Dni extends DocumentacionPersonal{
    protected numero : number;

        constructor(persona: string,anios: number,numero : number,sexoPersona: string, anioDeEmiision : number, anioDeExpiracion: number){
            super(persona,anios,sexoPersona,anioDeEmiision,anioDeExpiracion)
        }

        public imprimir(): void {
            
        }

}