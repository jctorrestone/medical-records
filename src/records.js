class Record {
    static className = "Record";

    static header = `
        <div class="row">
            <div class="col">
                Fecha
            </div>
            <div class="col">
                Tiempo de la enfermedad
            </div>
            <div class="col">
                Paciente
            </div>
        </div>
    `;

    constructor(record) {
        this._row = document.createElement("div")
        this._row.setAttribute("class", "row");

        const date = document.createElement("div");
        date.setAttribute("class", "col");
        date.append(record.rdate);

        const duration = document.createElement("div");
        duration.setAttribute("class", "col");
        duration.append(`${record.duration} días`);

        const patient = document.createElement("div");
        patient.setAttribute("class", "col");
        patient.append(`${record.patient.last_name}, ${record.patient.name}`);

        this._row.appendChild(date);
        this._row.appendChild(duration);
        this._row.appendChild(patient);
    }

    get row() {
        return this._row;
    }
}