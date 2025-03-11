class Select extends HTMLElement {
    static tagName = "select-list";

    constructor() {
        super();
    }

    set default(option) {
        this._default = option;
    }

    set list(list) {
        this._list = list;
    }

    set option(className) {
        this._option = className;
    }

    init() {
        const select = document.createElement("select");
        select.setAttribute("class", "form-select");
        select.setAttribute("aria-label", `"Select ${this._option}"`);
       
        const defaultOpt = document.createElement("option");
        defaultOpt.disabled = true;
        defaultOpt.selected = true;
        defaultOpt.text = this._default;

        select.options.add(defaultOpt);
        
        this._list.forEach(element => {
            const option = (new classes[this._option](element)).option;
            select.options.add(option);
        });

        this.appendChild(select);
    }
}

customElements.define(Select.tagName, Select);