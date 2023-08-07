 class telefono {
     private estaPrendido : boolean;
     private bateriaActual : number;
     private mandarMensaje : boolean;
     private hacerLlamada : boolean;
     private prenderApagar: boolean;
     private volumenActual : number;

     public constructor (estaPrendido: boolean, bateriaActual: number, mandarMensaje:boolean, hacerLlamada:boolean, prenderApagar:boolean, volumenActual:number) {
         this.estaPrendido = false;
         this.bateriaActual = 0;
         this.mandarMensaje = false ;
         this.hacerLlamada = false ;
         this.prenderApagar = false ;
         this.volumenActual = 0;
     }

     public prendidoApagado(): string {
         if (this.estaPrendido){
         this.estaPrendido = false;
         return ("su celular esta apagado")
         }
         else {
         this.estaPrendido = true;
         return ("su celular esta prendido")
         }
     }

     public cargarBateria(): void {
         this.bateriaActual += 1;
     }

     public porcentajeBateria(bateria: number): string{
         this.bateriaActual = bateria;
         if (this.bateriaActual === 0){
         this.estaPrendido = false
         return ("cargue su celular")
         }
         else
         return ("su celular está cargando")
     }
    


     public enviarMensaje () : void {
         if (this.mandarMensaje)
         this.mandarMensaje = false;
         else
         this.mandarMensaje = true;
     }

     public llamar () : void {
         if (this.hacerLlamada) 
         this.hacerLlamada = false;
         else
         this.hacerLlamada = true;
     }

     public apagarPrender () : void {
         if (this.prenderApagar)
         this.prenderApagar = false;
         else
         this.prenderApagar = true;
     }

     public subirVolumen () : void {
         this.volumenActual += 1
     }

     public bajarVolumen () :void {
         this.volumenActual -= 1
     }
 }

 let miTelefono = new telefono(true, 10, true, true, true, 5);

 console.log(miTelefono);


