
class ElementoHTML {
    protected Id: string;
    protected Class: string;
    protected Value: string;

    constructor(id: string, className: string, value: string) {
        this.Id = id;
        this.Class = className;
        this.Value = value;
    }

    public crearElemento() {
    }
}


class ElementoInput extends ElementoHTML {
    private Type: string;

    constructor(Id: string, Class: string, Value: string, tipo: string) {
        super(Id, Class, Value)
        this.Type = tipo
    }

    public crearElemento(): HTMLElement {
        let elemento: HTMLElement = document.createElement("input");
        elemento.id = this.Id;
        elemento.className = this.Class;
        elemento.setAttribute("value", this.Value);
        elemento.setAttribute("type", this.Type)

        return elemento;
    }
}

class ElementoTextArea extends ElementoHTML {
    private cols: number;
    private rows: number;

    constructor(Id: string, ClassName: string, Value: string, cols: number, rows: number) {
        super(Id, ClassName, Value)
        this.cols = cols;
        this.rows = rows;
    }

    public crearElemento(): HTMLTextAreaElement {
        let textarea: HTMLTextAreaElement = document.createElement("textarea")
        textarea.id = this.Id;
        textarea.className = this.Class;
        textarea.cols = this.cols;
        textarea.rows = this.rows;

        return textarea;
    }
}


class ElementoSelect extends ElementoHTML {
    private option: Node [];

    constructor(Id: string, className: string, value: string, options: Node[]) {
        super(Id, className, value)
        this.option = options;
    }

    public crearElemento(): HTMLSelectElement {
        let select: HTMLSelectElement = document.createElement("select");
        select.id = this.Id;
        select.setAttribute("className", this.Class);

        for (const option of this.option) {
            if (option instanceof HTMLOptionElement) {
                select.appendChild(option);
            }
        }

        return select;
    }
}

let input = new ElementoInput("texto1","control-text","hola mundo","text");
input.crearElemento();

let inputCheckbox = new ElementoInput("chk1","control-checkbox","1","checkbox");
inputCheckbox.crearElemento();

let textArea = new ElementoTextArea("textarea1","control-textarea1","",30,10);
textArea.crearElemento();

let select = new ElementoSelect("localidad","localidad","value",[]);
select.crearElemento();