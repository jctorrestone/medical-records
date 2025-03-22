class Exam {
    static className = "Exam";

    constructor(exam, method) {
        this._check = document.createElement("input");
        this._check.setAttribute("class", "form-check-input");
        this._check.setAttribute("type", "checkbox");
        this._check.setAttribute("value", exam.id);
        this._check.setAttribute("aria-label", `Checkbox for ${Exam.className}`);
        this._check.setAttribute("id", `ex-${exam.id}`);
        this._check.onchange = () => method(this, exam);

        this._label = document.createElement("label");
        this._label.setAttribute("class", "form-check-label");
        this._label.setAttribute("for", `ex-${exam.id}`);
        this._label.append(exam.description);
    }

    get check() {
        return [this._check, this._label];
    }
}