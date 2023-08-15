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
var ElementoHTML = /** @class */ (function () {
    function ElementoHTML(id, className, value) {
        this.Id = id;
        this.Class = className;
        this.Value = value;
    }
    ElementoHTML.prototype.crearElemento = function () {
    };
    return ElementoHTML;
}());
var ElementoInput = /** @class */ (function (_super) {
    __extends(ElementoInput, _super);
    function ElementoInput(Id, Class, Value, tipo) {
        var _this = _super.call(this, Id, Class, Value) || this;
        _this.Type = tipo;
        return _this;
    }
    ElementoInput.prototype.crearElemento = function () {
        var elemento = document.createElement("input");
        elemento.id = this.Id;
        elemento.className = this.Class;
        elemento.setAttribute("value", this.Value);
        elemento.setAttribute("type", this.Type);
        return elemento;
    };
    return ElementoInput;
}(ElementoHTML));
var ElementoTextArea = /** @class */ (function (_super) {
    __extends(ElementoTextArea, _super);
    function ElementoTextArea(Id, ClassName, Value, cols, rows) {
        var _this = _super.call(this, Id, ClassName, Value) || this;
        _this.cols = cols;
        _this.rows = rows;
        return _this;
    }
    ElementoTextArea.prototype.crearElemento = function () {
        var textarea = document.createElement("textarea");
        textarea.id = this.Id;
        textarea.className = this.Class;
        textarea.cols = this.cols;
        textarea.rows = this.rows;
        return textarea;
    };
    return ElementoTextArea;
}(ElementoHTML));
var ElementoSelect = /** @class */ (function (_super) {
    __extends(ElementoSelect, _super);
    function ElementoSelect(Id, className, value, options) {
        var _this = _super.call(this, Id, className, value) || this;
        _this.option = options;
        return _this;
    }
    ElementoSelect.prototype.crearElemento = function () {
        var select = document.createElement("select");
        select.id = this.Id;
        select.setAttribute("className", this.Class);
        for (var _i = 0, _a = this.option; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option instanceof HTMLOptionElement) {
                select.appendChild(option);
            }
        }
        return select;
    };
    return ElementoSelect;
}(ElementoHTML));
var input = new ElementoInput("texto1", "control-text", "hola mundo", "text");
input.crearElemento();
var inputCheckbox = new ElementoInput("chk1", "control-checkbox", "1", "checkbox");
inputCheckbox.crearElemento();
var textArea = new ElementoTextArea("textarea1", "control-textarea1", "", 30, 10);
textArea.crearElemento();
var select = new ElementoSelect("localidad", "localidad", "value", []);
select.crearElemento();
