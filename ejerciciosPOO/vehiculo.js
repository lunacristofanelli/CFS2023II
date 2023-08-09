"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, anio, numRuedas, transmision) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.numRuedas = numRuedas;
        this.transmision = transmision;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, anio) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.listar = function () {
        console.log("Lista de Automotores");
        console.log("----------------------------------------------------------");
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") Patente: ").concat(auto.getPatente()));
        });
        console.log();
        console.log();
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var index = 0; index < this.autos.length; index++) {
            var autoActual = this.autos[index];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = index;
            }
        }
        // let indiceAuto = this.autos.findIndex((autoActual) => {
        //   return autoActual.getPatente() == auto.getPatente();
        // });
        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
        }
    };
    return RegistroAutomotor;
}());
var ra = new RegistroAutomotor();
var auto1 = new Auto('AB654RO', 'Ford', 'Focus', 2018);
ra.darDeAlta(auto1);
ra.darDeAlta(new Auto('AB654RQ', 'Ford', 'Fairline', 2019));
ra.darDeAlta(new Auto('AB444RQ', 'Nissan', 'Sentra', 2016));
ra.darDeAlta(new Auto('AB699RQ', 'Mazda', 'Zrx', 2014));
ra.darDeAlta(new Auto('BB654RQ', 'Audi', 'A3', 2019));
ra.darDeAlta(new Auto('AF636RQ', 'Fiat', 'Chronos', 2023));
ra.listar();
ra.actualizar(new Auto('AB699RQ', 'Mazda', 'Sirocco', 2015));
ra.listar();
