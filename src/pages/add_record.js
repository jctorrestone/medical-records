async function renderAddRecord() {
    await loadPage("add_record");
    startElements();
}

async function startElements() {
    const record = fullRecord.record;
    const json = await fetchAPI("exams", "GET");

    const patient = document.getElementById("patient");
    patient.innerHTML = record.patient? record.patient.full_name:"Seleccione un paciente";

    const rdate = document.getElementById("rdate");
    rdate.value = record.rdate? record.rdate:null;
    rdate.onchange = () => {
        record.rdate = rdate.value;
    };

    const age = document.getElementById("age");
    age.value = record.age? record.age:null;
    age.onchange = () => {
        record.age = age.value;
    };

    const weight = document.getElementById("weight");
    weight.value = record.weight? record.weight:null;
    weight.onchange = () => {
        record.weight = weight.value;
    };

    const height = document.getElementById("height");
    height.value = record.height? record.height:null;
    height.onchange = () => {
        record.height = height.value;
    };

    const history = document.getElementById("history");
    if(fullRecord.diseases_history.length != 0) {
        history.setAttribute("size", "3");
        fullRecord.diseases_history.forEach((disease_h) => {
            const option = document.createElement("option");
            option.setAttribute("onclick", `removeDiseaseH(${disease_h.disease_id})`);
            option.value = disease_h.disease_id;
            option.text = disease_h.disease_desc;
            history.options.add(option);
        });
    }

    const duration = document.getElementById("duration");
    duration.value = record.duration? record.duration:null;
    duration.onchange = () => {
        record.duration = duration.value;
    };

    const symptoms = document.getElementById("symptoms");
    if(fullRecord.symptoms.length != 0) {
        symptoms.setAttribute("size","3");
        fullRecord.symptoms.forEach((symptom) => {
            const option = document.createElement("option");
            option.setAttribute("onclick", `removeSymptom(${symptom.id})`);
            option.value = symptom.id;
            option.text = symptom.description;
            symptoms.options.add(option);
        });
    }

    const idx = document.getElementById("idx");
    if(fullRecord.idx.length != 0) {
        idx.setAttribute("size", "3");
        fullRecord.idx.forEach((disease) => {
            const option = document.createElement("option");
            option.setAttribute("onclick", `removeDisease(${disease.id})`);
            option.value = disease.id;
            option.text = disease.description;
            idx.options.add(option);
        });
    }

    const exams = document.getElementById("exams");
    exams.list = json;
    exams.method = oncheckedExam;
    exams.check = Exam.className;
    exams.init();
    if(fullRecord.exams.length != 0) {
        fullRecord.exams.forEach((exam) => { 
            const checkInput = exams.querySelector(`input[value="${exam.id}"]`);
            checkInput.checked = true;
        })
    }
    
    const treatments = document.getElementById("treatments");
    if(fullRecord.treatments.length != 0) {
        treatments.setAttribute("size","3");
        fullRecord.treatments.forEach((treatment) => {
            treatments.setAttribute("size", "3");
            const option = document.createElement("option");
            option.setAttribute("onclick", `removeTreatment(${treatment.medicine_id})`);
            option.value = treatment.medicine_id;
            option.text = treatment.medicine_name;
            treatments.options.add(option);
        });
    }
}

async function oncheckedExam(checkbox, exam) {
    if(checkbox._check.checked) {
        fullRecord.exams.push(exam);
    }
    else {
        fullRecord.exams = fullRecord.exams.filter(ex => ex.id != exam.id);
    }
}

async function addRecords() {
    await fetchAPI("records", "POST", fullRecord);
    
    //reset inputs

    await renderMain();
    removeFocus();
}