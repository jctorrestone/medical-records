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

const API_PATH = "http://localhost:8080/"

async function loadPage(page) {
    const response = await fetch(`./pages/${page}.html`);
    const text = await response.text();
    const content = document.getElementById("content");
    content.innerHTML = text;
}

async function fetchAPI(endpoint, method, body={}) {
    if (method == "POST") {
        body = JSON.stringify(body);
        const response = await fetch(API_PATH + endpoint, {
            method,
            body
        });
        const json = await response.json();
        return json;
    }

    const response = await fetch(API_PATH + endpoint);
    const json = await response.json();
    return json;
}

const fullRecord = {
    record: {
        category: "primary",
        patient: null,
        rdate: null,
        age: null,
        weight: null,
        height: null,
        duration: null
    },
    diseases_history: [],
    symptoms: [],
    vital_signs: [],
    idx: [],
    exams: [],
    treatments: []
}

//TODO: JUST USE 1 RECORD FOR BOTH
const followUpRecord = {
    record: {
        category: "secondary",
        primary_record_id: null,
        rdate: null
    },
    treatments: []
}

function formatDate(datetime) {
    let rdate = datetime.split(" ")[0].split("-");
    return `${rdate[2]}/${rdate[1]}/${rdate[0]}`
}

function resetFullRecord() {
}

function resetFollowUpRecord() {
    const record = followUpRecord.record;
    record.primary_record_id = null;
    record.rdate = null;

    followUpRecord.treatments = [];
}

renderMain();