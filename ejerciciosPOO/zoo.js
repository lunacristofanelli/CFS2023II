var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalDelZoo = /** @class */ (function () {
    function AnimalDelZoo(Nombre, raza) {
        this.nombre = Nombre;
        this.especie = raza;
    }
    AnimalDelZoo.prototype.emitirSonido = function () {
    };
    AnimalDelZoo.prototype.mostrarInfo = function () {
        return (this.nombre, this.especie);
    };
    return AnimalDelZoo;
}());
var Animal = new AnimalDelZoo("pandora", "panda");
Animal.mostrarInfo;
console.log(Animal);
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    function Leon(Nombre, especie, tipoDePelaje, edad) {
        var _this = _super.call(this, "leon", "felino") || this;
        _this.pelaje = tipoDePelaje;
        _this.anios = edad;
        return _this;
    }
    Leon.prototype.emitirSonido = function () {
        return "Rugir";
    };
    Leon.prototype.mostrarInfo = function () {
        return (this.nombre, this.especie);
    };
    return Leon;
}(AnimalDelZoo));
var Lion = new Leon("Marcelo", "Felino", "Largo y rubio", 27);
console.log(Lion);
var Elefante = /** @class */ (function (_super) {
    __extends(Elefante, _super);
    function Elefante(Nombre, especie, cuantoPesa, Trompa, cuantoMide) {
        var _this = _super.call(this, "Arturo", "Elefante") || this;
        _this.peso = cuantoPesa;
        _this.largoTrompa = Trompa;
        _this.altura = cuantoMide;
        return _this;
    }
    Elefante.prototype.emitirSonido = function () {
        return "Barritar";
    };
    Elefante.prototype.mostrarInfo = function () {
        return (this.nombre, this.especie);
    };
    Elefante.prototype.realizarTruco = function () {
        return ("Come maní");
    };
    return Elefante;
}(AnimalDelZoo));
var Marcelo = new Elefante("Arturo", "Elefante", 255, "120cm", "2 metros");
console.log(Marcelo);
var Delfin = /** @class */ (function (_super) {
    __extends(Delfin, _super);
    function Delfin(Nombre, especie, queCome, dondeHabita, grupo) {
        var _this = _super.call(this, "piolin", "Delfin") || this;
        _this.alimentacion = queCome;
        _this.habitat = dondeHabita;
        _this.clasificacion = grupo;
        return _this;
    }
    Delfin.prototype.emitirSonido = function () {
        return "Silbidos y Chasquidos";
    };
    Delfin.prototype.mostrarInfo = function () {
        return (this.nombre, this.especie);
    };
    return Delfin;
}(AnimalDelZoo));
var Piolin = new Delfin("Piolin", "Delfin", "Peces,es carnivoro", "Oceanos", "Mamifero");
console.log(Piolin);
var animalesEnElZoo = [Lion, Marcelo, Piolin];
for (var _i = 0, animalesEnElZoo_1 = animalesEnElZoo; _i < animalesEnElZoo_1.length; _i++) {
    var Animal_1 = animalesEnElZoo_1[_i];
    console.log(Animal_1.mostrarInfo());
    console.log(Animal_1.emitirSonido());
    console.log();
}
