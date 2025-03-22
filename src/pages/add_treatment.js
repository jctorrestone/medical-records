async function renderAddTreatment() {
    await loadPage("add_treatment");
    const json = await fetchAPI("medicines", "GET");

    const grid_list = document.getElementById("medicines");
    grid_list.header = Medicine.header;
    grid_list.list = json.data;
    grid_list.method = onclickedMedicine
    grid_list.row = Medicine.className;
    grid_list.init();

    const pagination = document.getElementById("medicinesPag");
    pagination.method = "searchMedicines";
    pagination.pages = json;

    const h6 = document.getElementById("medicine");
    h6.innerHTML = treatment.medicine_name? treatment.medicine_name:"Seleccione un elemento de la lista";

    const quantity = document.getElementById("quantity");
    quantity.value = treatment.quantity? treatment.quantity:null;
    quantity.onchange = () => {
        treatment.quantity = quantity.value;
    };

    const dosage = document.getElementById("dosage");
    dosage.value = treatment.dosage? treatment.dosage:null;
    dosage.onchange = () => {
        treatment.dosage = dosage.value;
    };

    const frequency = document.getElementById("frequency");
    frequency.value = treatment.frequency? treatment.frequency:null;
    frequency.onchange = () => {
        treatment.frequency = frequency.value;
    };

    const instructions = document.getElementById("instructions");
    instructions.value = treatment.instructions? treatment.instructions:null;
    instructions.onchange = () => {
        treatment.instructions = instructions.value;
    };

    const formulations_json = await fetchAPI("formulations", "GET");
    const s = formulations_json.map(formulation => formulation.shape);
    const shapes = document.getElementById("shapes");
    shapes.default = Shape.default;
    shapes.list = s.reduce((prev, current) => {
        if(!prev.some(shape => shape.id == current.id))
            prev.push(current);
        return prev;
    }, []);
    shapes.method = (e) => {
        const formulations = formulations_json.filter(formulation => formulation.shape.id == e.target.value);
        const units = document.getElementById("units");
        units.innerHTML = "";
        units.default = Unit.default;
        units.list = formulations.map(formulation => {return {id: formulation.id, symbol: formulation.unit.symbol}});
        units.method =
        units.option = Unit.className;
        units.init();
    };
    shapes.option = Shape.className;
    shapes.init();
}

async function searchMedicines(page=0) {
    const inputSearch = document.getElementById("inputSearch");
    const json = await fetchAPI(`medicines/search?q=${inputSearch.value}&page=${page}`, "GET");
    
    const grid_list = document.getElementById("medicines");
    grid_list.innerHTML = "";
    grid_list.header = Medicine.header;
    grid_list.list = json.data;
    grid_list.row = Medicine.className;
    grid_list.init();

    const pagination = document.getElementById("medicinesPag");
    pagination.method = "searchMedicines";
    pagination.pages = json;
}

async function onclickedMedicine(medicine) {
    const h6 = document.getElementById("medicine");
    h6.innerHTML = `${medicine.name}/${medicine.formulation.shape.description}/${medicine.dose}${medicine.formulation.unit.symbol}`;

    treatment.medicine_id = medicine.id;
    treatment.medicine_name = `${medicine.name}/${medicine.formulation.shape.description}/${medicine.dose}${medicine.formulation.unit.symbol}`;
}

async function addMedicines() {
    const name = document.getElementById("name");
    const dose = document.getElementById("dose");
    const shapes = document.getElementById("shapes");
    const units = document.getElementById("units");
    const formulation = units.querySelector("select");

    const medicine = {
        formulation: {
            id: parseInt(formulation.options.item(formulation.selectedIndex).value)
        },
        name: name.value,
        dose: parseInt(dose.value)
    }

    await fetchAPI("medicines", "POST", medicine);
    name.value = "";
    dose.value = "";
    shapes.querySelector("select").selectedIndex = 0;
    units.innerHTML = "";
    await searchMedicines();
    removeFocus();
}

async function addTreatments() {
    if(fullRecord.treatments.some(treat => treat.medicine_id == treatment.medicine_id)) {
        return;
    }

    for (const property in treatment) {
        if(!treatment[property]) {
            return;
        }
    }

    fullRecord.treatments.push({...treatment});

    for (const property in treatment) {
        treatment[property] = null;
    }
    
    await renderAddRecord();
}

async function removeTreatment(id) {
    fullRecord.treatments = fullRecord.treatments.filter((treatment) => {
        return treatment.medicine_id != id;
    });

    const treatments = document.getElementById("treatments");
    const option = treatments.querySelector(`option[value="${id}"]`);
    treatments.removeChild(option);
}

const treatment = {
    medicine_id: null,
    medicine_name: null,
    quantity: null,
    dosage: null,
    frequency: null,
    instructions: null
}