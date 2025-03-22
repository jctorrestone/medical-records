class Medicine {
    static className = "Medicine";

    static header = `
        <div class="row">
            <div class="col-6">
                Nombre genérico
            </div>
            <div class="col-3">
                Tipo
            </div>
            <div class="col-3">
                Dosis
            </div>
        </div>
    `;

    constructor(medicine, method) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");
        this._row.onclick = () => method(medicine);

        const name = document.createElement("div");
        name.setAttribute("class", "col-6");
        name.append(medicine.name);

        const type = document.createElement("div");
        type.setAttribute("class", "col-3");
        type.append(medicine.formulation.shape.description);

        const dose = document.createElement("div");
        dose.setAttribute("class", "col-3");
        dose.append(`${medicine.dose}${medicine.formulation.unit.symbol}`);

        this._row.appendChild(name);
        this._row.appendChild(type);
        this._row.appendChild(dose);
    }

    get row() {
        return this._row;
    }
}