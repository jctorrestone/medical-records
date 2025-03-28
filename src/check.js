class Check extends HTMLElement {
    static tagName = "check-list";

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
        const row = document.createElement("div");
        row.setAttribute("class", "row") 

        const first_col = document.createElement("div");
        first_col.setAttribute("class", "col-6")

        const second_col = document.createElement("div");
        second_col.setAttribute("class", "col-6")

        const first_list_group = document.createElement("ul");
        first_list_group.setAttribute("class", "list-group");

        const second_list_group = document.createElement("ul");
        second_list_group.setAttribute("class", "list-group");

        this._list.forEach((element, i) => {
            const group_item = document.createElement("li");
            group_item.setAttribute("class", "list-group-item");

            const [check, label] = (new classes[this._check](element, this._method)).check;
            group_item.appendChild(check);
            group_item.appendChild(label);

            if( i < this._list.length/2) {
                first_list_group.appendChild(group_item);
            }
            else {
                second_list_group.appendChild(group_item);
            }
        });

        first_col.appendChild(first_list_group);
        second_col.appendChild(second_list_group);
        row.appendChild(first_col);
        row.appendChild(second_col);
        this.appendChild(row);
    }
}

customElements.define(Check.tagName, Check);