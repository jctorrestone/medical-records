async function renderVitalSigns() {
    await loadPage("vital_signs");
    const json = await fetchAPI("vital-signs", "GET");

    const group_list = document.getElementById("vitalSigns");
    group_list.list = json;
    group_list.method = oncheckedVitalSign;
    group_list.check = VitalSign.className;
    group_list.init();

    const vitalSigns = document.getElementById("vitalSigns");
    fullRecord.vital_signs.forEach((vital_sign) => {
        const checkbox = document.querySelector(`input[type=checkbox][value="${vital_sign.vital_sign_id}"]`);
        checkbox.checked = true;
        const group = checkbox.parentNode.parentNode;
        const input = group.querySelector("input[type=number]");
        input.value = vital_sign.value;
    });
}

async function oncheckedVitalSign(checkbox, vitalSign) {
    const group = checkbox._check.parentNode.parentNode;
    const input = group.querySelector("input[type=number]");

    if(checkbox._check.checked) {
        fullRecord.vital_signs.push({
            vital_sign_id: vitalSign.id,
            value: Number(input.value)
        });
    }
    else {
        fullRecord.vital_signs = fullRecord.vital_signs.filter(vs => vs.vital_sign_id != vitalSign.id);
    }
}