async function renderDiseases(version) {
    await loadPage("diseases");
    const json = await fetchAPI("diseases", "GET");

    const grid_list = document.getElementById("diseases");
    grid_list.header = Disease.header;
    grid_list.list = json.data;
    grid_list.method = version == 1? onclickedDiseaseH:onclickedDisease;
    grid_list.row = Disease.className;
    grid_list.init();

    const pagination = document.getElementById("diseasesPag");
    pagination.method = "searchDiseases";
    pagination.pages = json;

    if(version == 1) {
        const h_description = document.getElementById("h_description");
        h_description.parentElement.setAttribute("class", "form-floating my-3");
    }
}

async function searchDiseases(page=0) {
    const inputSearch = document.getElementById("inputSearch");
    const json = await fetchAPI(`diseases/search?q=${inputSearch.value}&page=${page}`, "GET");

    const grid_list = document.getElementById("diseases");
    grid_list.innerHTML = "";
    grid_list.header = Disease.header;
    grid_list.list = json.data;
    grid_list.row = Disease.className;
    grid_list.init();

    const pagination = document.getElementById("diseasesPag");
    pagination.method = "searchDiseases";
    pagination.pages = json;
}

//TODO TRY CATCH
async function addDiseases() {
    const description = document.getElementById("description");

    const disease = {
        description: description.value
    }
    
    await fetchAPI("diseases", "POST", disease);
    description.value = "";
    await searchDiseases();
    removeFocus();
}

async function onclickedDisease(disease) {
    if(fullRecord.idx.some(dis => dis.id == disease.id)) {
        return;
    }

    fullRecord.idx.push({
            id: disease.id,
            description: disease.description
        }
    );

    await renderAddRecord();
}

async function onclickedDiseaseH(disease) {
    if(fullRecord.diseases_history.some(disease_h => disease_h.disease_id == disease.id)) {
        return;
    }

    const description = document.getElementById("h_description");

    fullRecord.diseases_history.push({
            disease_id: disease.id,
            disease_desc: disease.description,
            description: description.value
        }
    );

    await renderAddRecord();
}

async function removeDisease(id) {
    fullRecord.idx = fullRecord.idx.filter((disease) => {
        return disease.id != id;
    });

    const idx = document.getElementById("idx");
    const option = idx.querySelector(`option[value="${id}"]`);
    idx.removeChild(option);
}

async function removeDiseaseH(id) {
    fullRecord.diseases_history = fullRecord.diseases_history.filter((disease_h) => {
        return disease_h.disease_id != id;
    });

    const history = document.getElementById("history");
    const option = history.querySelector(`option[value="${id}"]`);
    history.removeChild(option);
}