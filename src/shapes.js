class Shape {
    static className = "Shape";

    static default = "Elija la presentación";

    constructor(shape) {
        this._option = document.createElement("option");
        this._option.value = shape.id;
        this._option.text = shape.description;
    }

    get option() {
        return this._option;
    }
}