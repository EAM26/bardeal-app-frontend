import handlePDF from "./pdfCreate.js";
import axios from "axios";

export async function handleIntakeForm (formData)  {

    try {

        const alarmIntake = {
            companyName: formData.clientname,
            timestamp: new Date().toISOString(),
            text: 'Alarm intake via PDF submit'
        };

        const pdfBlob = await handlePDF();
        if (!pdfBlob) {
            console.error("PDF error");
            return false;
        }

        const uploadData = new FormData();
        uploadData.append('alarmIntake', new Blob([JSON.stringify(alarmIntake)], {type: 'application/json'}));
        uploadData.append('pdfFile', pdfBlob, 'intakeformulier.pdf');

        const response = await axios.post('http://localhost:8080/alarm', uploadData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.status >= 200 && response.status < 300;

    } catch (e){
        console.error("Form submit error:", e);
        return false;
    }
}

export default handleIntakeForm;


