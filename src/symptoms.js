class Symptom {
    static className = "Symptom";

    static header = `
        <div class="row list-bot-line">
            <div class="col">
                <span class="subtitle">Lista de síntomas</span>
            </div>
        </div>
    `;

    constructor(symptom, method) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");
        this._row.onclick = () => method(symptom);

        const description = document.createElement("div");
        description.setAttribute("class", "col")
        description.append(symptom.description);

        this._row.appendChild(description);
    }

    get row() {
        return this._row;
    }
}