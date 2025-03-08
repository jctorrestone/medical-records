class Medicine extends HTMLElement {
    static tagName = "medicine-row";

    static header = `
        <div class="row">
            <div class="col">
                Nombre genérico
            </div>
            <div class="col">
                Tipo
            </div>
            <div class="col">
                Dosis
            </div>
        </div>
    `;

    constructor() {
        super();
    }

    set row(medicine) {
        this.innerHTML = `
            <div class="row">
                <div class="col">
                    ${ medicine.name }
                </div>
                <div class="col">
                    ${ medicine.formulation.shape.description }
                </div>
                <div class="col">
                    ${ medicine.dose }${ medicine.formulation.unit.symbol }
                </div>
            </div>
        `;
    }
}

customElements.define(Medicine.tagName, Medicine);