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

    const fullRecord = document.getElementById("fullRecord");
    fullRecord.innerHTML = `
        <div>
            <H4>Historia clínica</H4>
        </div>
        <div class="text-start">
            <h5>
                I. Filiación
            </h5>
        </div>
        <div class="row text-start">
            <div class="col-3">
                Nombres y Apellidos:
            </div>
            <div class="col-5">
                ${record.patient.last_name}, ${record.patient.name}
            </div>
            <div class="col-1">
                Fecha:
            </div>
            <div class="col-3">
                ${record.rdate}
            </div>
        </div>
        <div class="row text-start">
            <div class="col-3">
                Edad:
            </div>
            <div class="col-9">
                ${record.age} años
            </div>
        </div>
        <div class="row text-start">
            <div class="col-3">
                Peso:
            </div>
            <div class="col-9">
                ${record.weight} kg
            </div>
        </div>
        <div class="row text-start">
            <div class="col-3">
                Talla:
            </div>
            <div class="col-9">
                ${record.height} cm
            </div>
        </div>
        <div class="text-start">
            Antecedentes:
        </div>
    ${diseasesHistory.map((item, index) => `
        <div class="text-start">
            ${index+1}. ${item.disease_desc}
        </div>
        <div class="text-start">
            ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            <h5>
                II. Historia de la enfermedad
            </h5>
        </div>
        <div class="row text-start">
            <div class="col-4">
                Tiempo de enfermedad:
            </div>
            <div class="col-8">
                ${record.duration} días
            </div>
        </div>
        <div class="text-start">
            Síntomas respiratorios:
        </div>
    ${symptoms.map((item, index) => `
        <div class="text-start">
            ${index+1}. ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            Signos vitales:
        </div>
    ${vitalSigns.map((item, index) => `
        <div class="row text-start">
            <div class="col-4">
                ${index+1}. ${item.vital_sign_desc}
            </div>
            <div class="col-8">
                ${item.value} ${item.unit_symbol}
            </div>
        </div>`).join("")
    }
        <div class="text-start">
            IDX:
        </div>
    ${idx.map((item, index) => `
        <div class="text-start">
            ${index+1}. ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            Exámenes solicitados:
        </div>
    ${exams.map((item, index) => `
        <div class="text-start">
            ${index+1}. ${item.description}
        </div>`).join("")
    }
        <div class="text-start">
            Tratamiento:
        </div>
    ${treatments.map((item, index) => `
        <div class="row text-start">
            <div class="col-6">
                ${index+1}. ${item.medicine_name} ${item.medicine_dose} ${item.unit_symbol}
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
        <div class="text-start">
            ${item.instructions}
        </div>`).join("")
    }
        <div>
            <button onclick="renderMain()" class="btn btn-outline-secondary" type="button">
                Volver
            </button>
        </div>
    `;
}