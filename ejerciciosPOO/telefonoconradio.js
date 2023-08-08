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
var telefono_1 = require("./telefono");
var telefonoConRadio = /** @class */ (function (_super) {
    __extends(telefonoConRadio, _super);
    function telefonoConRadio() {
        var _this = _super.call(this, 15) || this;
        _this.frecuenciaActual = 100.5;
        return _this;
    }
    telefonoConRadio.prototype.verfrecuenciaActual = function () {
        return ("la frecuencia actual es " + this.frecuenciaActual);
    };
    telefonoConRadio.prototype.sumarFrecuencia = function () {
        this.frecuenciaActual += 1;
        return this.frecuenciaActual;
    };
    telefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual -= 1;
        return this.frecuenciaActual;
    };
    return telefonoConRadio;
}(telefono_1.Telefono));
var miTelefonoConRadio = new telefonoConRadio;
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.verfrecuenciaActual();
console.log(miTelefonoConRadio);
