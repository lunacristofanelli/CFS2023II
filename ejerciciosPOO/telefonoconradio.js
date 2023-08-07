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
var telefonoConRadio = /** @class */ (function (_super) {
    __extends(telefonoConRadio, _super);
    function telefonoConRadio(frecuenciaActual) {
        var _this = _super.call(this, true, 10, true, true, true, 5) || this;
        _this.frecuenciaActual = 0;
        return _this;
    }
    telefonoConRadio.prototype.sumarFrecuencia = function () {
        this.frecuenciaActual += 1;
    };
    telefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual -= 1;
    };
    return telefonoConRadio;
}(telefono));
var miTelefonoConRadio = new telefonoConRadio(100.5);
console.log(miTelefonoConRadio);
