import React, {useRef, useState} from 'react';
import './AlarmIntakeForm.css';
import handleIntakeForm from "../utils/postForm.js";

function AlarmIntakeForm() {
    const [selected, setSelected] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await handleIntakeForm(formRef);
        if (success) {
            console.log("Form created and submitted");
        } else {
            console.log("Form submission failed");
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
                <div className="adv-measures">
                    <h2>Geadviseerde maatregelen</h2>
                    <div className="measure-items">
                        <p>Organisatorisch</p>

                        {['O1', 'O2'].map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name="alarm"
                                    value={option}
                                    checked={selected === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default AlarmIntakeForm;