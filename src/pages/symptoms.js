async function renderSymptoms() {
    await loadPage("symptoms");
    const json = await fetchAPI("symptoms", "GET");

    const grid_list = document.getElementById("symptoms");
    grid_list.header = Symptom.header;
    grid_list.list = json.data;
    grid_list.method = onclickedSymptom
    grid_list.row = Symptom.className;
    grid_list.init();

    const pagination = document.getElementById("symptomsPag");
    pagination.method = "searchSymptoms";
    pagination.pages = json;
}

async function searchSymptoms(page=0) {
    const inputSearch = document.getElementById("inputSearch");
    const json = await fetchAPI(`symptoms/search?q=${inputSearch.value}&page=${page}`, "GET");
    
    const grid_list = document.getElementById("symptoms");
    grid_list.innerHTML = "";
    grid_list.header = Symptom.header;
    grid_list.list = json.data;
    grid_list.row = Symptom.className;
    grid_list.init();

    const pagination = document.getElementById("symptomsPag");
    pagination.method = "searchSymptoms";
    pagination.pages = json;
}

//TODO TRY CATCH
async function addSymptoms() {
    const description = document.getElementById("description");

    const symptom = {
        description: description.value
    }
    
    await fetchAPI("symptoms", "POST", symptom);
    description.value = "";
    await searchSymptoms();
    removeFocus();
}

async function onclickedSymptom(symptom) {
    if(fullRecord.symptoms.some(symp => symp.id == symptom.id)) {
        return;
    }

    fullRecord.symptoms.push({
            id: symptom.id,
            description: symptom.description
        }
    );

    await renderAddRecord();
}

async function removeSymptom(id) {
    fullRecord.symptoms = fullRecord.symptoms.filter((symptom) => {
        return symptom.id != id;
    });

    const symptoms = document.getElementById("symptoms");
    const option = symptoms.querySelector(`option[value="${id}"]`);
    symptoms.removeChild(option);
}