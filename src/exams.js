class Exam extends HTMLElement {
    static tagName = "exam-check";

    constructor() {
        super();
    }

    set check(exam) {
        this.innerHTML = `
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value=${ exam.id } id=${ exam.id }>
                <label class="form-check-label" for=${ exam.id }>
                    ${ exam.description }
                </label>
            </li>
        `;
    }
}

customElements.define(Exam.tagName, Exam);