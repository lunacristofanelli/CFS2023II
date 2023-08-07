class telefonoConRadio extends telefono{
    private frecuenciaActual : number;

    public constructor (frecuenciaActual : number) {
        super(true, 10, true, true, true, 5)
        this.frecuenciaActual = 0;
    }

    public sumarFrecuencia (): void{
        this.frecuenciaActual += 1;
    }

    public bajarFrecuencia (): void{
        this.frecuenciaActual -= 1;
    }
}

let miTelefonoConRadio = new telefonoConRadio(100.5)
console.log (miTelefonoConRadio);
