import { DocumentacionPersonal } from "./documentacionpersonal";


class CarnetDeConducir extends DocumentacionPersonal{
    
    private clase : string;

        constructor(clase: string,persona,anios,sexoPersona,anioDeEmision,anioDeExpiracion){
            super(persona,anios,sexoPersona,anioDeEmision,anioDeExpiracion)
            this.clase = this.clase; 
        }

        public imprimir(): void {
            
        }
}