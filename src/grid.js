class Grid extends HTMLElement {
    static tagName = "grid-list";

    constructor() {
        super();
    }

    set header(header) {
        this._header = header;
    }

    set list(list) {
        this._list = list;
    }

    set row(className) {
        this._row = className;
    }

    init() {
        const grid = document.createElement("div");
        grid.setAttribute("class", "container");
        grid.innerHTML = this._header;

        this._list.forEach(element => {
            const row = (new classes[this._row](element)).row;
            grid.appendChild(row);
        });

        this.appendChild(grid);
    }
}

customElements.define(Grid.tagName, Grid);