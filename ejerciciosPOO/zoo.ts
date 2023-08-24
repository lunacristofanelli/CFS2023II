

interface Animal {
    emitirSonido(): void
    mostrarInfo(): void
}

interface Truco{
    realizarTruco(): void
}

class AnimalDelZoo implements Animal {
    protected nombre: string;
    protected especie: string;

    constructor(Nombre: string, raza: string) {
        this.nombre = Nombre;
        this.especie = raza;
    }

    public emitirSonido(): void {
    }

    public mostrarInfo(): string {
        return (this.nombre, this.especie)
    }

}

let Animal = new AnimalDelZoo("pandora", "panda");
Animal.mostrarInfo;
console.log(Animal);

class Leon extends AnimalDelZoo {
    private anios: number;
    private pelaje: string;

    constructor(Nombre, especie, tipoDePelaje, edad) {
        super("leon", "felino")
        this.pelaje = tipoDePelaje;
        this.anios = edad;
    }

    public emitirSonido(): string {
        return "Rugir";
    }

    public mostrarInfo(): string {
        return (this.nombre, this.especie)
    }
}

let Lion = new Leon("Marcelo", "Felino", "Largo y rubio", 27)
console.log(Lion);

class Elefante extends AnimalDelZoo implements Truco {
    private peso: number;
    private largoTrompa: string;
    private altura: string;

    constructor(Nombre, especie, cuantoPesa, Trompa, cuantoMide) {
        super("Arturo", "Elefante")
        this.peso = cuantoPesa;
        this.largoTrompa = Trompa;
        this.altura = cuantoMide;
    }

    public emitirSonido(): string {
        return "Barritar";
    }

    public mostrarInfo(): string {
        return (this.nombre, this.especie)
    }

    public realizarTruco () : string{
        return ("Come maní")
    } 
}

let Marcelo = new Elefante("Arturo","Elefante",255,"120cm", "2 metros")
console.log(Marcelo);


class Delfin extends AnimalDelZoo{
    private alimentacion : string;
    private habitat : string;
    private clasificacion : string;

    constructor (Nombre, especie, queCome, dondeHabita, grupo){
        super ("piolin","Delfin")
        this.alimentacion = queCome;
        this.habitat = dondeHabita;
        this.clasificacion = grupo;
    }

    public emitirSonido(): string {
        return "Silbidos y Chasquidos";
    }

    public mostrarInfo(): string {
        return (this.nombre, this.especie)
    }

}

let Piolin = new Delfin("Piolin","Delfin","Peces,es carnivoro","Oceanos","Mamifero",)
console.log(Piolin);


const animalesEnElZoo: Animal[] = [Lion, Marcelo , Piolin];

for (const Animal of animalesEnElZoo) {
    console.log(Animal.mostrarInfo());
    console.log(Animal.emitirSonido());
    console.log();
}