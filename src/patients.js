class Patient {
    static className = "Patient";

    static header = `
        <div class="row">
            <div class="col">
                Apellidos
            </div>
            <div class="col">
                Nombres
            </div>
            <div class="col">
                Género
            </div>
        </div>
    `;

    constructor(patient) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");

        const last_name = document.createElement("div");
        last_name.setAttribute("class", "col");
        last_name.append(patient.last_name);

        const name = document.createElement("div");
        name.setAttribute("class", "col");
        name.append(patient.name);

        const gender = document.createElement("div");
        gender.setAttribute("class", "col");
        gender.append(patient.gender? "Masculino" : "Femenino");

        this._row.appendChild(last_name);
        this._row.appendChild(name);
        this._row.appendChild(gender);
    }

    get row() {
        return this._row;
    }
}