export class DocumentacionPersonal {
    protected persona : string;
    protected nombrePersona : string;
    protected anios : number;
    protected sexoPersona : string;
    protected anioDeEmision : number;
    protected anioDeExpiracion : number;

        constructor (persona : string, anios : number, sexoPersona : string, aniodeEmision : number, aniodeExpiracion : number){
            this.persona = this.persona;
            this.anios = this.anios; 
            this.sexoPersona = this.sexoPersona;
            this.anioDeEmision = this.anioDeEmision;
            this.anioDeExpiracion = this.anioDeExpiracion;
        }

        public imprimir (){
            
        }
}