import handlePDF from "./pdfCreate.js";
import axios from "axios";

export async function handleIntakeForm (formRef)  {

    try {
        const form = formRef.current;
        const alarmIntake = {
            companyName: form.elements['name-ro'].value,
            timestamp: new Date().toISOString(),
            text: 'Alarm intake via PDF submit'
        };

        const pdfBlob = await handlePDF();
        if (!pdfBlob) {
            console.error("PDF error");
            return false;
        }


        const formData = new FormData();
        formData.append('alarmIntake', new Blob([JSON.stringify(alarmIntake)], {type: 'application/json'}));
        formData.append('pdfFile', pdfBlob, 'intakeformulier.pdf');

        const response = await axios.post('http://localhost:8080/alarm', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.status === 200;

    } catch (e){
        console.error("Form submit error:", e);
        return false;
    }
}

export default handleIntakeForm;


