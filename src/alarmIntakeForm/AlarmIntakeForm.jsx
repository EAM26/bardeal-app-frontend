import React, {useRef, useState} from 'react';
import './AlarmIntakeForm.css';
import Button from "../components/Button.jsx";
import RowRadioButtons from "../components/RowRadioButtons.jsx";

function AlarmIntakeForm() {
    const [formValues, setFormValues] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        console.log(e.target.value);
        e.preventDefault();
        const formData = new FormData(formRef.current);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
            // const success = await handleIntakeForm(formRef);
            // if (success) {
            //     console.log("Form created and submitted");
            // } else {
            //     console.log("Form submission failed");
            // }
        }
    }


        return (
            <div className="outer-container">
                <form ref={formRef} className="my_form" method="post" onSubmit={handleSubmit}>
                    <div className="data-risk-object">
                        <h2>Gegevens-risico-object</h2>
                        <div className="ro-items">
                            <div className="ro-item"><label htmlFor="rel-nr-ro">Relatienummer</label>
                                <input id="rel-nr-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="name-ro">Naam</label>
                                <input id="name-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="address-ro">Adres</label>
                                <input id="address-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="pstl-place-ro">Postcode/Plaats</label>
                                <input id="pstl-place-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="phone-ro">Telefoonnummer</label>
                                <input id="phone-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="email-ro">Email</label>
                                <input id="email-ro" type="email"/></div>
                        </div>
                    </div>
                    <RowRadioButtons
                        className="measure-items"
                        type="radio"
                        name="Organisatorisch"
                        selected={formValues}
                        handleChange={handleChange}
                        options={['O1', 'O2']}/>
                    <RowRadioButtons
                        className="measure-items"
                        type="radio"
                        name="Bouwkundig"
                        selected={formValues}
                        handleChange={handleChange}
                        options={['BK1', 'BK2', 'BK3', 'BK4']}/>

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );

}

export default AlarmIntakeForm;