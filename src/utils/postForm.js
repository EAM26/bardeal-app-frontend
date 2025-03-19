// src/utils/postForm.js

const handlePost = async (alarmIntake) => {
    try {
        const response = await fetch('http://localhost:8080/alarm/intake/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alarmIntake),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Form successfully submitted to backend:", data);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

export default handlePost;
