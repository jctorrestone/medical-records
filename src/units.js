class Unit {
    static className = "Unit";

    static default = `
        <option selected>
            Elija la unidad
        </option>`

    constructor(unit) {
        this.id = unit.id;
        this.symbol = unit.symbol;
    }

    get option() {
        const option = document.createElement("option");
        option.value = this.id;
        option.text = this.symbol;
        return option;
    }
}