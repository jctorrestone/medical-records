class VitalSign {
    static className = "VitalSign";

    constructor(vital_sign, method) {
        this._check = document.createElement("input");
        this._check.setAttribute("class", "form-check-input");
        this._check.setAttribute("type", "checkbox");
        this._check.setAttribute("value", vital_sign.id);
        this._check.setAttribute("aria-label", `Checkbox for ${VitalSign.className}`);
        this._check.setAttribute("id", `vs-${vital_sign.id}`);
        this._check.onchange = () => method(this, vital_sign);

        this._label = document.createElement("label");
        this._label.setAttribute("class", "form-check-label");
        this._label.setAttribute("for", `vs-${vital_sign.id}`);
        this._label.append(vital_sign.description);

        this._placeholder = vital_sign.unit.symbol;
    }

    get check() {
        return [this._check, this._label, this._placeholder];
    }
}