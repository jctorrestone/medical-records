class Record {
    static className = "Record";

    static header = `
        <div class="row list-bot-line">
            <div class="col-3">
                <span class="subtitle">Fecha</span>
            </div>
            <div class="col-3">
                <span class="subtitle">Tiempo de enfermedad</span>
            </div>
            <div class="col-6">
                <span class="subtitle">Paciente</span>
            </div>
        </div>
    `;

    constructor(record, method) {
        this._row = document.createElement("div")
        this._row.setAttribute("class", "row");
        this._row.onclick = () => method(record);

        const date = document.createElement("div");
        date.setAttribute("class", "col-3");
        date.append(formatDate(record.rdate));

        const duration = document.createElement("div");
        duration.setAttribute("class", "col-3");
        duration.append(`${record.duration} días`);

        const patient = document.createElement("div");
        patient.setAttribute("class", "col-6");
        patient.append(`${record.patient.last_name}, ${record.patient.name}`);

        this._row.appendChild(date);
        this._row.appendChild(duration);
        this._row.appendChild(patient);
    }

    get row() {
        return this._row;
    }
}