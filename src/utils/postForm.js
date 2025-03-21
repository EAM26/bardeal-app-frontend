import handlePDF from "./pdfCreate.js";

export async function handleIntakeForm (formRef)  {

    try {
        const form = formRef.current;
        const alarmIntake = {
            companyName: form.elements['name-ro'].value,
            timestamp: new Date().toISOString(),
            text: 'Alarm intake via PDF submit'
        };

        const pdfBlob = await handlePDF(form);
        if (!pdfBlob) {
            console.error("PDF error");
            return false;
        }


        const formData = new FormData();
        formData.append('alarmIntake', new Blob([JSON.stringify(alarmIntake)], {type: 'application/json'}));
        formData.append('pdfFile', pdfBlob, 'intakeformulier.pdf');

        const response = await fetch('http://localhost:8080/alarm/intake/form', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            console.error("Server responded with error status:", response.status);
            return false;
        }

        return true;

    } catch (e){
        console.error("Form submit error:", e);
        return false;
    }
}

export default handleIntakeForm;


