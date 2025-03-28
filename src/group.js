class Group extends HTMLElement {
    static tagName = "group-list";

    constructor() {
        super();
    }

    set list(list) {
        this._list = list;
    }

    set method(method) {
        this._method = method;
    }

    set check(className) {
        this._check = className;
    }

    init() {
        this._list.forEach(element => {
            const group = document.createElement("div");
            group.setAttribute("class", "input-group");
            
            const group_text = document.createElement("div");
            group_text.setAttribute("class", "input-group-text")

            const [check, label, placeholder] = (new classes[this._check](element, this._method)).check;
            group_text.appendChild(check);
            group_text.appendChild(label);

            const input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "number");
            input.setAttribute("placeholder", placeholder);

            group.appendChild(group_text);
            group.appendChild(input);

            this.appendChild(group);
        });
    }
}

customElements.define(Group.tagName, Group);