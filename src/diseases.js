class Disease extends HTMLElement {
    static tagName = "disease-row";

    static header = `
        <div class="row">
            <div class="col">
                Lista de enfermedades
            </div>
        </div>
    `;

    constructor() {
        super();
    }

    set row(disease) {
        this.innerHTML = `
            <div class="row">
                <div class="col">
                    ${ disease.description }
                </div>
            </div>
        `;
    }
}

customElements.define(Disease.tagName, Disease);