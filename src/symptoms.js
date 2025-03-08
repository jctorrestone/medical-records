class Symptom extends HTMLElement {
    static tagName = "symptom-row";

    static header = `
        <div class="row">
            <div class="col">
                Lista de síntomas
            </div>
        </div>
    `;

    constructor() {
        super();
    }

    set row(symptom) {
        this.innerHTML = `
            <div class="row">
                <div class="col">
                    ${ symptom.description }
                </div>
            </div>
        `;
    }
}

customElements.define(Symptom.tagName, Symptom);