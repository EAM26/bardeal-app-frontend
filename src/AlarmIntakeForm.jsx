import React from 'react';
import './AlarmIntakeForm.css';
import { useState } from 'react';


function AlarmIntakeForm() {
    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")
    }
    return (
        <div className="outer-container">
            <form onSubmit={handleSubmit}>
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