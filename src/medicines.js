class Medicine {
    static className = "Medicine";

    static header = `
        <div class="row list-bot-line">
            <div class="col-6">
                <span class="subtitle">Nombre genérico</span>
            </div>
            <div class="col-3">
                <span class="subtitle">Tipo</span>
            </div>
            <div class="col-3">
                <span class="subtitle">Dosis</span>
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