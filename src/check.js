class Check extends HTMLElement {
    static tagName = "check-list";

    constructor() {
        super();
    }

    set list(list) {
        this._list = list;
    }

    set tag(tag) {
        this._tag = tag;
    }

    init() {
        this.innerHTML = `
            <ul class="list-group">
                ${
                    this._list.map(element => 
                        `<${this._tag}></${this._tag}>`).join("")
                }
            </ul>
        `;

        const tag_list = document.querySelectorAll(this._tag);
        tag_list.forEach((element, index) => {
            element.check = this._list[index];
        });
    }
}

customElements.define(Check.tagName, Check);