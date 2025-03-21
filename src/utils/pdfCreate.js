import html2pdf from "html2pdf.js";


export async function handlePDF(form) {

    try {
        const opt = {
            margin: 10,
            filename: 'intakeformulier.pdf',
            html2canvas: {scale: 2},
            jsPDF: {unit: 'mm', format: 'a4'},


        };

        return await html2pdf()
            .set(opt)
            .from(form)
            .outputPdf('blob');
    } catch (e) {
        console.error("PDF error: ", e);
        return false;
    }
}

export default handlePDF;


