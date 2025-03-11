class Unit {
    static className = "Unit";

    static default = "Elija la unidad";

    constructor(unit) {
        this._option = document.createElement("option");
        this._option.value = unit.id;
        this._option.text = unit.symbol;
    }

    get option() {
        return this._option;
    }
}