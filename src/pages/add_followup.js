async function renderAddFollowUp(primary_record={id, patient, rdate}) {
    await loadPage("add_followup");
    
    followUpRecord.primary_record = primary_record;
    const record = followUpRecord.record;
    record.primary_record_id = primary_record.id;

    const h4_patient = document.getElementById("patient");
    h4_patient.innerHTML = primary_record.patient.last_name + ", " + primary_record.patient.name;

    const span_prdate = document.getElementById("prdate");
    span_prdate.innerHTML = formatDate(primary_record.rdate);

    const input_rdate = document.getElementById("rdate");
    input_rdate.value = record.rdate? record.rdate:null;
    input_rdate.onchange = () => {
        record.rdate = input_rdate.value;
    };

    const treatments = document.getElementById("treatments");
    if(followUpRecord.treatments.length != 0) {
        treatments.setAttribute("size","3");
        followUpRecord.treatments.forEach((treatment) => {
            treatments.setAttribute("size", "3");
            const option = document.createElement("option");
            option.setAttribute("onclick", `removeFollowUpTreatment(${treatment.medicine_id})`);
            option.value = treatment.medicine_id;
            option.text = treatment.medicine_name;
            treatments.options.add(option);
        });
    }

    const btnBack = document.getElementById("btnBack");
    btnBack.onclick = () => renderRecord(primary_record);
}