class Medicine {
    static className = "Medicine";

    static header = `
        <div class="row">
            <div class="col">
                Nombre genérico
            </div>
            <div class="col">
                Tipo
            </div>
            <div class="col">
                Dosis
            </div>
        </div>
    `;

    constructor(medicine) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");

        const name = document.createElement("div");
        name.setAttribute("class", "col");
        name.append(medicine.name);

        const type = document.createElement("div");
        type.setAttribute("class", "col");
        type.append(medicine.formulation.shape.description);

        const dose = document.createElement("div");
        dose.setAttribute("class", "col");
        dose.append(`${medicine.dose}${medicine.formulation.unit.symbol}`);

        this._row.appendChild(name);
        this._row.appendChild(type);
        this._row.appendChild(dose);
    }

    get row() {
        return this._row;
    }
}