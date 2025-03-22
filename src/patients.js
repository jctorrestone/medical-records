class Patient {
    static className = "Patient";

    static header = `
        <div class="row">
            <div class="col-5">
                Apellidos
            </div>
            <div class="col-5">
                Nombres
            </div>
            <div class="col-2">
                Género
            </div>
        </div>
    `;

    constructor(patient, method) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");
        this._row.onclick = () => method(patient);

        const last_name = document.createElement("div");
        last_name.setAttribute("class", "col-5");
        last_name.append(patient.last_name);

        const name = document.createElement("div");
        name.setAttribute("class", "col-5");
        name.append(patient.name);

        const gender = document.createElement("div");
        gender.setAttribute("class", "col-2");
        gender.append(patient.gender? "M" : "F");

        this._row.appendChild(last_name);
        this._row.appendChild(name);
        this._row.appendChild(gender);
    }

    get row() {
        return this._row;
    }
}