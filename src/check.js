class Check extends HTMLElement {
    static tagName = "check-list";

    constructor() {
        super();
    }

    set list(list) {
        this._list = list;
    }

    set check(className) {
        this._check = className;
    }

    init() {
        const list_group = document.createElement("ul");
        list_group.setAttribute("class", "list-group");

        this._list.forEach(element => {
            const group_item = document.createElement("li");
            group_item.setAttribute("class", "list-group-item");

            const [check, label] = (new classes[this._check](element)).check;
            group_item.appendChild(check);
            group_item.appendChild(label);

            list_group.appendChild(group_item);
        });

        this.appendChild(list_group);
    }
}

customElements.define(Check.tagName, Check);