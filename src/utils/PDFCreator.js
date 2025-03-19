import html2pdf from 'html2pdf.js';

// const handlePDF =  (formRef) => {
//     const opt = {
//         margin: 10,
//         filename: 'intakeformulier.pdf',
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'mm', format: 'a4' },
//     };
//
//     html2pdf()
//         .from(formRef.current)
//         .set(opt)
//         .outputPdf('blob')
//         .then((pdfBlob) => {
//             const formData = new FormData();
//             formData.append('file', pdfBlob, 'intakeformulier.pdf');
//
//             fetch('http://localhost:8080/api/form/upload', {
//                 method: 'POST',
//                 body: formData,
//             }).then((res) => console.log('Verzonden!', res));
//         });
// }

const handlePDF = (formRef, filename = 'intakeformulier.pdf') => {
    const opt = {
        margin: 10,
        filename,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4' },
    };

    html2pdf()
        .set(opt)
        .from(formRef.current)
        .save(); // ⬅️ Save locally
};

export default handlePDF;
