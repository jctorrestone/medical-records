class Pagination extends HTMLElement {
    static tagName = "pagination-list";

    constructor() {
        super();
    }

    set method(method) {
        this._method = method;
    }

    set pages({prev_page, page, next_page, last_page}) {
        //this._url = url;
        this.innerHTML = `
            <nav>
                <ul class="pagination justify-content-center">
                ${
                    prev_page < 0? 
                    `<li class="page-item disabled">
                        <a class="page-link" href="#">`
                    :
                    `<li class="page-item">
                        <a onclick="${this._method}(${prev_page})" class="page-link" href="#">`
                }
                            Anterior
                        </a>
                    </li>
                ${
                    prev_page < 0? "":
                    `<li class="page-item">
                        <span class="page-link">
                            ${prev_page + 1}
                        </span>
                    </li>`
                }
                    <li class="page-item active">
                        <span class="page-link">
                            ${page + 1}
                        </span>
                    </li>
                ${
                    next_page > 0? 
                    `<li class="page-item">
                        <span class="page-link">
                            ${next_page + 1}
                        </span>
                    </li>
                    <li class="page-item">
                        <a onclick="${this._method}(${next_page})" class="page-link" href="#">`
                    :
                    `<li class="page-item disabled">
                        <a class="page-link" href="#">` 
                }
                            Siguiente
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define(Pagination.tagName, Pagination);