const classes = {
    Shape,
    Unit,
};

fetch("http://localhost:8080/formulations")
.then(response => response.json())
.then(json => {
    const data = json;
    const select_list = document.getElementById("records");
    //grid_list.header = Medicine.header;
    select_list.default = Shape.default;
    select_list.list = data.map(formulation => formulation.unit);
    select_list.option = Shape.className;
    select_list.init();
});