class Group extends HTMLElement {
    static tagName = "group-list";

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
        this._list.forEach(element => {
            const group = document.createElement("div");
            group.setAttribute("class", "input-group");
            
            const group_text = document.createElement("div");
            group_text.setAttribute("class", "input-group-text")

            const [check, label] = (new classes[this._check](element)).check;
            group_text.appendChild(check);
            group_text.appendChild(label);

            const input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");

            group.appendChild(group_text);
            group.appendChild(input);

            this.appendChild(group);
        });
    }
}

customElements.define(Group.tagName, Group);