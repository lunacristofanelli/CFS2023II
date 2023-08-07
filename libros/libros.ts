class Libro {
    private nombre : string;
    private numPaginas: number;
    private autor : string;
    private numCapitulos : number;
    private editorial : string;
    private comprar : boolean; 


     constructor(nombre: string, numPaginas: number, autor: string, numCapitulos: number, editorial:string){
        this.nombre = nombre;
        this.numPaginas = 0;
        this.autor = autor;
        this.numCapitulos = 0;
        this.editorial = editorial;
    }


    public paginas(): void {
        this.numPaginas += 1;
    }

    public capitulos(): void{
        this.numCapitulos += 1;

    }

    public comprarLibro(): void{
        if this.comprar = true;
    }
}

    let unLibro: Libro = new Libro("Celeste",300,"Juan Perez",10,"Alfaguara");
    unLibro.comprarLibro()
    console.log("compraste", unLibro);

