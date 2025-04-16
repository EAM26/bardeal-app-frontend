import handlePDF from "./pdfCreate.js";
import axios from "axios";

export async function handleIntakeForm (formData, form)  {

    try {

        const inputDTO = {
            clientName: formData.clientName,
            timestamp: new Date().toISOString(),
            text: 'Alarm intake via PDF submit'
        };

        const pdfBlob = await handlePDF(form);
        if (!pdfBlob) {
            console.error("PDF error");
            return false;
        }

        const uploadData = new FormData();
        uploadData.append('inputDTO', new Blob([JSON.stringify(inputDTO)], {type: 'application/json'}));
        uploadData.append('pdfFile', pdfBlob, 'intakeformulier.pdf');
        // console.log("******************;")
        // console.log("📄 PDF size in KB:", (pdfBlob.size / 1024).toFixed(2));
        // console.log("📄 PDF size in MB:", (pdfBlob.size / 1024 / 1024).toFixed(2));
        // console.log("******************;")


        const response = await axios.post(`${import.meta.env.VITE_API_URL}/alarm`, uploadData, {
        // const response = await axios.post('http://217.123.94.45:8080/fake-request', uploadData, {
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


