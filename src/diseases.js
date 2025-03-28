class Disease {
    static className = "Disease";

    static header = `
        <div class="row list-bot-line">
            <div class="col">
                <span class="subtitle">Lista de enfermedades</span>
            </div>
        </div>
    `;

    constructor(disease, method) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");
        this._row.onclick = () => method(disease);

        const description = document.createElement("div");
        description.setAttribute("class", "col");
        description.append(disease.description);

        this._row.appendChild(description);
    }

    get row() {
        return this._row;
    }
}