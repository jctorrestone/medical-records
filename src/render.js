const classes = {
    Disease,
    Exam,
    Medicine,
    Patient,
    Record,
    Shape,
    Symptom,
    Unit,
    VitalSign
};

async function loadPage(page) {
    const response = await fetch(`./pages/${page}.html`);
    const text = await response.text();
    const content = document.getElementById("content");
    content.innerHTML = text;
}

loadPage("main");

fetch("http://localhost:8080/records")
.then(response => response.json())
.then(json => {
    const data = json;
    const grid_list = document.getElementById("records");
    grid_list.header = Record.header;
    //select_list.default = Unit.default;
    grid_list.list = data;
    grid_list.row = Record.className;
    grid_list.init();
/* 
    <h1>Records</h1>
      <input class="form-control" type="date">
      <check-list id="records"></check-list>
*/
}); 

