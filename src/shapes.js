class Shape {
    static className = "Shape";

    static default = `
        <option selected>
            Elija la presentación
        </option>`

    constructor(shape) {
        this.id = shape.id;
        this.description = shape.description;
    }

    get option() {
        const option = document.createElement("option");
        option.value = this.id;
        option.text = this.description;
        return option;
    }
}