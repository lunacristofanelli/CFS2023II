"use strict";
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
exports.__esModule = true;
var vehiculo_1 = require("./vehiculo");
var Camiones = /** @class */ (function (_super) {
    __extends(Camiones, _super);
    function Camiones(patente, marca, modelo, anio, numRuedas, transmision, capacidadDeCarga, tipoDePeso) {
        var _this = _super.call(this, patente, marca, modelo, anio, numRuedas, transmision) || this;
        _this.capacidadDeCarga = capacidadDeCarga;
        _this.tipoDePeso = tipoDePeso;
        return _this;
    }
    Camiones.prototype.CapacidadDeCarga = function (carga) {
        if (carga <= 25) {
            return (this.capacidadDeCarga, " toneladas");
        }
        else
            return "Su camion es muy pesado, por favor, libere la carga";
    };
    return Camiones;
}(vehiculo_1.Vehiculo));
var miCamion = new Camiones("AE456", "Ford", "CARGO", 2019, 6, "Automatico", 56, "toneladas");
console.log(miCamion.CapacidadDeCarga(50));
