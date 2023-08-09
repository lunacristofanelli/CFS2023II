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
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos(patente, marca, modelo, anio, numruedas, transmision, velocidadMax) {
        var _this = _super.call(this, patente, marca, modelo, anio, numruedas, transmision) || this;
        _this.velocidadMax = velocidadMax;
        return _this;
    }
    Motos.prototype.cambiarTransmision = function () {
        if (this.transmision == "Manual") {
            this.transmision = "Automatica";
        }
        else {
            this.transmision = "Manual";
        }
        return "El motor de tu vehiculo cambio a " + this.transmision;
    };
    return Motos;
}(vehiculo_1.Vehiculo));
var miMoto = new Motos("AB123", "Zuzuki", "GSX", 2020, 2, "Manual", 350);
console.log(miMoto.cambiarTransmision());
console.log(miMoto);
