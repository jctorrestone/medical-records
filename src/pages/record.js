async function renderRecord({id}) {
    await loadPage("record");
    const json = await fetchAPI("records/" + id, "GET");

    const record = json.record;
    const diseasesHistory = json.diseases_history? json.diseases_history:[];
    const symptoms = json.symptoms;
    const vitalSigns = json.vital_signs? json.vital_signs:[];
    const idx = json.idx;
    const exams = json.exams? json.exams:[];
    const treatments = json.treatments;

    const json2 = await fetchAPI("sec-records/" + id, "GET");

    const fullRecord = document.getElementById("fullRecord");
    fullRecord.innerHTML = `
        <div>
            <H4>Historia clínica</H4>
        </div>
        <div class="text-start bot-line">
            <h5>
                I. Filiación
            </h5>
        </div>
        <div class="row text-start">
            <div class="col-4">
                <span class="subtitle">Nombres y Apellidos:</span>
            </div>
            <div class="col-5">
                ${record.patient.last_name}, ${record.patient.name}
            </div>
            <div class="col-1">
                <span class="subtitle">Fecha:</span>
            </div>
            <div class="col-2">
                ${formatDate(record.rdate)}
            </div>
        </div>
        <div class="row text-start">
            <div class="col-4">
                <span class="subtitle">Edad:</span>
            </div>
            <div class="col-8">
                ${record.age} años
            </div>
        </div>
        <div class="row text-start">
            <div class="col-4">
                <span class="subtitle">Peso:</span>
            </div>
            <div class="col-8">
                ${record.weight} kg
            </div>
        </div>
        <div class="row text-start">
            <div class="col-4">
                <span class="subtitle">Talla:</span>
            </div>
            <div class="col-8">
                ${record.height} cm
            </div>
        </div>
        <div class="text-start">
            <span class="subtitle">Antecedentes:</span>
        </div>
    ${diseasesHistory.map((item, index) => `
        <div class="text-start">
            <span class="subtitle">${index+1}.</span> ${item.disease_desc}
        </div>
        <div class="text-start list-bot-line">
            ${item.description}
        </div>`).join("")
    }
        <div class="text-start bot-line">
            <h5>
                II. Historia de la enfermedad
            </h5>
        </div>
        <div class="row text-start">
            <div class="col-4">
                <span class="subtitle">Tiempo de enfermedad:</span>
            </div>
            <div class="col-8">
                ${record.duration} días
            </div>
        </div>
        <div class="text-start">
            <span class="subtitle">Síntomas respiratorios:</span>
        </div>
    ${symptoms.map((item, index) => `
        <div class="text-start list-bot-line">
            <span class="subtitle">${index+1}.</span> ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            <span class="subtitle">Signos vitales:</span>
        </div>
    ${vitalSigns.map((item, index) => `
        <div class="row text-start list-bot-line">
            <div class="col-4">
                <span class="subtitle">${index+1}.</span> ${item.vital_sign_desc}
            </div>
            <div class="col-8">
                ${item.value} ${item.unit_symbol}
            </div>
        </div>`).join("")
    }
        <div class="text-start">
            <span class="subtitle">IDX:</span>
        </div>
    ${idx.map((item, index) => `
        <div class="text-start list-bot-line">
            <span class="subtitle">${index+1}.</span> ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            <span class="subtitle">Exámenes solicitados:</span>
        </div>
    ${exams.map((item, index) => `
        <div class="text-start list-bot-line">
            <span class="subtitle">${index+1}.</span> ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            <span class="subtitle">Tratamiento:</span>
        </div>
    ${treatments.map((item, index) => `
        <div class="row text-start">
            <div class="col-6">
                <span class="subtitle">${index+1}.</span> ${item.medicine_name} ${item.medicine_dose} ${item.unit_symbol}
            </div>
            <div class="col-6">
                ${item.shape_description}
            </div>
        </div>
        <div class="row text-start">
            <div class="col-2">
                Cantidad:
            </div>
            <div class="col-2">
                ${item.quantity}
            </div>
            <div class="col-2">
                Dosis:
            </div>
            <div class="col-2">
                ${item.dosage}
            </div>
            <div class="col-2">
                Frecuencia:
            </div>
            <div class="col-2">
                ${item.frequency} h
            </div>
        </div>
        <div class="text-start list-bot-line">
            ${item.instructions}
        </div>`).join("")
    }
        <div class="text-start bot-line">
            <h5>
                III. Seguimiento
            </h5>
        </div>
    ${!json2? `<div>No hay seguimientos</div>`:
    json2.map((item) => `
        <div class="text-start">
            <span class="subtitle">Fecha:</span> ${formatDate(item.record.rdate)}
        </div>
        ${item.treatments.map((treatment, index) => `
        <div class="row text-start">
            <div class="col-6">
                <span class="subtitle">${index+1}.</span> ${treatment.medicine_name} ${treatment.medicine_dose} ${treatment.unit_symbol}
            </div>
            <div class="col-6">
                ${treatment.shape_description}
            </div>
        </div>
        <div class="row text-start">
            <div class="col-2">
                Cantidad:
            </div>
            <div class="col-2">
                ${treatment.quantity}
            </div>
            <div class="col-2">
                Dosis:
            </div>
            <div class="col-2">
                ${treatment.dosage}
            </div>
            <div class="col-2">
                Frecuencia:
            </div>
            <div class="col-2">
                ${treatment.frequency} h
            </div>
        </div>
        <div class="text-start list-bot-line">
            ${treatment.instructions}
        </div>`).join("")
        }
    `).join("")
    }
        <div>
            <button id="btnBack" class="btn btn-outline-secondary" type="button">
                Volver
            </button>
            <button id="btnAdd" class="btn btn-outline-primary" type="button">
                Añadir evolución
            </button>
        </div>
    `;

    const btnBack = document.getElementById("btnBack");
    btnBack.onclick = () => {
        resetFollowUpRecord();
        renderMain();
    };

    const btnAdd = document.getElementById("btnAdd");
    btnAdd.onclick = () => renderAddFollowUp(record);
}