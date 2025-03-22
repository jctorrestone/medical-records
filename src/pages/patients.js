async function renderPatients() {
    await loadPage("patients");
    const json = await fetchAPI("patients", "GET");

    const grid_list = document.getElementById("patients");
    grid_list.header = Patient.header;
    grid_list.list = json.data;
    grid_list.method = onclickedPatient
    grid_list.row = Patient.className;
    grid_list.init();

    const pagination = document.getElementById("patientsPag");
    pagination.method = "searchPatients";
    pagination.pages = json;
}

async function searchPatients(page=0) {
    const inputSearch = document.getElementById("inputSearch");
    const json = await fetchAPI(`patients/search?q=${inputSearch.value}&page=${page}`, "GET");
    
    const grid_list = document.getElementById("patients");
    grid_list.innerHTML = "";
    grid_list.header = Patient.header;
    grid_list.list = json.data;
    grid_list.row = Patient.className;
    grid_list.init();

    const pagination = document.getElementById("patientsPag");
    pagination.method = "searchPatients";
    pagination.pages = json;
}

//TODO TRY CATCH
async function addPatients() {
    const name = document.getElementById("name");
    const last_name = document.getElementById("last_name");
    const gender = document.querySelector("input[type=radio]:checked");

    const patient = {
        name: name.value,
        last_name: last_name.value,
        gender: gender.value == "M"? true:false
    }

    await fetchAPI("patients", "POST", patient);
    name.value = "";
    last_name.value = "";
    gender.value = "";
    await searchPatients();
    removeFocus();
}

async function onclickedPatient(patient) {
    const record = fullRecord.record;
    record.patient = {
        id: patient.id,
        full_name: patient.last_name + ", " + patient.name
    }
    
    await renderAddRecord();
}