class Patient extends HTMLElement {
    static tagName = "patient-row";

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

    constructor() {
        super();
    }

    set row(patient) {
        this.innerHTML = `
            <div class="row">
                <div class="col">
                    ${ patient.last_name }
                </div>
                <div class="col">
                    ${ patient.name } días
                </div>
                <div class="col">
                    ${ patient.gender? "Masculino" : "Femenino" }
                </div>
            </div>
        `;
    }
}

customElements.define(Patient.tagName, Patient);