class Symptom {
    static className = "Symptom";

    static header = `
        <div class="row">
            <div class="col">
                Lista de síntomas
            </div>
        </div>
    `;

    constructor(symptom) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");

        const description = document.createElement("div");
        description.setAttribute("class", "col")
        description.append(symptom.description);

        this._row.appendChild(description);
    }

    get row() {
        return this._row;
    }
}