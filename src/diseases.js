class Disease {
    static className = "Disease";

    static header = `
        <div class="row">
            <div class="col">
                Lista de enfermedades
            </div>
        </div>
    `;

    constructor(disease) {
        this._row = document.createElement("div");
        this._row.setAttribute("class", "row");

        const description = document.createElement("div");
        description.setAttribute("class", "col");
        description.append(disease.description);

        this._row.appendChild(description);
    }

    get row() {
        return this._row;
    }
}