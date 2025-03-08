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

    set tag(tag) {
        this._tag = tag;
    }

    //TODO Remove id
    init() {
        this.innerHTML = `
            <div class="container">
                ${  this._header }
                ${
                    this._list.map(element => 
                        `<${this._tag} id=${element.id}></${this._tag}>`).join("")
                }
            </div>
        `;

        const tag_list = document.querySelectorAll(this._tag);
        tag_list.forEach((element, index) => {
            element.row = this._list[index];
        });
    }
}

customElements.define(Grid.tagName, Grid);