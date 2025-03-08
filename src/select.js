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
        this.innerHTML = `
            <select class="form-select" aria-label="Select ${this._option}">
                ${  this._default }
            </select>
        `;

        this._list.forEach(element => {
            const option = (new classes[this._option](element)).option;
            this.getElementsByTagName("select")[0].options.add(option);
        });
    }
}

customElements.define(Select.tagName, Select);