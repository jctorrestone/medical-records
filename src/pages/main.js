async function renderMain() {
    await loadPage("main");
    const json = await fetchAPI("records", "GET");

    const grid_list = document.getElementById("records");
    grid_list.header = Record.header;
    grid_list.list = json.data;
    grid_list.method = renderRecord;
    grid_list.row = Record.className;
    grid_list.init();

    const pagination = document.getElementById("recordsPag");
    pagination.method = "searchRecords";
    pagination.pages = json;
}

async function searchRecords(page=0) {
    const inputSearch = document.getElementById("inputSearch");
    const json = await fetchAPI(`records/search?q=${inputSearch.value}&page=${page}`, "GET");
    
    const grid_list = document.getElementById("records");
    grid_list.innerHTML = "";
    grid_list.header = Record.header;
    grid_list.list = json.data;
    grid_list.row = Record.className;
    grid_list.init();

    const pagination = document.getElementById("recordsPag");
    pagination.method = "searchRecords";
    pagination.pages = json;
}

function removeFocus() {
    document.activeElement.blur();
}