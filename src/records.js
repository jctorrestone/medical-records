class Record extends HTMLElement {
    static tagName = "record-row";

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

    constructor() {
        super();
    }

    set row(record) {
        this.innerHTML = `
            <div class="row">
                <div class="col">
                    ${ record.rdate }
                </div>
                <div class="col">
                    ${ record.duration } días
                </div>
                <div class="col">
                    ${ record.patient.last_name }, ${ record.patient.name }
                </div>
            </div>
        `;
    }
}

customElements.define(Record.tagName, Record);